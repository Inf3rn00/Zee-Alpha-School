// DashboardContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { type GalleryImage, type NewsEvent } from './types';

interface DashboardContextType {
  galleryImages: GalleryImage[];
  addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void;
  updateGalleryImage: (id: number, image: Partial<GalleryImage>) => void;
  deleteGalleryImage: (id: number) => void;
  setGalleryImages: (images: GalleryImage[]) => void;
  
  // News Events
  newsEvents: NewsEvent[];
  addNewsEvent: (event: Omit<NewsEvent, 'id'>) => void;
  updateNewsEvent: (id: number, event: Partial<NewsEvent>) => void;
  deleteNewsEvent: (id: number) => void;
  setNewsEvents: (events: NewsEvent[]) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('galleryImages');
    const savedEvents = localStorage.getItem('newsEvents');
    
    if (savedImages) {
      setGalleryImages(JSON.parse(savedImages));
    }
    if (savedEvents) {
      setNewsEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem('newsEvents', JSON.stringify(newsEvents));
  }, [newsEvents]);

  // Gallery functions
  const addGalleryImage = (image: Omit<GalleryImage, 'id'>) => {
    const newImage: GalleryImage = {
      ...image,
      id: Date.now(),
    };
    setGalleryImages(prev => [...prev, newImage]);
  };

  const updateGalleryImage = (id: number, updatedImage: Partial<GalleryImage>) => {
    setGalleryImages(prev =>
      prev.map(img => (img.id === id ? { ...img, ...updatedImage } : img))
    );
  };

  const deleteGalleryImage = (id: number) => {
    setGalleryImages(prev => prev.filter(img => img.id !== id));
  };

  // News Events functions
  const addNewsEvent = (event: Omit<NewsEvent, 'id'>) => {
    const newEvent: NewsEvent = {
      ...event,
      id: Date.now(),
    };
    setNewsEvents(prev => [...prev, newEvent]);
  };

  const updateNewsEvent = (id: number, updatedEvent: Partial<NewsEvent>) => {
    setNewsEvents(prev =>
      prev.map(event => (event.id === id ? { ...event, ...updatedEvent } : event))
    );
  };

  const deleteNewsEvent = (id: number) => {
    setNewsEvents(prev => prev.filter(event => event.id !== id));
  };

  return (
    <DashboardContext.Provider
      value={{
        galleryImages,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        setGalleryImages,
        newsEvents,
        addNewsEvent,
        updateNewsEvent,
        deleteNewsEvent,
        setNewsEvents,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};