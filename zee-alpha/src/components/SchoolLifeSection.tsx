import { Card, CardContent } from "./ui/card";
import { Users, UserCog, DoorOpen, CheckCircle, Heart, Bus, Calendar, Shield, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const lifeCards = [
  {
    icon: Users,
    title: "Clubs & Societies",
    image: "/images/clubs-societies.jpeg",
    items: [
      "Debate, drama, art, and music clubs",
      "Coding and robotics programs", 
      "Dance and cultural activities"
    ]
  },
  {
    icon: Trophy,
    title: "Sports",
    image: "/images/sports.jpeg",
    items: [
      "Football and basketball teams",
      "Athletics and track-racing",
      "Swimming and tennis programs"
    ]
  },
  {
    icon: Heart,
    title: "Character Development",
    image: "/images/character-development.jpeg",
    items: [
      "Leadership training programs",
      "Community service initiatives",
      "Mentorship opportunities"
    ]
  },
  {
    icon: Calendar,
    title: "Social Activities",
    image: "/images/social-activities.jpeg",
    items: [
      "Cultural day celebrations",
      "Children's day events", 
      "Inter-house sports competitions",
      "End of year class parties",
      "Academic & non-academic competitions"
    ]
  },
  {
    icon: Shield,
    title: "Well-being",
    image: "/images/wellbeing.jpeg",
    items: [
      "On-site sick bay and first aid",
      "Guidance and counselling services",
      "Safe and supportive environment"
    ]
  },
  {
    icon: Bus,
    title: "Transportation",
    image: "/images/transportation.jpeg",
    description: "Our adequate and reliable school buses are available at strategic points in each of our locations (Katsina, Kaduna, and Abuja). They function optimally, with licensed and trained drivers.",
  }
];

export function SchoolLifeSection() {
  return (
    <section id="school-life" className="relative py-24 overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-52 h-52 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-6 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
                Explore
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">School Life</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Life at Zee-Alpha is rich with opportunities for students and pupils to explore their talents, passions, and dreams in a vibrant, supportive community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lifeCards.map((card, index) => (
            <div key={index} className="group">
              <Card className="p-0 bg-white hover:shadow-lg transition-shadow rounded-2xl border border-gray-100 h-full hover:border-red-200 overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                    <div className="p-2 bg-red-50 rounded-lg mr-3 flex-shrink-0">
                      <card.icon className="text-red-600" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                  </div>
                  
                  {card.items ? (
                    <ul className="space-y-2 flex-1">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 group/item">
                          <CheckCircle className="text-red-600 mt-0.5 flex-shrink-0 group-hover/item:text-red-700 transition-colors" size={16} />
                          <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">{card.description}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white hover:shadow-lg transition-shadow rounded-2xl border border-gray-100 group hover:border-red-200">
            <CardContent className="p-0">
              <div className="flex items-start mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                <div className="p-3 bg-red-50 rounded-lg mr-4 flex-shrink-0">
                  <UserCog className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">PTA</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Join our PTA discussions monthly to get acquainted with the happenings in the environment and bring your concerns to us.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white hover:shadow-lg transition-shadow rounded-2xl border border-gray-100 group hover:border-red-200">
            <CardContent className="p-0">
              <div className="flex items-start mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                <div className="p-3 bg-red-50 rounded-lg mr-4 flex-shrink-0">
                  <DoorOpen className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Open Days</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our open days hold once a term, where parents come into school during school hours and witness how students behave in class and discuss issues concerning your child.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}