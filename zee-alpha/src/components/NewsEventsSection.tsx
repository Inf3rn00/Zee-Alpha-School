import { Card } from "./ui/card";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Annual Cultural Day Festival",
    date: "March 15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "School Main Field",
    description: "Celebrating diversity with cultural performances, traditional foods, and international exhibitions from our students.",
    category: "Cultural"
  },
  {
    title: "Science & Innovation Fair",
    date: "April 22, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Science Laboratory Complex",
    description: "Showcasing student projects in robotics, renewable energy, and scientific research breakthroughs.",
    category: "Academic"
  },
  {
    title: "Sports Championship Finals",
    date: "May 8, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "School Sports Complex",
    description: "Annual inter-house sports competition featuring track events, football finals, and athletic achievements.",
    category: "Sports"
  }
];

export function NewsEventsSection() {
  return (
    <section id="news" className="relative py-24 bg-gradient-to-b from-[#1E3A8A] via-[#1e40af] to-[#1E3A8A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              News & Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stay connected with all the exciting happenings at Zee-Alpha
            International Schools! From cultural days and academic competitions
            to sports events and graduation ceremonies, we celebrate milestones
            that shape our students' learning journey.

          </p>

      
        </div>

        {/* Events Cards Grid */}
        <div className="text-center">    <p className="text-4xl font-bold text-white my-10 ">Recent Events</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          {events.map((event, index) => (
            <div key={index} className="group">
              <Card className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/20  hover:translate-y-[-8px] cursor-pointer h-full">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-2xl text-sm font-semibold mb-6 group-hover:bg-red-500/20  transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-red-300 transition-colors duration-300"></div>
                  {event.category}
                </div>

                {/* Event Title */}
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight  transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white/80  transition-colors duration-300">
                    <Calendar size={20} className="text-white group-hover:text-red-300 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80  transition-colors duration-300">
                    <Clock size={20} className="text-white group-hover:text-red-300 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80  transition-colors duration-300">
                    <MapPin size={20} className="text-white group-hover:text-red-300 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-8 /80 transition-colors duration-300">
                  {event.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <button className="bg-white/20 hover:bg-red-600 text-white cursor-pointer rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10 hover:shadow-red-500/30 border border-white/30 hover:border-red-500 group/btn flex items-center gap-2">
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                  <div className="text-xs text-white/60 group-hover:text-red-200 font-medium transition-colors duration-300">
                    Free Event
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="rounded-3xl bg-[#1E3A8A] w-full h-full"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}