import React from 'react';
import {type NewsEvent } from './types';

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
    <div className="bg-blue-900 text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <span className="inline-block px-3 py-1 bg-blue-700/50 text-blue-100 text-sm rounded-full font-medium mb-4">
        {event.category}
      </span>
      <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
      <div className="space-y-2 text-blue-100 mb-4">
        <p>📅 {event.date}</p>
        <p>🕐 {event.time}</p>
        <p>📍 {event.location}</p>
      </div>
      <p className="text-blue-100 mb-6 leading-relaxed">{event.description}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(event)}
          className="flex-1 bg-blue-500 hover:bg-blue-400 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 hover:bg-red-400 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsCard;