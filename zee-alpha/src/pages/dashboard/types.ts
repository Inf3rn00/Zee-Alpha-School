export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  featured?: boolean;
  createdAt: string;
}

export interface ImageFormData {
  title: string;
  category: string;
  imageFile: File | null;
  imagePreview: string;
}

export interface NewsEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  createdAt: string;
}


export interface NewsFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export interface DashboardContextType {
  galleryImages: GalleryImage[];
  newsEvents: NewsEvent[];
  addImage: (imageData: Omit<GalleryImage, 'id' | 'createdAt'>) => GalleryImage;
  updateImage: (id: number, updates: Partial<GalleryImage>) => void;
  deleteImage: (id: number) => void;
  addNewsEvent: (eventData: Omit<NewsEvent, 'id' | 'createdAt'>) => NewsEvent;
  updateNewsEvent: (id: number, updates: Partial<NewsEvent>) => void;
  deleteNewsEvent: (id: number) => void;
}