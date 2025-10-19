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
  const fallbackImages = [
  { 
    src: "/images/3 little engineers.jpeg",
    title: "Little engineers",
    category: "STEM",
  },
  {
    src: "/images/3 students posing.jpeg",
    title: "Students posing",
    category: "Student Life",
  },
  {
    src: "/images/award wining girl 1.jpeg",
    title: "Award winning student",
    category: "Achievements",
  },
  {
    src: "/images/award winning student 1.jpeg",
    title: "Award winning student",
    category: "Achievements",
  },
  {
    src: "/images/basic-tech-1.jpeg",
    title: "Science lab activities",
    category: "STEM",
  },
  {
    src: "/images/engineer drawing.jpeg",
    title: "Little engineer drawing",
    category: "STEM",
  },
  {
    src: "/images/primary students with red group picture.jpeg",
    title: "Primary students group photo",
    category: "Student Life",
  },
  {
    src: "/images/student-speech.jpeg",
    title: "Student giving speech",
    category: "Student Life",
  },
  {
    src: "/images/students-radio.jpeg",
    title: "Students at radio station",
    category: "Activities",
  },
  {
    src: "/images/red-house-vs-yellow-house-volleyball.jpeg",
    title: "Volleyball match",
    category: "Sports",
  },
  {
    src: "/images/student-mentor.jpeg",
    title: "Student mentorship",
    category: "Student Life",
  },
  {
    src: "/images/nigerian_students_cream_bowties_distinct_faces.jpg",
    title: "Students in uniform",
    category: "Student Life",
  },
];

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};