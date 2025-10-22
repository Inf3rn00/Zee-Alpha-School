import React, { useState } from 'react';
import { type NewsEvent, type NewsFormData } from './types';
import NewsCard from './newsCard';
import EmptyState from './emptyState';
import NewsModal from './newsModal';
import { Plus } from 'lucide-react';
import { useDashboard } from './DashboardContext';

interface NewsTabProps {
  // Props can be removed since we're using context
}

const NewsTab: React.FC<NewsTabProps> = () => {
  const { newsEvents, addNewsEvent, updateNewsEvent, deleteNewsEvent } = useDashboard();
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsEvent | null>(null);

  const [newsForm, setNewsForm] = useState<NewsFormData>({
    title: '',
    category: 'General',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleNewsSubmit = () => {
    if (!newsForm.title.trim()) return;

    if (editingItem) {
      // Update existing event
      updateNewsEvent(editingItem.id, {
        title: newsForm.title,
        category: newsForm.category,
        date: newsForm.date,
        time: newsForm.time,
        location: newsForm.location,
        description: newsForm.description,
      });
    } else {
      // Add new event
      const newEvent: Omit<NewsEvent, 'id'> = {
        title: newsForm.title,
        category: newsForm.category,
        date: newsForm.date,
        time: newsForm.time,
        location: newsForm.location,
        description: newsForm.description,
      };

      addNewsEvent(newEvent);
    }

    resetNewsForm();
    setShowNewsModal(false);
  };

  const resetNewsForm = () => {
    setNewsForm({
      title: '',
      category: 'General',
      date: '',
      time: '',
      location: '',
      description: '',
    });
    setEditingItem(null);
    setShowNewsModal(false);
  };

  const openEditNews = (event: NewsEvent) => {
    setEditingItem(event);
    setNewsForm({
      title: event.title,
      category: event.category,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
    });
    setShowNewsModal(true);
  };

  const handleDeleteNews = (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteNewsEvent(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News & Events</h1>
          <p className="text-gray-600 mt-1">{newsEvents.length} events</p>
        </div>
        <button
          className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={() => setShowNewsModal(true)}
        >
          <Plus size={20} />
          Add Event
        </button>
      </div>

      {newsEvents.length === 0 ? (
        <EmptyState
          title="No events scheduled"
          subtitle="Create your first event to get started"
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {newsEvents.map(event => (
            <NewsCard
              key={event.id}
              event={event}
              onEdit={openEditNews}
              onDelete={handleDeleteNews}
            />
          ))}
        </div>
      )}

      <NewsModal
        showNewsModal={showNewsModal}
        editingItem={editingItem}
        newsForm={newsForm}
        setNewsForm={setNewsForm}
        handleNewsSubmit={handleNewsSubmit}
        resetNewsForm={resetNewsForm}
      />
    </div>
  );
};

export default NewsTab;