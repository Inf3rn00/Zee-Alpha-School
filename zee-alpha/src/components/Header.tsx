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
  currentPage?: string; // Add this to know which page we're on
}

export function Header({ onNavigate, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const handleSectionClick = (section: string) => {
    if (currentPage !== 'home') {
      // If we're not on home page, navigate to home first, then scroll to section
      handleNavigation('home');
      // You might need to delay the scroll or use a ref
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If we're already on home, just scroll to section
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => handleNavigation('home')}
          >
            <div className="flex items-center gap-5">
              <img src="/images/school logo.jpeg" className="w-[60px] rounded-[50%] "/>
              <div>
                  <h1 className="text-red-700 text-xl">ZEE-ALPHA</h1>
              <p className="text-xs text-muted-foreground">Nurturing Future Leaders</p>  
              </div>
            
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Home Button - Always navigates to home page */}
            <button
              onClick={() => handleNavigation('home')}
              className="text-muted-foreground hover:text-red-700 cursor-pointer transition-colors"
            >
              Home
            </button>

               {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-red-700 cursor-pointer transition-colors flex items-center gap-1 outline-none ">
                About Us <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-100 py-4 border-none shadow-xl">
                <DropdownMenuItem onClick={() => handleSectionClick('about')} className="hover:text-red-700 cursor-pointer">
                  Overview
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSectionClick('why-choose-us')} className="hover:text-red-700 cursor-pointer">
                  Why Choose Us
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


            {/* Other navigation items */}
            <button
              onClick={() => handleSectionClick('admissions')}
              className="text-muted-foreground hover:text-red-700 cursor-pointer transition-colors"
            >
              Admissions
            </button>

              {/* School Life Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-red-700 cursor-pointer transition-colors flex items-center gap-1 outline-none">
                School Life <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-100 py-4 border-none shadow-xl">
                <DropdownMenuItem onClick={() => handleSectionClick('school-life')} className="hover:text-red-700 cursor-pointer">
                  Overview
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('gallery-dashboard')} className="hover:text-red-700 cursor-pointer">
                  Gallery Dashboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleSectionClick('contact')}
              className="text-muted-foreground hover:text-red-700 cursor-pointer transition-colors"
            >
              Contact
            </button>
            
         
          
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">Apply Now</Button>
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
              <button
                onClick={() => handleNavigation('home')}
                className="block px-3 py-2 text-muted-foreground hover:text-red-700 cursor-pointer transition-colors w-full text-left hover:text-red-700 cursor-pointer"
              >
                Home
              </button>
              
              <button
                onClick={() => handleSectionClick('admissions')}
                className="block px-3 py-2 text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
              >
                Admissions
              </button>

              <button
                onClick={() => handleSectionClick('contact')}
                className="block px-3 py-2 text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
              >
                Contact
              </button>
              
              {/* About Us submenu in mobile */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground mb-2">About Us</div>
                <button
                  onClick={() => handleSectionClick('about')}
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
                >
                  Overview
                </button>
                <button
                  onClick={() => handleSectionClick('why-choose-us')}
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
                >
                  Why Choose Us
                </button>
              </div>
              
              {/* School Life submenu in mobile */}
              <div className="px-3 py-2">
                <div className="text-muted-foreground mb-2">School Life</div>
                <button
                  onClick={() => handleSectionClick('school-life')}
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
                >
                  Overview
                </button>
                <button
                  onClick={() => handleNavigation('gallery-dashboard')}
                  className="block pl-4 py-1 text-sm text-muted-foreground hover:text-[#016bd7] cursor-pointer transition-colors w-full text-left"
                >
                  Gallery Dashboard
                </button>
              </div>
              
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 ">Apply Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}