import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  "Dedicated and highly qualified teachers",
  "Vibrant extracurricular activities to develop well-rounded students"
];

export function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Welcome to Zee-Alpha International Schools</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Zee-alpha, we nurture young minds to become confident, responsible, and globally minded leaders of tomorrow. 
              With a rich blend of academic excellence, creativity, and character development, we provide a safe and inspiring 
              environment where every child can thrive.
            </p>
            
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-red-100 rounded-lg p-8 text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXN8ZW58MXx8fHwxNzU5MzI5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Campus"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">School Campus</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}