import React, { useState } from "react";
import { useDashboard } from "./DashboardContext";
import {
  type GalleryImage,
  type NewsEvent,
  type ImageFormData,
  type NewsFormData,
} from "./types";
import Sidebar from "./sidebar";
import GalleryTab from "./gallerytab";
import NewsTab from "./newsTab";
import ImageModal from "./imageModal";
import NewsModal from "./newsModal";

const GalleryTabComponent = GalleryTab as React.ComponentType<any>;
const NewsTabComponent = NewsTab as React.ComponentType<any>;

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gallery" | "news">("gallery");
  const [showImageModal, setShowImageModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingItem, setEditingItem] = useState<
    GalleryImage | NewsEvent | null
  >(null);

  const {
    galleryImages,
    newsEvents,
    addImage,
    updateImage,
    deleteImage,
    addNewsEvent,
    updateNewsEvent,
    deleteNewsEvent,
  } = useDashboard();

  const [imageForm, setImageForm] = useState<ImageFormData>({
    title: "",
    category: "General",
    imageFile: null,
    imagePreview: null,
  });

  const [newsForm, setNewsForm] = useState<NewsFormData>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "General",
  });

  const handleImageFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageForm((prev) => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result as string,
          title: prev.title || file.name.replace(/\.[^/.]+$/, ""),
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = (): void => {
    if (!imageForm.imagePreview || !imageForm.title.trim()) {
      alert("Please provide both an image and a title");
      return;
    }

    const baseImageData = {
      src: imageForm.imagePreview,
      title: imageForm.title.trim(),
      category: imageForm.category,
      alt: imageForm.title.trim(),
    };

    if (editingItem) {
      const imageData = {
        ...baseImageData,
        id: editingItem.id,
        createdAt: (editingItem as GalleryImage).createdAt,
      };
      updateImage(editingItem.id, imageData);
    } else {
      addImage(baseImageData);
    }

    resetImageForm();
  };

  const handleNewsSubmit = (): void => {
    if (!newsForm.title.trim()) {
      alert("Please provide a title");
      return;
    }

    const eventData = {
      title: newsForm.title.trim(),
      date: newsForm.date,
      time: newsForm.time,
      location: newsForm.location,
      description: newsForm.description,
      category: newsForm.category,
    };

    if (editingItem) {
      updateNewsEvent(editingItem.id, eventData);
    } else {
      addNewsEvent(eventData);
    }

    resetNewsForm();
  };

  const resetImageForm = (): void => {
    setImageForm({
      title: "",
      category: "General",
      imageFile: null,
      imagePreview: null,
    });
    setShowImageModal(false);
    setEditingItem(null);
  };

  const resetNewsForm = (): void => {
    setNewsForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: "General",
    });
    setShowNewsModal(false);
    setEditingItem(null);
  };

  const openEditImage = (image: GalleryImage): void => {
    setEditingItem(image);
    setImageForm({
      title: image.title,
      category: image.category,
      imageFile: null,
      imagePreview: image.src,
    });
    setShowImageModal(true);
  };

  const openEditNews = (event: NewsEvent): void => {
    setEditingItem(event);
    setNewsForm({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      category: event.category,
    });
    setShowNewsModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen bg-gray-50 font-sans">
        {/* Sidebar - Fixed width */}
        <div className="w-80 flex-shrink-0">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content - Flexible width with proper scrolling */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-auto p-8">
            {activeTab === "gallery" && (
              <GalleryTabComponent
                galleryImages={galleryImages}
                deleteImage={deleteImage}
                openEditImage={openEditImage}
                setShowImageModal={setShowImageModal}
              />
            )}

            {activeTab === "news" && (
              <NewsTabComponent
                newsEvents={newsEvents}
                deleteNewsEvent={deleteNewsEvent}
                openEditNews={openEditNews}
                setShowNewsModal={setShowNewsModal}
              />
            )}
          </div>
        </div>
      </div>

      <ImageModal
        showImageModal={showImageModal}
        editingItem={editingItem as GalleryImage}
        imageForm={imageForm}
        setImageForm={setImageForm}
        handleImageFileChange={handleImageFileChange}
        handleImageSubmit={handleImageSubmit}
        resetImageForm={resetImageForm}
      />

      <NewsModal
        showNewsModal={showNewsModal}
        editingItem={editingItem as NewsEvent}
        newsForm={newsForm}
        setNewsForm={setNewsForm}
        handleNewsSubmit={handleNewsSubmit}
        resetNewsForm={resetNewsForm}
      />
    </div>
  );
};

export default Dashboard;