import { Card } from "../ui/card";
import {
  CheckCircle,
  Star,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const curriculumLevels = [
  {
    title: "Early Years (Creche & Nursery)",
    description:
      "Play-based learning that sparks curiosity and builds foundational skills through engaging activities.",
    icon: <Star className="w-6 h-6" />,
    image: "/images/grad-nursery.jpeg",
  },
  {
    title: "Primary School",
    description:
      "Strong foundation in literacy, numeracy, science and creativity to prepare students for advanced learning.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "/images/presentation-primary-main.jpeg",
  },
  {
    title: "Secondary School",
    description:
      "Advanced learning in sciences, arts, and technology with opportunities for international examinations.",
    icon: <Award className="w-6 h-6" />,
    image: "/images/grad-group.jpeg",
  },
];

const highlights = [
  "Dedicated and highly qualified teachers",
  "Vibrant extracurricular activities to develop well-rounded students",
  "State-of-the-art facilities and modern learning environments",
  "Individualized attention with small class sizes",
  "Strong focus on character development and moral values",
  "International curriculum blending Nigerian and British standards",
  "Technology-integrated learning for 21st century skills",
  "Safe and nurturing environment for holistic growth",
  "Proven track record of academic excellence",
  "Strong parent-school partnership and community involvement",
];

export function WhyChooseUsSection() {
  const [currentPair, setCurrentPair] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate how many pairs we have (each pair shows 2 highlights)
  const totalPairs = Math.ceil(highlights.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextPair();
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [currentPair]);

  const handleNextPair = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPair((prev) => (prev + 1) % totalPairs);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevPair = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Get current pair of highlights to display
  const getCurrentPair = () => {
    const startIndex = currentPair * 2;
    return highlights.slice(startIndex, startIndex + 2);
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-1/10 w-52 h-52 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Zee-Alpha, education goes beyond textbooks, we nurture curious
            minds and build future leaders.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex flex-col items-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Excellence in Education
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our unique curriculum blends the Nigerian National Curriculum with
              the British Curriculum, ensuring students gain both local
              grounding and international relevance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculumLevels.map((level, index) => (
              <Card
                key={index}
                className="relative h-96 overflow-hidden group cursor-pointer border-0 bg-transparent rounded-3xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${level.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-500">
                    {level.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-center mb-4 group-hover:text-red-100 transition-colors duration-300">
                    {level.title}
                  </h4>

                  {/* Description that appears on hover */}
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white/90 text-center leading-relaxed text-sm">
                      {level.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="rounded-3xl bg-transparent w-full h-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights Section with Carousel */}
        <div className="text-center">
          <div className="mb-16">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                What Sets Us Apart
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto px-8">
            {/* Carousel Container */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100/80 p-8">
              <div
                className={`transition-all duration-700 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 transform scale-95"
                    : "opacity-100 transform scale-100"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {getCurrentPair().map((highlight, index) => (
                    <div
                      key={`${currentPair}-${index}`}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-4px]"
                    >
                      {/* Background Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-200/50 group-hover:shadow-xl group-hover:shadow-red-300/50 transition-all duration-500 group-hover:scale-110">
                            <CheckCircle className="text-white" size={28} />
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-xl font-semibold text-gray-900 leading-relaxed tracking-tight">
                            {highlight}
                          </span>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                        <div className="rounded-2xl bg-white w-full h-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevPair}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white border border-gray-200/80 text-gray-700 hover:text-red-600 p-3 rounded-2xl shadow-2xl shadow-gray-300/50 hover:shadow-red-200/50 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ChevronLeft
                  size={28}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </button>
              <button
                onClick={handleNextPair}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white border border-gray-200/80 text-gray-700 hover:text-red-600 p-3 rounded-2xl shadow-2xl shadow-gray-300/50 hover:shadow-red-200/50 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ChevronRight
                  size={28}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {Array.from({ length: totalPairs }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentPair(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`relative rounded-full transition-all duration-500 ease-out ${
                    index === currentPair
                      ? "w-12 bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-200/50"
                      : "w-3 bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  } h-3`}
                  disabled={isTransitioning}
                >
                  {/* Active indicator glow effect */}
                  {index === currentPair && (
                    <div className="absolute inset-0 rounded-full bg-red-400/30 animate-ping"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Progress Indicator */}
          </div>
        </div>
      </div>
    </section>
  );
}
