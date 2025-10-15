import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  "Dedicated and highly qualified teachers",
  "Vibrant extracurricular activities to develop well-rounded students",
];

export function OverviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background with Family-Friendly Pattern */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-6 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  <span className="text-red-600 font-semibold uppercase tracking-widest text-lg">
                    Welcome
                  </span>
                </div>
              </div>
              <h2 className="text-2xl  font-bold leading-tight">
                <span className="">Zee-Alpha</span>
                <span className="block text-gray-800">
                  {" "}
                  International Schools
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Zee-Alpha, we nurture young minds to become confident,
              responsible, and globally minded leaders of tomorrow. With a rich
              blend of academic excellence, creativity, and character
              development, we provide a safe and inspiring environment where
              every child can thrive.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle
                      className="text-red-600 group-hover:text-red-700 transition-colors"
                      size={24}
                    />
                  </div>
                  <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 cursor-pointer"
              >
                Apply Now
              </Button>

              <Button
                size="lg"
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 cursor-pointer"
              >
                <a href="#contact" className="no-underline">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            {/* Decorative frame with glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image container with overlay gradient */}
              <div className="relative">
                <ImageWithFallback
                  src="/images/students in ict 7.jpeg"
                  alt="School Campus"
                  className="w-full h-[500px] object-cover"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/0 transition-all duration-300"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white rounded-lg opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-lg opacity-60"></div>
            </div>

            {/* Floating card info */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 w-50 border border-gray-100 backdrop-blur-sm bg-opacity-95">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-semibold text-sm">
                  Academic Distinction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
