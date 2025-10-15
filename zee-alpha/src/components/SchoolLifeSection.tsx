import { Card, CardContent } from "./ui/card";
import { Users, UserCog, DoorOpen, CheckCircle, Heart, Bus, Calendar, Shield, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const lifeCards = [
  {
    icon: Users,
    title: "Clubs & Societies",
    image: "/images/student-mentor.jpeg",
    items: [
      "Debate, drama, art, and music clubs",
      "Coding and robotics programs", 
      "Dance and cultural activities"
    ]
  },
  {
    icon: Trophy,
    title: "Sports",
    image: "/images/red-house-vs-yellow-house-volleyball.jpeg",
    items: [
      "Football and basketball teams",
      "Athletics and track-racing",
      "Volleyball programs"
    ]
  },
  {
    icon: Heart,
    title: "Character Development",
    image: "/images/student-speech.jpeg",
    items: [
      "Leadership training programs",
      "Community service initiatives",
      "Mentorship opportunities"
    ]
  },
  {
    icon: Calendar,
    title: "Social Activities",
    image: "/images/students-radio.jpeg",
    items: [
      
      "Children's day events", 
      "Inter-house sports competitions",
      "End of year class parties",
      "Academic & non-academic competitions"
    ]
  },
  {
    icon: Shield,
    title: "Well-being",
    image: "/images/primary students with red group picture.jpeg",
    items: [
      "On-site sick bay and first aid",
      "Guidance and counselling services",
      "Safe and supportive environment"
    ]
  },
  {
    icon: Bus,
    title: "Transportation",
    image: "/images/nigerian_students_cream_bowties_distinct_faces.jpg",
    description: "Our adequate and reliable school buses are available at strategic points in each of our locations (Katsina, Kaduna, and Abuja). They function optimally, with licensed and trained drivers.",
  }
];

export function SchoolLifeSection() {
  return (
    <section id="school-life" className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div
          className="absolute bottom-20 left-1/3 w-52 h-52 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
          ></div>
        <div
          className="absolute top-100 right-50 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
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
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              School Life
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Life at Zee-Alpha is rich with opportunities for students and pupils to explore their 
            talents, passions, and dreams in a vibrant, supportive community.
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {lifeCards.map((card, index) => (
            <div key={index} className="group">
              <Card className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <card.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Content */}
                  {card.items ? (
                    <ul className="space-y-3 flex-1">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 group/item">
                          <CheckCircle className="text-red-500 mt-0.5 flex-shrink-0 group-hover/item:text-red-600 transition-colors duration-300" size={18} />
                          <span className="text-gray-600 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-300">
                      {card.description}
                    </p>
                  )}
                </CardContent>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="rounded-3xl bg-white w-full h-full"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* PTA & Open Days Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* PTA Card */}
          <div className="group">
            <Card className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer">
              <CardContent className="p-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-red-200/50">
                    <UserCog className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    PTA
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Join our PTA discussions monthly to get acquainted with the happenings in the environment and bring your concerns to us.
                </p>
              </CardContent>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white w-full h-full"></div>
              </div>
            </Card>
          </div>

          {/* Open Days Card */}
          <div className="group">
            <Card className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer">
              <CardContent className="p-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-red-200/50">
                    <DoorOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                    Open Days
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Our open days hold once a term, where parents come into school during school hours and witness how students behave in class and discuss issues concerning your child.
                </p>
              </CardContent>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-3xl bg-white w-full h-full"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}