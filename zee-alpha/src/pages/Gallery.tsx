import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  LayoutGrid,
  CheckCircle,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { useDashboard } from "./dashboard/DashboardContext";


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const { galleryImages } = useDashboard();

  // Use only dashboard images, no fallbacks for uploaded content
  const displayImages = galleryImages;

  // Get unique categories from displayImages
  const categories = [
    "All",
    ...new Set(displayImages.map((img) => img.category)),
  ];

// Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? displayImages
      : displayImages.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (prev) => (prev! - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  function getCurrentYear(): number {
    return new Date().getFullYear();
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Using Admissions styling */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Photo Gallery
          </h1>
          <div className="w-32 h-1 bg-white rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Capturing the vibrant moments, achievements, and daily life at
            Zee-Alpha International Schools
          </p>
        </div>
      </section>

      {/* Welcome Section - Using Admissions styling */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Our Gallery
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Step into the vibrant world of Zee-Alpha International Schools
                through our photo gallery. Each image tells a story of academic
                excellence, personal growth, and the joyful moments that make
                our school community so special.
              </p>

              <p>
                From classroom activities and sports events to cultural
                celebrations and academic achievements, our gallery showcases
                the diverse experiences that shape our students' educational
                journey.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">High-Quality Images</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Multiple Categories</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Regular Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Easy Navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-2xl font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-red-600 text-white shadow-lg shadow-red-200/50"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === "masonry"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Photo Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our carefully curated collection of memorable
              moments and achievements
            </p>
            
            
          </div>

          {viewMode === "grid" ? (
            // Grid Layout
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => ( 
                <GalleryCard
                  key={image.src || index}
                  image={image}
                  index={index}
                  onClick={() =>
                    setSelectedImage(
                      filteredImages.findIndex((img) => img.src === image.src)
                    )
                  }
                />
              ))}
            </div>
          ) : (
            // Masonry Layout
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <div key={image.src || index} className="break-inside-avoid">
                  <GalleryCard
                    image={image}
                    index={index}
                    onClick={() =>
                      setSelectedImage(
                        filteredImages.findIndex((img) => img.src === image.src)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Using Admissions card styling */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-red-200/60">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {displayImages.length}+
              </div>
              <div className="text-gray-700 font-semibold">
                Memorable Moments
              </div>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-red-200/60">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-700 font-semibold">Categories</div>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-red-200/60">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {getCurrentYear()}
              </div>
              <div className="text-gray-700 font-semibold">Current Year</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Using Admissions styling */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Zee-Alpha Through Our Lens
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            See why our students love coming to school every day. Explore the
            vibrant community that makes Zee-Alpha special.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:info@zeealphaschools.com?subject=Schedule%20Campus%20Tour&body=I%20would%20like%20to%20schedule%20a%20campus%20tour.%20Please%20provide%20more%20information"
              className="inline-block bg-white hover:bg-gray-100 text-red-600 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Schedule Campus Tour
            </a>
          </div>
        </div>
      </section>

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
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-white text-center min-w-[200px]">
              <div className="text-sm font-semibold text-red-300 mb-1">
                {filteredImages[selectedImage].category}
              </div>
              <div className="text-lg font-semibold">
                {filteredImages[selectedImage].alt}
              </div>
              <div className="text-sm text-white/70 mt-1">
                {selectedImage + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Separate Gallery Card Component for reusability
function GalleryCard({
  image,
  onClick,
}: {
  image: any;
  index: number;
  onClick: () => void;
}) {
  return (
    <Card 
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Featured Badge */}
      {image.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg">
          Featured
        </div>
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
    </Card>
  );
}