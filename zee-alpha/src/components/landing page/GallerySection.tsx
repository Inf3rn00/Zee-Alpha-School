import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const galleryImages = [
  {
    src: "/images/3 little engineers.jpeg",
    alt: "Little engineers",
    category: "STEM",
  },
  {
    src: "/images/3 students posing.jpeg",
    alt: "Students posing",
    category: "Student Life",
  },
  {
    src: "/images/award wining girl 1.jpeg",
    alt: "Award winning student",
    category: "Achievements",
  },
  {
    src: "/images/award winning student 1.jpeg",
    alt: "Award winning student",
    category: "Achievements",
  },
  {
    src: "/images/students in class 4.jpeg",
    alt: "Science lab activities",
    category: "Student Life",
  },
  {
    src: "/images/engineer drawing.jpeg",
    alt: "Little engineer drawing",
    category: "STEM",
  },
];

export function GallerySection() {
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (

    <section
      
      className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute bottom-70 right-10 w-52 h-52 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div
          className="absolute  top-40 left-1/3  w-40 h-40 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='Á0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our vibrant school community through photos of students,
            staff, facilities, activities, and our inspiring learning
            environment that fosters growth and excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  // alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold mb-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {image.category}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white w-full h-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 border border-red-200/60 shadow-2xl shadow-red-100/30">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Discover More Memories
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore our complete photo collection showcasing student
              achievements, campus life, and memorable moments throughout the
              academic year.
            </p>
             <Link to="/gallery">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white cursor-pointer rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-red-200/50 border-0">
           View Full Gallery
            </button>
            </Link>  
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 w-12 h-12 bg-white/10 hover:bg-white/20 text-white p-2 rounded-2xl transition-all duration-300 hover:scale-110 z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                // alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-white text-center">
              <div className="text-sm font-semibold text-red-300 mb-1">
                {galleryImages[selectedImage].category}
              </div>
              <div className="text-lg font-semibold">
                {/* {galleryImages[selectedImage].alt} */}
              </div>
              <div className="text-sm text-white/70 mt-1">
                {selectedImage + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
