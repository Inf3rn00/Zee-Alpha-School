import React from 'react';
import { type NewsEvent, type NewsFormData } from './types';

interface NewsModalProps {
  showNewsModal: boolean;
  editingItem: NewsEvent | null;
  newsForm: NewsFormData;
  setNewsForm: (form: NewsFormData) => void;
  handleNewsSubmit: () => void;
  resetNewsForm: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({
  showNewsModal,
  editingItem,
  newsForm,
  setNewsForm,
  handleNewsSubmit,
  resetNewsForm
}) => {
  if (!showNewsModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNewsSubmit();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={resetNewsForm}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {editingItem ? 'Edit Event' : 'Add Event'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={newsForm.title}
                onChange={e => setNewsForm({ ...newsForm, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter event title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={newsForm.category}
                onChange={e => setNewsForm({ ...newsForm, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>General</option>
                <option>Cultural</option>
                <option>Academic</option>
                <option>Sports</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={newsForm.date}
                onChange={e => setNewsForm({ ...newsForm, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="text"
                value={newsForm.time}
                onChange={e => setNewsForm({ ...newsForm, time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="9:00 AM - 3:00 PM"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={newsForm.location}
              onChange={e => setNewsForm({ ...newsForm, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Event location"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={newsForm.description}
              onChange={e => setNewsForm({ ...newsForm, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Event description"
              rows={4}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={resetNewsForm}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newsForm.title.trim()}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              {editingItem ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;