import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Admissions", href: "#admissions" },
  { label: "School Life", href: "#school-life" },
  { label: "Gallery", href: "#gallery" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-red-500 text-primary-foreground text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6">Contact Us</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Funtua, Katsina State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>Phone: 09012345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>info@zeealpha.edu.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>admissions@zeealpha.edu.ng</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              For inquiries, please reach out to us via email or phone. We look
              forward to hearing from you!
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 mb-4"
              />
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 cursor-pointer"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="text-center text-sm text-primary-foreground/80">
          <p>
            &copy; 2025 Zee-Alpha International Schools. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
