import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, Download, Upload, Award, Clock, Users,  GraduationCap, CheckCircle } from "lucide-react";

const admissionSteps = [
  {
    step: "1",
    title: "Pick Up Form",
    description: "Pick up or download the admission form from our office or website",
    icon: Download,
    details: {
      methods: [
        "Online: Download from our website portal",
        "In-person: Visit our admissions office",
        "Email: Request form via admission@zeealphaschools.com"
      ],
      requirements: "Form includes student information, parent/guardian details, and academic history",
      deadline: "Forms available year-round for next academic session"
    }
  },
  {
    step: "2",
    title: "Submit Form",
    description: "Submit completed form with required documents to the admissions office or online",
    icon: Upload,
    details: {
      methods: [
        "Online submission via portal",
        "Email to admission@zeealphaschools.com",
        "Physical submission at school office"
      ],
      documents: [
        "Birth certificate or age declaration",
        "Previous school reports (last 2 years)",
        "4 recent passport photographs",
        "Medical fitness certificate",
        "Transfer certificate (where applicable)"
      ],
      processing: "Application reviewed within 3-5 working days"
    }
  },
  {
    step: "3",
    title: "Assessment & Interview",
    description: "Schedule entrance assessment and interview with our admissions team",
    icon: Users,
    details: {
      assessment: [
        "Age-appropriate academic evaluation",
        "Cognitive ability testing",
        "Reading and numeracy skills assessment"
      ],
      interview: [
        "Student interview with academic staff",
        "Parent/guardian meeting with admissions team",
        "Discussion of educational goals and expectations"
      ],
      schedule: "Assessments scheduled within 1 week of application submission"
    }
  },
  {
    step: "4",
    title: "Admission Offer",
    description: "Receive admission offer and begin your journey with us",
    icon: Award,
    details: {
      notification: [
        "Official admission letter via email",
        "Follow-up phone call from admissions team",
        "Welcome package with school information"
      ],
      acceptance: [
        "Submit acceptance within 2 weeks",
        "Pay required fees to secure placement",
        "Complete student registration forms"
      ],
      orientation: "New student and parent orientation before school resumption"
    }
  },
];





export default function Admissions() {
  return (
    <div className="min-h-screen bg-white">
        
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Admissions
          </h1>
          <div className="w-32 h-1 bg-white rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Begin Your Educational Journey at Zee-Alpha International Schools - 
            Where Excellence Meets Opportunity
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Zee-Alpha</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  At Zee-Alpha International Schools, we believe every child deserves access to 
                  quality education that nurtures their unique talents and prepares them for 
                  global citizenship. Our admissions process is designed to be transparent, 
                  supportive, and focused on finding students who will thrive in our dynamic 
                  learning environment.
                </p>
                
                <p>
                  We welcome applications from students of all backgrounds who demonstrate 
                  academic potential, good character, and a willingness to contribute positively 
                  to our school community. Our rolling admissions policy ensures we can accommodate 
                  qualified students throughout the academic year.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Small Class Sizes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Individualized Attention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">International Curriculum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Holistic Development</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 4-step process ensures a smooth transition into the Zee-Alpha family
            </p>
          </div>

          <div className="space-y-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <Card className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-200 text-center">
                    <div className="w-20 h-20 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <step.icon className="text-red-600 mx-auto mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-white rounded-3xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      {Object.entries(step.details).map(([key, value], detailIndex) => (
                        <div key={detailIndex}>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          {Array.isArray(value) ? (
                            <ul className="space-y-2">
                              {value.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Zee-Alpha Journey Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of learners, innovators, and future leaders. 
            Take the first step toward an exceptional educational experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button className="bg-white hover:bg-gray-100 text-red-600 rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
             <Link to="/AdmissionForm">Start Online Application</Link> 
              <ArrowRight size={20} className="ml-3" />
            </Button>
          
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="text-white" size={24} />
              </div>
              <p className="text-white font-semibold">Office Hours</p>
              <p className="text-red-100 text-sm">Mon-Fri: 8AM-4PM</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="text-white" size={24} />
              </div>
              <p className="text-white font-semibold">Admissions Team</p>
              <p className="text-red-100 text-sm">Always Available to Help</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="text-white" size={24} />
              </div>
              <p className="text-white font-semibold">Campus Tours</p>
            <p className="text-red-100 text-sm">
  Schedule Your Visit:{" "}
  <a 
    href="mailto:info@zeealphaschools.com?subject=Schedule Campus Tour&body=Hello, I would like to schedule a campus tour."
    target="_blank" 
    className="text-blue-300 underline hover:text-blue-200 transition-colors duration-200"
  >
    admission@zeealphaschools.com
  </a>
</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}