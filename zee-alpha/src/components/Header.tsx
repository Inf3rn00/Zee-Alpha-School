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
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  const handleGalleryDashboardClick = () => {
    if (onNavigate) {
      onNavigate('gallery-dashboard');
      setIsMenuOpen(false);
    }
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={handleHomeClick}
          >
            <div>
              <h1 className="text-red-600 text-xl">ZEE-ALPHA</h1>
              <p className="text-xs text-muted-foreground">Nurturing Future Leaders</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
                About Us <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="#about" className="cursor-pointer">Overview</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#why-choose-us" className="cursor-pointer">Why Choose Us</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* School Life Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
                School Life <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="#school-life" className="cursor-pointer">Overview</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button 
                    onClick={handleGalleryDashboardClick}
                    className="w-full text-left cursor-pointer"
                  >
                    Gallery Dashboard
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700">Apply Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* About Us submenu in mobile */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground mb-2">About Us</div>
                <a
                  href="#about"
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Overview
                </a>
                <a
                  href="#why-choose-us"
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </a>
              </div>
              
              {/* School Life submenu in mobile */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground mb-2">School Life</div>
                <a
                  href="#school-life"
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Overview
                </a>
                <button
                  onClick={handleGalleryDashboardClick}
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                >
                  Gallery Dashboard
                </button>
              </div>
              
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700">Apply Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
