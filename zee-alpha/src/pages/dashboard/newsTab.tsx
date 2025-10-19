import React from 'react';
import { type NewsEvent } from './types';
import NewsCard from './newsCard';
import EmptyState from './emptyState';
import { Plus } from 'lucide-react';

interface NewsTabProps {
  newsEvents: NewsEvent[];
  deleteNewsEvent: (id: number) => void;
  openEditNews: (event: NewsEvent) => void;
  setShowNewsModal: (show: boolean) => void;
}

const NewsTab: React.FC<NewsTabProps> = ({
  newsEvents,
  deleteNewsEvent,
  openEditNews,
  setShowNewsModal
}) => {
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
              onDelete={deleteNewsEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsTab;