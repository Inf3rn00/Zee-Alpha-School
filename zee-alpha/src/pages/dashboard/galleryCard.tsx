import React from 'react';
import {type  GalleryImage } from './types';

interface GalleryCardProps {
  image: GalleryImage;
  onEdit: (image: GalleryImage) => void;
  onDelete: (id: number) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      onDelete(image.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image.src} 
        alt={image.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{image.title}</h3>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
          {image.category}
        </span>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
        <button
          onClick={() => onEdit(image)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;