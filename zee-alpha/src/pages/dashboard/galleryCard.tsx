import React from 'react';
import { type GalleryImage } from './types';
import { Edit2, Trash2 } from 'lucide-react';

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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative group">
        <img 
          src={image.src} 
          alt={image.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-block px-3 py-1 bg-white/90 text-blue-900 text-sm rounded-full font-medium backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{image.title}</h3>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex gap-2 bg-gray-50">
        <button
          onClick={() => onEdit(image)}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-200 hover:border-blue-300"
        >
          <Edit2 size={16} />
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-200 hover:border-red-300"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;