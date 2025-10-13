import { Button } from "./ui/button";

export function NewsEventsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">News & Events</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Stay connected with all the exciting happenings at Zee-Alpha
            International Schools! From cultural days and academic competitions
            to sports events and graduation ceremonies, we celebrate milestones
            that shape our students' learning journey.
          </p>
        </div>

        <div className="text-center">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
