import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "/images/3 little engineers.jpeg",
    alt: "# little engineers",
  },
  {
    src: "/images/3 students posing.jpeg",
    alt: "Students posing",
  },
  {
    src: "/images/award wining girl 1.jpeg",
    alt: "Award winning",
  },
  {
    src: "/images/award winning student 1.jpeg",
    alt: "Award winning student",
  },
  {
    src: "/images/basic-tech-1.jpeg",
    alt: "Science lab activities",
  },
  {
    src: "/images/engineer drawing.jpeg",
    alt: "little engineer drawing",
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
