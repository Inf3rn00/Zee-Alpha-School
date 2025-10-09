import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/playground1.jpeg",
    title: "ZEE-ALPHA INTERNATIONAL SCHOOLS",
    subtitle: "Excellence Through Knowledge, Character Through Values",
    description: "Empowering global citizens through innovative education and moral excellence."
  },
  {
    image: "https://images.unsplash.com/photo-1636386689060-37d233b5d345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTkzMjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Scientific Excellence",
    subtitle: "Innovation Through Discovery",
    description: "State-of-the-art laboratories fostering scientific inquiry and technological advancement."
  },
  {
    image: "https://images.unsplash.com/photo-1578402027442-b0d03cd2c0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHMlMjByZWFkaW5nfGVufDF8fHx8MTc1OTQxMTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Learning Hub",
    subtitle: "Knowledge Without Boundaries", 
    description: "Modern library facilities promoting research, reading culture, and lifelong learning."
  },
  {
    image: "https://images.unsplash.com/photo-1735457818413-38a9e99f05a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc1OTMzODIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sports Excellence",
    subtitle: "Building Champions in Life",
    description: "Comprehensive sports programs developing physical fitness, teamwork, and competitive spirit."
  },
  {
    image: "https://images.unsplash.com/photo-1556419936-a81f78b70a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhc3NlbWJseSUyMGF1ZGl0b3JpdW18ZW58MXx8fHwxNzU5NDExMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Community Gatherings",
    subtitle: "Unity in Diversity",
    description: "Bringing our school community together through assemblies, celebrations, and shared experiences."
  },
  {
    image: "https://images.unsplash.com/photo-1642252429939-3f9232959eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBjbGFzcyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1OTQxMTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Creative Arts",
    subtitle: "Inspiring Imagination",
    description: "Nurturing creativity and artistic expression through comprehensive arts education programs."
  },
  {
    image: "https://images.unsplash.com/photo-1652285374663-d06ce650028a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU5MzI5NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Achievement & Success",
    subtitle: "Celebrating Excellence",
    description: "Recognizing the achievements of our graduates as they embark on their journey to change the world."
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transitioning state after animation completes
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
      {/* Render all slides for transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ 
            zIndex: index === currentSlide ? 10 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
         
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-6 text-gray-200">{slide.subtitle}</p>
                <p className="text-lg mb-8 text-gray-300 max-w-2xl">{slide.description}</p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white">
                    Apply for Admission
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30"
        disabled={isTransitioning}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-30"
        disabled={isTransitioning}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </section>
  );
}