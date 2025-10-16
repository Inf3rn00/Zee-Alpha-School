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
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Header } from "../components/landing page/Header";

const teamMembers = [
  {
    title: "Proprietress",
    name: "Dr. Amina Bello",
    email: "info@zeealphaschools.com",
    image: "/images/staff giving speech.jpeg",
  },
  {
    title: "Board Director",
    name: "Alhaji Yusuf Ibrahim",
    image: "/images/board-director.jpeg",
  },
  {
    title: "Principal",
    name: "Mrs. Chinedu Okoro",
    image: "/images/principal.jpeg",
  },
  {
    title: "Vice Principal",
    name: "Mr. Adewale Johnson",
    image: "/images/vice-principal.jpeg",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest standards of honesty and ethical behavior in all we do",
    details: "We believe in transparent communication, accountability, and moral uprightness. Our students learn through example that character is as important as academic achievement."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest quality in teaching, learning, and character development",
    details: "We set high expectations and provide the support needed to achieve them. From classroom instruction to extracurricular activities, we pursue excellence in every endeavor."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity and new approaches to learning and problem-solving",
    details: "Our curriculum incorporates cutting-edge educational technology and teaching methodologies. We encourage creative thinking and problem-solving skills essential for 21st-century success."
  },
  {
    icon: Handshake,
    title: "Respect",
    description: "Valuing diversity and treating everyone with dignity and compassion",
    details: "We celebrate cultural diversity and foster an inclusive environment where every student feels valued and respected. Our community embraces different backgrounds and perspectives."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating effectively to achieve common goals and support each other",
    details: "Through group projects, team sports, and community activities, students learn the importance of collaboration, communication, and mutual support in achieving shared objectives."
  },
];

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Updated to red gradient */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About Zee-Alpha
          </h1>
          <div className="w-32 h-1 bg-white rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Pioneering Excellence in Education. Nurturing Future Leaders Through Innovation, Integrity, and International Standards
          </p>
        </div>
      </section>

      {/* School Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Zee-Alpha International Schools emerged from a vision to create an educational 
                  institution that would bridge the gap between local cultural values and global academic standards. 
                  What started as a small nursery school in Funtua, Katsina State, has grown into a comprehensive 
                  educational institution serving students from creche through secondary school.
                </p>
                
                <p>
                  Our journey has been guided by the belief that every child deserves access to quality education 
                  that not only prepares them for academic success but also equips them with the character and 
                  skills needed to navigate an increasingly complex world.
                </p>

                <p>
                  Today, we stand as a testament to what can be achieved when passion for education meets 
                  commitment to excellence. Our alumni network includes professionals making impacts in various 
                  fields across Nigeria and internationally.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <img
                  src="/images/school-campus.jpg"
                  alt="Zee-Alpha School Campus"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Campus</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-600" size={20} />
                    <span>Funtua, Katsina State, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-red-600" size={20} />
                    <span>Accredited by: WAEC, NECO, JAMB</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Expanded */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Expanded */}
            <Card className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To empower students with knowledge, creativity, and character to succeed in a dynamic world through:
              </p>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Providing a balanced curriculum that integrates Nigerian and British educational standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Fostering critical thinking, creativity, and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Developing moral character and ethical leadership qualities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Creating inclusive learning environments that celebrate diversity</span>
                </li>
              </ul>
            </Card>

            {/* Vision Expanded */}
            <Card className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To be a global center of excellence where learners are inspired to reach their full potential, characterized by:
              </p>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Academic excellence that meets international standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Innovative teaching methodologies and cutting-edge facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Graduates who become change-makers in their communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>A reputation for producing well-rounded, globally competitive individuals</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section Expanded */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The guiding principles that shape our community and educational approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:border-red-200">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-red-600" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{value.title}</h3>
                <p className="text-gray-700 text-center mb-4 font-medium">{value.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{value.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence in education and student development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:border-red-200">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="text-gray-400" size={48} />
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-red-600 font-semibold mb-3">{member.title}</div>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    {member.email && (
                      <>
                        <Mail size={16} />
                        {member.email}
                      </>
                    )}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Educational Family
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover why Zee-Alpha International Schools is the perfect place for your child's educational journey. 
            Experience our commitment to excellence firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="bg-white hover:bg-gray-100 text-red-600 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300">
              Contact Admissions
            </button>
          </div>

          <div className="border-t border-red-500/30 pt-8 mt-12">
            <p className="text-red-100 text-sm">
              &copy; {getCurrentYear()} Zee-Alpha International Schools. All Rights Reserved.
            </p>
            <p className="text-red-200/80 text-sm mt-2">
              Funtua, Katsina State, Nigeria | Phone: 09012345678 | Email: info@zeealpha.edu.ng
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}