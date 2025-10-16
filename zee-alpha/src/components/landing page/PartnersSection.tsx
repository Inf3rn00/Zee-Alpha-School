import { Card } from "../ui/card";

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
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute bottom-70 left-10 w-52 h-52 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48   bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute  top-40 left-1/3  w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
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
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading educational organizations and
            examination bodies to provide the best opportunities and
            internationally recognized qualifications for our students
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-200/60 hover:border-red-200/80 hover:translate-y-[-8px] cursor-pointer overflow-hidden"
            >
              {/* Background Gradient Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative flex flex-col items-center gap-6">
                {/* Logo Container */}
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-red-200/50 transition-all duration-500 group-hover:scale-105 border border-gray-100">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>

                {/* Partner Name */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-red-700 transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="rounded-2xl bg-white w-full h-full"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg shadow-gray-200/50 border border-gray-200/60">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Trusted by{" "}
              <span className="text-red-600 font-semibold">
                leading educational bodies
              </span>{" "}
              worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
