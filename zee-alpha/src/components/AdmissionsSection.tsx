import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const admissionSteps = [
  {
    step: "1",
    title: "Pick Up Form",
    description: "Pick up or download the admission form from our office or website"
  },
  {
    step: "2", 
    title: "Submit Form",
    description: "Submit completed form with required documents to the admissions office or online"
  },
  {
    step: "3",
    title: "Assessment & Interview", 
    description: "Schedule entrance assessment and interview with our admissions team"
  },
  {
    step: "4",
    title: "Admission Offer",
    description: "Receive admission offer and begin your journey with us"
  }
];

export function AdmissionsSection() {
  return (
    <section id="admissions" className="relative py-24 overflow-hidden">
      {/* Sophisticated Background with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image - Replace with your actual image path */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/admissions-bg.jpg')`
          }}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A] via-[#1e40af] to-[#1E3A8A]" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full mb-6 border border-white/30">
            <span className="text-sm font-medium text-white">Begin Your Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Admissions
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Choosing the right school for your child is an important decision, and Zee-Alpha is here to guide you every step of the way.
          </p>
        </div>

        {/* Process Steps with Enhanced Glassmorphism */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-16">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="p-8 text-center transition-all duration-500 hover:-translate-y-3 border border-white/20 bg-white/10 backdrop-blur-2xl group relative overflow-hidden">
                {/* Glassmorphic Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl" />
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <CardContent className="p-0 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300 border border-white/20 backdrop-blur-lg">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-4">{step.title}</h4>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section with Glassmorphic Button */}
        <div className="text-center">
          <Button className="bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 font-semibold mb-6 cursor-pointer px-8 py-4 text-lg rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-3xl">
            Start Admission Process
          </Button>
          <p className="text-white/90 text-lg">
            For more inquiries, contact us at <strong className="text-white">admissions@zeealpha.edu.ng</strong>
          </p>
        </div>
      </div>
    </section>
  );
}