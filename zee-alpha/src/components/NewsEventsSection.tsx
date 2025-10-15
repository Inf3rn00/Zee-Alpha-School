import { Button } from "./ui/button";
import {ArrowRight } from "lucide-react";


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

  

        {/* Newsletter CTA */}
        <div className="text-center">
          <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md border border-white/20 hover:border-red-600/50 transition-all duration-300 shadow-2xl hover:shadow-red-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
              Never Miss an Event
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed group-hover:text-red-100/80 transition-colors duration-300">
              Subscribe to our newsletter and be the first to know about upcoming events, 
              important announcements, and school activities.
            </p>
            <Button className="bg-white/20 hover:bg-red-600 text-white cursor-pointer rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10 hover:shadow-red-500/30 border border-white/30 hover:border-red-500 group/btn">
              Subscribe to Newsletter
              <ArrowRight size={20} className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}