import React from 'react';
import { type NewsEvent } from './types';
import { Edit2, Trash2, Calendar, Clock, MapPin } from 'lucide-react';

interface NewsCardProps {
  event: NewsEvent;
  onEdit: (event: NewsEvent) => void;
  onDelete: (id: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ event, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event.id);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-900 text-sm rounded-full font-semibold border border-white/30">
            {event.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight line-clamp-2">
          {event.title}
        </h3>
        
        <div className="space-y-3 text-gray-600 mb-4">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-sm">
          {event.description}
        </p>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(event)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
          >
            <Edit2 size={16} />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;