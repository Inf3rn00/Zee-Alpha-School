import { Card } from "./ui/card";
import { CheckCircle, Star, BookOpen, Award } from "lucide-react";

const curriculumLevels = [
  {
    title: "Early Years (Creche & Nursery)",
    description:
      "Play-based learning that sparks curiosity and builds foundational skills through engaging activities.",
    icon: <Star className="w-6 h-6" />,
    image: "/images/grad-nursery.jpeg", // Add your image paths
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
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative py-24 overflow-hidden">
      {/* Red Background with Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            At Zee-Alpha, education goes beyond textbooks, we nurture curious
            minds and build future leaders.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold  mb-4">
              Excellence in Education
            </h3>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              Our unique curriculum blends the Nigerian National Curriculum with
              the British Curriculum, ensuring students gain both local
              grounding and international relevance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculumLevels.map((level, index) => (
              <Card
                key={index}
                className="relative h-80 overflow-hidden group cursor-pointer border-0 bg-transparent"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${level.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  {/* Always Visible Title */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto  transition-colors duration-300">
                      {level.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-center">
                      {level.title}
                    </h4>
                  </div>

                  {/* Description that appears on hover */}
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white text-center leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold  mb-12">What Sets Us Apart</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-shadow duration-300 border-0 group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <CheckCircle className="text-red-600" size={20} />
                </div>
                <span className="text-lg font-medium text-gray-800 text-left flex-1">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
