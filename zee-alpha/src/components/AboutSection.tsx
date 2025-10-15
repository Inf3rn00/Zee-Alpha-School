import { Card } from "./ui/card";
import {
  User,
  Mail,
  Shield,
  Award,
  Lightbulb,
  Handshake,
  Users,
  Target,
  Eye,
} from "lucide-react";

const teamMembers = [
  {
    title: "Proprietress",
    email: "info@zeealpha.edu.ng",
    image: "images/staff giving speech.jpeg",
  },
  {
    title: "Board Director",
    email: "info@zeealpha.edu.ng",
  },
  {
    title: "Principal",
    email: "principal@zeealpha.edu.ng",
  },
  {
    title: "Vice Principal",
    email: "viceprincipal@zeealpha.edu.ng",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty and ethical behavior in all we do",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Striving for the highest quality in teaching, learning, and character development",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing creativity and new approaches to learning and problem-solving",
  },
  {
    icon: Handshake,
    title: "Respect",
    description:
      "Valuing diversity and treating everyone with dignity and compassion",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating effectively to achieve common goals and support each other",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-[#1E3A8A] via-[#1e40af] to-[#1E3A8A] text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-red-600 rounded-full"></div>
              <span className="text-white font-semibold uppercase tracking-widest text-4xl">
                About Our School
              </span>
              <div className="h-1 w-8 bg-red-600 rounded-full"></div>
            </div>
          </div>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
            Zee-Alpha International Schools is committed to delivering holistic
            education that balances academic achievement with personal growth
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 group">
            <Card className="p-8 h-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-red-600/50 transition-all duration-300 shadow-2xl hover:shadow-red-500/20">
              <div className="flex items-start gap-4 mb-6">
                <h3 className="text-3xl font-bold">Who We Are</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                Zee-Alpha International Schools is a premier institution, with
                its initial location being Funtua, Katsina State, committed to
                delivering holistic education that balances academic achievement
                with personal growth. Founded with a vision to raise future
                leaders, we integrate innovation, discipline, and cultural
                values into every aspect of learning.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-red-600/20 to-red-500/10 backdrop-blur-md border border-red-600/30 hover:border-red-600 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-red-600/30">
                  <Target className="text-red-400" size={24} />
                </div>
                <h4 className="text-lg font-bold pt-2">Our Mission</h4>
              </div>
              <p className="text-blue-50">
                To empower students with knowledge, creativity, and character to
                succeed in a dynamic world.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-500/10 backdrop-blur-md border border-blue-600/30 hover:border-blue-400 transition-all duration-300 shadow-xl  hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-600/30">
                  <Eye className="text-blue-400" size={24} />
                </div>
                <h4 className="text-lg font-bold pt-2">Our Vision</h4>
              </div>
              <p className="text-blue-50">
                To be a global center of excellence where learners are inspired
                to reach their full potential.
              </p>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core Values
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="relative mb-6 flex justify-center">
                  <div className="relative  w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/20">
                    <value.icon className="text-white" size={24} />
                  </div>
                </div>
                <h4 className="mb-3 font-bold text-lg">{value.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            {/* move to another new page*/}
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Meet The Team
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence in education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20  transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 group cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 rounded-full mx-auto flex items-center justify-center  border-2 border-white/20">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <User className="text-white" size={32} />
                    )}
                  </div>
                </div>
                <h4 className="mb-3 text-lg font-bold">{member.title}</h4>
                <div className="flex items-center justify-center text-blue-200 gap-2 text-sm hover:text-red-400 transition-colors">
                  <Mail size={16} />
                  <span>{member.email}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
