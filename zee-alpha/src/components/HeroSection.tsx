import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/playground1.jpeg",
    title: "ZEE-ALPHA INTERNATIONAL SCHOOLS",
    subtitle: "Excellence Through Knowledge, Character Through Values",
    description: "Empowering global citizens through innovative education and moral excellence.",
  },
  {
    image: "/images/students-in-ict-main.jpeg",
    title: "Scientific Excellence",
    subtitle: "Innovation Through Discovery",
    description: "State-of-the-art laboratories fostering scientific inquiry and technological advancement.",
  },
  {
    image: "/images/nig-group-pic.jpeg",
    title: "Global Cultures Hub",
    subtitle: "Celebrating World Heritage",
    description: "A multicultural space featuring literature, artifacts, and resources from diverse cultures worldwide.",
  },
  {
    image: "/images/green vs blue house .jpeg",
    title: "Sports Excellence",
    subtitle: "Building Champions in Life",
    description: "Comprehensive sports programs developing physical fitness, teamwork, and competitive spirit.",
  },
  {
    image: "/images/students showcasing images.jpeg", 
    title: "Creative Arts",
    subtitle: "Inspiring Imagination",
    description: "Nurturing creativity and artistic expression through comprehensive arts education programs.",
  },
  {
    image: "/images/book day group.jpeg",
    title: "Young World Readers",
    subtitle: "Stories from Every Culture",
    description: "Engaging multicultural storybooks and reading programs that introduce children to diverse traditions.",
  },
  {
    image: "/images/primary grad pics (mixed).jpeg",
    title: "Achievement & Success",
    subtitle: "Celebrating Excellence",
    description: "Recognizing the achievements of our graduates as they embark on their journey to change the world.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fixed useEffect - removed currentSlide from dependencies
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []); // ✅ Empty dependency array

  const handleSlideChange = (newIndex: any) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide(newIndex);

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          {/* Image background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-6 text-gray-200">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 text-gray-300 max-w-2xl">
                  {slide.description}
                </p>
                <div className="space-x-4">
                  <Button
                    size="lg"
                    className="bg-red-700 hover:bg-red-800 text-white border border-red-700"
                  >
                    Apply for Admission
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                  >
                    Take a Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30 disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-colors disabled:opacity-50 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}