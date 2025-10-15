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
     

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              About Our School
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Zee-Alpha International Schools is committed to delivering holistic
            education that balances academic achievement with personal growth
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Who We Are Card */}
          <div className="lg:col-span-2 group">
            <Card className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20  hover:translate-y-[-8px] cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-6  transition-colors duration-300">
                Who We Are
              </h3>
              <p className="text-white/80 text-lg leading-relaxed /80 transition-colors duration-300">
                Zee-Alpha International Schools is a premier institution, with
                its initial location being Funtua, Katsina State, committed to
                delivering holistic education that balances academic achievement
                with personal growth. Founded with a vision to raise future
                leaders, we integrate innovation, discipline, and cultural
                values into every aspect of learning.
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-[#1E3A8A] w-full h-full"></div>
              </div>
            </Card>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="group">
              <Card className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20  hover:translate-y-[-4px] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ">
                    <Target className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white pt-2  transition-colors duration-300">
                    Our Mission
                  </h4>
                </div>
                <p className="text-white/80 /80 transition-colors duration-300">
                  To empower students with knowledge, creativity, and character to
                  succeed in a dynamic world.
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="rounded-3xl bg-[#1E3A8A] w-full h-full"></div>
                </div>
              </Card>
            </div>

            {/* Vision Card */}
            <div className="group">
              <Card className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20  hover:translate-y-[-4px] cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white pt-2  transition-colors duration-300">
                    Our Vision
                  </h4>
                </div>
                <p className="text-white/80 /80 transition-colors duration-300">
                  To be a global center of excellence where learners are inspired
                  to reach their full potential.
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="rounded-3xl bg-[#1E3A8A] w-full h-full"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Our Core Values
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
            </div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <Card className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20  hover:translate-y-[-8px] cursor-pointer">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 ">
                    <value.icon className="text-white" size={28} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4  transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed /80 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className="rounded-3xl bg-[#1E3A8A] w-full h-full"></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}