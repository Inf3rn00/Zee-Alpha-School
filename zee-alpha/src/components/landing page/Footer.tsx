import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Admissions", href: "#admissions" },
  { label: "School Life", href: "#school-life" },
  { label: "Gallery", href: "#gallery" },
];

export function Footer() {

  const [email, setEmail] = useState("");
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white/90">Our Location</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">
                      Funtua, Katsina State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white/90">Phone Number</p>
                    <p className="text-white/70 text-sm mt-1">08032369810</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white/90">Email Address</p>
                    <p className="text-white/70 text-sm mt-1">
                    college@zeealphaschools.com
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      admissions@zeealphaschools.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-3 py-3 px-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 hover:translate-x-2 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-all duration-300"></div>
                  <span className="text-white/80 group-hover:text-white font-medium transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">
              Stay Updated
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-white/80 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates on
                admissions, events, and educational insights from Zee-Alpha
                International Schools.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault()
                setEmail("")
              }} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    name= "email"
                    placeholder = "Enter your email"
                    value= {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-2xl px-6 py-4 h-14 focus:bg-white/15 focus:border-white/30 transition-all duration-300 border-2"
                  />
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                    size={20}
                  />
                </div>
                <Button
               
                  type="submit"
                  className="w-full bg-white text-red-600 hover:bg-gray-100 hover:scale-105 cursor-pointer rounded-2xl py-4 h-14 font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-900/30 border-0"
                >
                  
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              <p>
                &copy; 2025 Zee-Alpha International Schools. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
