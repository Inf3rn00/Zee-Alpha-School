import { Card } from "./ui/card";

const partners = [
  "WAEC",
  "NECO", 
  "JAMB",
  "AL GHURAIR UNIVERSITY"
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading educational organizations to provide the best opportunities for our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-xl text-red-600">{partner}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}