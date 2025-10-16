import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Interface defining the props for the Header component
interface HeaderProps {
  onNavigate?: (page: string) => void; // Callback function for navigation
  currentPage?: string; // Current active page for conditional behavior
}

export function Header({ onNavigate, currentPage = "home" }: HeaderProps) {
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Handles navigation to different pages WITHOUT scroll glitches
   * @param path - The target page to navigate to
   */
  const handlePageNavigation = (path: string) => {
    setIsMenuOpen(false);
    
    // Always reset scroll to top before navigation
    window.scrollTo(0, 0);
    
    // If we're already on the target page, just scroll to top and return
    if (location.pathname === path) {
      return;
    }
    
    // Navigate to the new page
    navigate(path);
    
    if (onNavigate) {
      onNavigate(path);
    }
  };

  /**
   * Handles Home button click - always goes to top of homepage
   */
  const handleHomeClick = () => {
    setIsMenuOpen(false); // Close mobile menu immediately
    
    if (location.pathname === "/") {
      // If already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to homepage
      navigate("/");
    }
  };

  /**
   * Handles in-page navigation on homepage
   * @param section - The section ID to scroll to
   */
  const handleSectionNavigation = (section: string) => {
    setIsMenuOpen(false); // Close mobile menu immediately
    
    if (location.pathname !== "/") {
      // Store the section we want to scroll to after navigation
      sessionStorage.setItem('scrollToSection', section);
      // Navigate to homepage
      navigate("/");
    } else {
      // If already on homepage, scroll directly to section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  // Navigation items configuration
  const navItems = [
    // Home navigation - goes to homepage
    { 
      label: "Home", 
      path: "/", 
      type: "link",
      action: handleHomeClick
    },
    // About Us navigation - goes to separate about page
    {
      label: "About Us",
      path: "/about",
      type: "link",
      action: () => handlePageNavigation("/about")
    },
    // Admissions navigation - goes to separate admissions page
    {
      label: "Admissions",
      path: "/admissions",
      type: "link",
      action: () => handlePageNavigation("/admissions")
    },
    // School Life dropdown with gallery and dashboard as separate pages
    {
      label: "School Life",
      type: "dropdown",
      items: [
        { 
          label: "Overview", 
          action: () => handleSectionNavigation("school-life") 
        },
        { 
          label: "Gallery", 
          action: () => handlePageNavigation("/gallery") 
        },
        { 
          label: "Dashboard", 
          action: () => handlePageNavigation("/dashboard") 
        },
      ],
    },
    // News & Events - in-page navigation to news section on homepage
    {
      label: "News & Events",
      action: () => handleSectionNavigation("news"),
      type: "button",
    },
    // Contact - in-page navigation to contact section on homepage
    {
      label: "Contact",
      action: () => handleSectionNavigation("contact"),
      type: "button",
    },
  ];

  return (
    // Sticky header with glass morphism effect
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header container with flex layout */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div
            onClick={handleHomeClick}
            className="flex-shrink-0 flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* School Logo */}
                <img
                  src="/images/school logo.jpeg"
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  alt="Logo"
                />
              </div>
              {/* School Name and Tagline - hidden on small screens */}
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-red-700">ZEE-ALPHA</h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  Nurturing Future Leaders
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item, index) =>
              // Render link components for full page navigation
              item.type === "link" ? (
                <button
                  key={index}
                  onClick={item.action}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors relative group"
                >
                  {item.label}
                  {/* Animated underline effect on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : 
              // Render button items for in-page navigation
              item.type === "button" ? (
                <button
                  key={index}
                  onClick={item.action}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors relative group"
                >
                  {item.label}
                  {/* Animated underline effect on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : (
                // Render dropdown menu items for School Life
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors flex items-center gap-1.5 outline-none group">
                    {item.label}
                    {/* Animated chevron icon */}
                    <ChevronDown
                      size={16}
                      className="group-data-[state=open]:rotate-180 transition-transform"
                    />
                  </DropdownMenuTrigger>
                  {/* Dropdown content with glass morphism effect */}
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

          {/* CTA Button - hidden on mobile */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handlePageNavigation("/admissions")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button - only visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
              className="text-gray-700 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              {/* Show X icon when open, menu icon when closed */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - appears when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item, index) =>
                // Render link components for full page navigation (mobile)
                item.type === "link" ? (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : 
                // Render mobile button items for in-page navigation
                item.type === "button" ? (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  // Render mobile dropdown items for School Life
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

              {/* Mobile CTA Button */}
              <div className="px-2 py-3">
                <Button 
                  onClick={() => handlePageNavigation("/admissions")}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300"
                >
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