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
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Admissions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Choosing the right school for your child/ward is an important decision, and Zee-Alpha is here to guide you every step of the way.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl text-red-600 text-center mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                    {step.step}
                  </div>
                  <h4 className="mb-4">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-red-600 hover:bg-red-700 mb-6 text-white cursor-pointer" size="lg">
            Join Us
          </Button>
          <p className="text-lg">
            For more inquiries, please contact the admissions office at <strong>admissions@zeealpha.edu.ng</strong>
          </p>
        </div>
      </div>
    </section>
  );
}