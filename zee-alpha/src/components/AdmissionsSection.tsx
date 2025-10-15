import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";

const admissionSteps = [
  {
    step: "1",
    title: "Pick Up Form",
    description:
      "Pick up or download the admission form from our office or website",
  },
  {
    step: "2",
    title: "Submit Form",
    description:
      "Submit completed form with required documents to the admissions office or online",
  },
  {
    step: "3",
    title: "Assessment & Interview",
    description:
      "Schedule entrance assessment and interview with our admissions team",
  },
  {
    step: "4",
    title: "Admission Offer",
    description: "Receive admission offer and begin your journey with us",
  },
];

export function AdmissionsSection() {
  return (
    <section id="admissions" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      

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
              Admissions Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choosing the right school for your child is an important decision. We're committed to making 
            the admission process smooth, transparent, and welcoming for every family.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <Card className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer h-full">
                  <CardContent className="p-0 text-center">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-all duration-500 shadow-lg shadow-red-200/50">
                      {step.step}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className="rounded-3xl bg-white w-full h-full"></div>
                  </div>
                </Card>

                {/* Desktop Arrow Connector */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-200/60 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Arrow Indicators */}
          <div className="lg:hidden flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-red-600">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Swipe to see more</span>
              <ArrowRight className="text-red-600" size={16} />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center shadow-2xl shadow-red-200/50 border border-red-500/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Join Zee-Alpha?
          </h3>
          <p className="text-red-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards an enriching educational experience. Start your admission journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button className="bg-white hover:bg-gray-100 text-red-600 cursor-pointer rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-red-900/30 border-0 group">
              Start Application
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
          </div>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          
            <p className="text-red-100 text-sm">
              Questions? Email us at <strong className="text-white font-semibold">admissions@zeealpha.edu.ng</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}