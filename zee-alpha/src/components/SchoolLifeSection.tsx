import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Users, UserCog, DoorOpen, CheckCircle, Heart, Bus, Calendar, Shield,Volleyball } from "lucide-react";

const lifeCards = [
  {
    icon: Users,
    title: "Clubs & Societies",
    items: [
      "Debate, drama, art, and music clubs",
      "Coding and robotics programs", 
      "Dance and cultural activities"
    ]
  },
  {
    icon:Volleyball,
    title: "Sports",
    items: [
      "Football and basketball teams",
      "Athletics and track-racing",
      "Swimming and tennis programs"
    ]
  },
  {
    icon: Heart,
    title: "Character Development", 
    items: [
      "Leadership training programs",
      "Community service initiatives",
      "Mentorship opportunities"
    ]
  },
  {
    icon: Calendar,
    title: "Social Activities",
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
    items: [
      "On-site sick bay and first aid",
      "Guidance and counselling services",
      "Safe and supportive environment"
    ]
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Our adequate and reliable school buses are available at strategic points in each of our locations (Katsina, Kaduna, and Abuja). They function optimally, with licensed and trained drivers.",
    
  }
];

export function SchoolLifeSection() {
  return (
    <section id="school-life" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">School Life</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Life at Zee-Alpha is rich with opportunities for students/pupils to explore their talents and passions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lifeCards.map((card, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <card.icon className="text-red-600 mr-3" size={24} />
                  <h3 className="text-xl">{card.title}</h3>
                </div>
                
                {card.items ? (
                  <ul className="space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p className="text-muted-foreground mb-6">{card.description}</p>
                   
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <UserCog className="text-red-600 mr-3" size={24} />
                <h3 className="text-xl">PTA</h3>
              </div>
              <p className="text-muted-foreground">
                Join our PTA discussions monthly to get acquainted with the happenings in the environment and bring your concerns to us.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <DoorOpen className="text-red-600 mr-3" size={24} />
                <h3 className="text-xl">Open Days</h3>
              </div>
              <p className="text-muted-foreground">
                Our open days hold once a term, where parents come into school during school hours and witness how the students/pupil behave in class, how the teachers conduct classes, and discuss issues concerning your child/ward.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}