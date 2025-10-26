import { Card } from "../ui/card";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { useDashboard } from "../../pages/dashboard/DashboardContext";

export const NewsEventsSection: React.FC = () => {
  const { newsEvents } = useDashboard();

  // Optional: Fallback data if newsEvents is empty
  const displayEvents = newsEvents.length > 0 ? newsEvents : [
    {
      id: 1,
      title: "Annual Cultural Day Festival",
      date: "March 15, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "School Main Field",
      description: "Celebrating diversity with cultural performances, traditional foods, and international exhibitions from our students.",
      category: "Cultural",
      image: "./images/nigerian-group-picture.jpeg",
    },
    {
      id: 2,
      title: "Science & Innovation Fair",
      date: "April 22, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Science Laboratory Complex",
      description: "Showcasing student projects in robotics, renewable energy, and scientific research breakthroughs.",
      category: "Academic",
      image: "./images/basic-tech-1.jpeg",
    },
    {
      id: 3,
      title: "Sports Championship Finals",
      date: "May 8, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Complex",
      description: "Annual inter-house sports competition featuring track events, football finals, and athletic achievements.",
      category: "Sports",
      image: "./images/student-in-sport.jpeg",
    },
  ];

  return (
    <section
      id="news"
      className="relative py-24 bg-gradient-to-b from-[#1E3A8A] via-[#1e40af] to-[#1E3A8A] overflow-hidden"
    >
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
        <div className="text-center">
          <p className="text-4xl font-bold text-white my-10">Recent Events</p>
        </div>
        
        {/* Check if there are events to display */}
        {displayEvents.length === 0 ? (
          <div className="text-center text-white/70 py-12">
            <p className="text-lg">No events scheduled at the moment.</p>
            <p className="text-sm mt-2">Check back later for upcoming events!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {displayEvents.map((event, index) => (
              <div key={event.id || index} className="group">
                <Card className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 border border-white/10 hover:border-white/20 hover:translate-y-[-8px] cursor-pointer h-full flex flex-col">
                  
                  {/* Event Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                   

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                        {event.category}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-red-100 transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <Calendar
                          size={18}
                          className="text-red-300 group-hover:text-red-200 flex-shrink-0 transition-colors duration-300"
                        />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <Clock
                          size={18}
                          className="text-red-300 group-hover:text-red-200 flex-shrink-0 transition-colors duration-300"
                        />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <MapPin
                          size={18}
                          className="text-red-300 group-hover:text-red-200 flex-shrink-0 transition-colors duration-300"
                        />
                        <span className="text-sm font-medium line-clamp-1">
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors duration-300 line-clamp-3">
                      {event.description}
                    </p>

                  
                  </div>

                 
                  
                 
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};