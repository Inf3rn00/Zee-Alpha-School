import { Card } from "./ui/card";

const partners = [
  {
    name: "WAEC",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Waec_logo.png",
  },
  {
    name: "JAMB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8DRrNP8vKU67Y-PojNiNi0Ec12oU9K-dIQ&s",
  },
  {
    name: "NECO",
    image: "https://neco.gov.ng/assets/neco-logo.df6f9256.png",
  },
  {
    name: "AL GHURAIR UNIVERSITY",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZWejRWEVMpcNXzUrMiax-1c76-TpsgaycQ&s",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading educational organizations to provide the
            best opportunities for our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl">{partner.name}</div>
              <img
                src={partner.image}
                alt={`${partner.name}'s logo`}
                className="w-20 mx-auto"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
