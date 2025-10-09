import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTk4NjI1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Students in classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1700671562333-f71286a7c748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGNhbXB1c3xlbnwxfHx8fDE3NTk5MzYxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "School campus building",
  },
  {
    src: "https://images.unsplash.com/photo-1759763494425-58fc490742ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGFjdGl2aXR5fGVufDF8fHx8MTc1OTkzNjE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Students sports activities",
  },
  {
    src: "https://images.unsplash.com/photo-1660606422342-2ce59709bb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzU5ODQ0NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "School library",
  },
  {
    src: "https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNjaWVuY2UlMjBsYWJ8ZW58MXx8fHwxNzU5OTM2MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Science lab activities",
  },
  {
    src: "https://images.unsplash.com/photo-1652285374663-d06ce650028a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU5ODUzMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Graduation ceremony",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant school community through photos of students, staff, facilities, activities, and our inspiring learning environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
