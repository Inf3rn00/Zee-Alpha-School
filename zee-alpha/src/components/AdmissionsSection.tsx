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
    <section id="admissions" className="relative py-24 overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-52 h-52 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
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
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-6 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
                Join Us
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Admissions Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choosing the right school for your child is an important decision. We're committed to making the admission process smooth, transparent, and welcoming for every family.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <Card className="p-8 text-center bg-white border border-gray-100 rounded-2xl hover:border-red-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    {/* Step Number */}
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.step}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Arrow Icon */}
                    {index < admissionSteps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex">
                        <ArrowRight className="text-red-600 text-2xl" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile Arrow Indicators */}
          <div className="lg:hidden flex justify-center gap-4 mb-8">
            <ArrowRight className="text-red-600 rotate-90" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Zee-Alpha?
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards an enriching educational experience. Start your admission journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg">
              Start Application
            </Button>
            <a href="#contact" className="text-white hover:text-red-100 font-semibold flex items-center gap-2 transition-colors">
              Contact Admissions <ArrowRight size={20} />
            </a>
          </div>
          <p className="text-red-100 text-sm mt-8">
            Questions? Email us at <strong className="text-white">admissions@zeealpha.edu.ng</strong>
          </p>
        </div>
      </div>
    </section>
  );
}