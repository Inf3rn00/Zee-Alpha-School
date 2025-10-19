import React from 'react';
import { type GalleryImage } from './types';
import GalleryCard from './galleryCard';
import EmptyState from './emptyState';
import { Plus } from 'lucide-react';

interface GalleryTabProps {
  galleryImages: GalleryImage[];
  deleteImage: (id: number) => void;
  openEditImage: (image: GalleryImage) => void;
  setShowImageModal: (show: boolean) => void;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  galleryImages,
  deleteImage,
  openEditImage,
  setShowImageModal
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
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
              onDelete={deleteImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryTab;