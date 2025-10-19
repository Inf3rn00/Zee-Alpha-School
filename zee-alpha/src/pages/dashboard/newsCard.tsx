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
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-white/30">
          {event.category}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-white leading-tight">{event.title}</h3>
      
      <div className="space-y-3 text-blue-100 mb-4">
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-blue-200" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={16} className="text-blue-200" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-blue-200" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <p className="text-blue-100 mb-6 leading-relaxed line-clamp-3">{event.description}</p>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(event)}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-100 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
        >
          <Edit2 size={16} />
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsCard;