import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

const curriculumLevels = [
  {
    title: "Early Years (Creche & Nursery)",
    description: "Play-based learning that sparks curiosity and builds foundational skills through engaging activities."
  },
  {
    title: "Primary School", 
    description: "Strong foundation in literacy, numeracy, science and creativity to prepare students for advanced learning."
  },
  {
    title: "Secondary School",
    description: "Advanced learning in sciences, arts, and technology with opportunities for international examinations."
  }
];

const highlights = [
  "Dedicated and highly qualified teachers",
  "Vibrant extracurricular activities to develop well-rounded students"
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Zee-Alpha, education goes beyond textbooks
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl text-red-600 mb-4 text-center">Academics/Curriculum</h3>
          <p className="text-center max-w-4xl mx-auto mb-12 text-lg">
            Our curriculum combines the Nigerian National Curriculum and the British Curriculum to ensure students 
            gain both local grounding and international relevance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {curriculumLevels.map((level, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <h4 className="text-xl mb-4 text-red-600">{level.title}</h4>
                <p className="text-muted-foreground">{level.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl mb-8">What Sets Us Apart</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <span className="text-lg">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}