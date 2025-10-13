import { Card } from "./ui/card";
import { User, Mail, Shield, Award, Lightbulb, Handshake, Users, Target, Eye} from "lucide-react";


const teamMembers = [
  {
    title: "Proprietress",
    email: "info@zeealpha.edu.ng",
    image: "images/staff giving speech.jpeg"
  },
  {
    title: "Board Director", 
    email: "info@zeealpha.edu.ng"
  },
  {
    title: "Principal",
    email: "principal@zeealpha.edu.ng"
  },
  {
    title: "Vice Principal",
    email: "viceprincipal@zeealpha.edu.ng"
  }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest standards of honesty and ethical behavior in all we do"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest quality in teaching, learning, and character development"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity and new approaches to learning and problem-solving"
  },
  {
    icon: Handshake,
    title: "Respect",
    description: "Valuing diversity and treating everyone with dignity and compassion"
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating effectively to achieve common goals and support each other"
  }
];



export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl">About Us</h2>
      
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Zee-Alpha International Schools is committed to delivering holistic education that balances academic achievement with personal growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="p-8 h-full">
              <h3 className="text-2xl mb-6">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zee-Alpha International Schools is a premier institution, with its initial location being Funtua, Katsina State, 
                committed to delivering holistic education that balances academic achievement with personal growth. Founded with a 
                vision to raise future leaders, we integrate innovation, discipline, and cultural values into every aspect of learning.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Target className="text-red-600 mr-3" size={24} />
                <h4>Our Mission</h4>
              </div>
              <p className="text-muted-foreground">
                To empower students with knowledge, creativity, and character to succeed in a dynamic world.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="text-red-600 mr-3" size={24} />
                <h4>Our Vision</h4>
              </div>
              <p className="text-muted-foreground">
                To be a global center of excellence where learners are inspired to reach their full potential.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-12 text-center">Meet The Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className=" w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {member.image? (
                    <img src={member.image} alt={member.title} className="w-21 h-21 object-cover rounded-full" />
                  ) : (
                    <User className="text-red-600" size={32} />
                  ) }
                </div>
                <h4 className="mb-3">{member.title}</h4>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-12 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="text-red-600" size={24} />
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}