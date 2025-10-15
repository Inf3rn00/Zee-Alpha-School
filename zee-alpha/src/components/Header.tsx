import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const handleSectionClick = (section: string) => {
    if (currentPage !== "home") {
      handleNavigation("home");
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", action: () => handleNavigation("home"), type: "button" },
    {
      label: "About Us",
      type: "dropdown",
      items: [
        { label: "Overview", action: () => handleSectionClick("about") },
        {
          label: "Why Choose Us",
          action: () => handleSectionClick("why-choose-us"),
        },
      ],
    },
    {
      label: "Admissions",
      action: () => handleSectionClick("admissions"),
      type: "button",
    },
    {
      label: "School Life",
      type: "dropdown",
      items: [
        { label: "Overview", action: () => handleSectionClick("school-life") },
        {
          label: "Gallery Dashboard",
          action: () => handleNavigation("gallery-dashboard"),
        },
      ],
    },
    {
      label: "Contact",
      action: () => handleSectionClick("contact"),
      type: "button",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigation("home")}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/school logo.jpeg"
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-red-700">ZEE-ALPHA</h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  Nurturing Future Leaders
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item, index) =>
              item.type === "button" ? (
                <button
                  key={index}
                  onClick={item.action}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors flex items-center gap-1.5 outline-none group">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className="group-data-[state=open]:rotate-180 transition-transform"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-lg mt-2 py-2 min-w-[180px]">
                    {item.items?.map((subItem, subIndex) => (
                      <DropdownMenuItem
                        key={subIndex}
                        onClick={subItem.action}
                        className="px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-md mx-1 font-medium"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/50 backdrop-blur-sm">
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item, index) =>
                item.type === "button" ? (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <div key={index} className="px-2 py-2">
                    <div className="px-4 py-2 text-gray-900 font-bold text-sm uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.items?.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={subItem.action}
                        className="block w-full text-left pl-8 pr-4 py-2.5 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )
              )}

              <div className="px-2 py-3">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
