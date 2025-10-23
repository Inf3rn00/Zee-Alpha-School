import React, { useState, createContext, useContext, type ReactNode } from 'react';
import { type DashboardContextType, type GalleryImage,type  NewsEvent } from './types';

const DashboardContext = createContext<DashboardContextType | null>(null);

interface DashboardProviderProps {
  children: ReactNode;
}

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
};

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);

  const addImage = (imageData: Omit<GalleryImage, 'id' | 'createdAt'>): GalleryImage => {
    const newImage: GalleryImage = {
      id: Date.now(),
      ...imageData,
      createdAt: new Date().toISOString()
    };
    setGalleryImages(prev => [...prev, newImage]);
    return newImage;
  };

  const updateImage = (id: number, updates: Partial<GalleryImage>): void => {
    setGalleryImages(prev => 
      prev.map(img => img.id === id ? { ...img, ...updates } : img)
    );
  };

  const deleteImage = (id: number): void => {
    setGalleryImages(prev => prev.filter(img => img.id !== id));
  };

  const addNewsEvent = (eventData: Omit<NewsEvent, 'id' | 'createdAt'>): NewsEvent => {
    const newEvent: NewsEvent = {
      id: Date.now(),
      ...eventData,
      createdAt: new Date().toISOString()
    };
    setNewsEvents(prev => [...prev, newEvent]);
    return newEvent;
  };

  const updateNewsEvent = (id: number, updates: Partial<NewsEvent>): void => {
    setNewsEvents(prev =>
      prev.map(event => event.id === id ? { ...event, ...updates } : event)
    );
  };

  const deleteNewsEvent = (id: number): void => {
    setNewsEvents(prev => prev.filter(event => event.id !== id));
  };

  const value: DashboardContextType = {
    galleryImages,
    newsEvents,
    addImage,
    updateImage,
    deleteImage,
    addNewsEvent,
    updateNewsEvent,
    deleteNewsEvent
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};