import React, { useState } from 'react';
import { type GalleryImage, type ImageFormData } from './types';
import GalleryCard from './galleryCard';
import EmptyState from './emptyState';
import ImageModal from './imageModal';
import { Plus } from 'lucide-react';
import { useDashboard } from './DashboardContext';



const GalleryTab = () => {
  const { galleryImages, addImage, updateImage, deleteImage } = useDashboard();
  const [showImageModal, setShowImageModal] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryImage | null>(null);

  const [imageForm, setImageForm] = useState<ImageFormData>({
    title: '',
    category: 'General',
    imageFile: null,
    imagePreview: '',
  });

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImageForm(prev => ({
        ...prev,
        imageFile: file,
        imagePreview: previewUrl,
      }));
    }
  };

  const handleImageSubmit = () => {
    if (!imageForm.title.trim()) return;

    if (editingItem) {
      // Update existing image
      const updatedFields: Partial<GalleryImage> = {
        title: imageForm.title,
        category: imageForm.category,
      };

      // Only update src if a new image file was selected
      if (imageForm.imageFile && imageForm.imagePreview) {
        updatedFields.src = imageForm.imagePreview;
        updatedFields.alt = imageForm.title;
      }

      updateImage(editingItem.id, updatedFields);
    } else {
      // Add new image
      if (!imageForm.imageFile || !imageForm.imagePreview) return;

      const newImage: Omit<GalleryImage, 'id'> = {
        src: imageForm.imagePreview, 
        alt: imageForm.title,
        title: imageForm.title,
        category: imageForm.category,
        featured: false,
        createdAt: new Date().toISOString(),
      };

      addImage(newImage);
    }

    resetImageForm();
    setShowImageModal(false);
  };

  const resetImageForm = () => {
    setImageForm({
      title: '',
      category: 'General',
      imageFile: null,
      imagePreview: '',
    });
    setEditingItem(null);
    setShowImageModal(false);
  };

  const openEditImage = (image: GalleryImage) => {
    setEditingItem(image);
    setImageForm({
      title: image.title,
      category: image.category,
      imageFile: null,
      imagePreview: image.src,
    });
    setShowImageModal(true);
  };

  const handleDeleteImage = (id: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      deleteImage(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className=''>
          <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600 mt-1">{galleryImages.length} images</p>
        </div>
        <button
          className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={() => setShowImageModal(true)}
        >
          <Plus size={20} />
          Upload Image
        </button>
      </div>

      {galleryImages.length === 0 ? (
        <EmptyState
          title="No images uploaded yet"
          subtitle="Upload your first image to get started"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map(image => (
            <GalleryCard
              key={image.id}
              image={image}
              onEdit={openEditImage}
              onDelete={handleDeleteImage}
            />
          ))}
        </div>
      )}

      <ImageModal
        showImageModal={showImageModal}
        editingItem={editingItem}
        imageForm={imageForm}
        setImageForm={setImageForm}
        handleImageFileChange={handleImageFileChange}
        handleImageSubmit={handleImageSubmit}
        resetImageForm={resetImageForm}
      />
    </div>
  );
};

export default GalleryTab;