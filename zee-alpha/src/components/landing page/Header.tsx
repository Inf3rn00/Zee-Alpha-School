import { Button } from "../ui/button";
import { Menu, X, ChevronDown, User, Lock } from "lucide-react";
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
  onNavigate?: (page: string) => void;
  currentPage?: string;
  isAuthenticated?: boolean;
  userEmail?: string;
  onLogout?: () => void;
}

export function Header({ 
  onNavigate, 
  isAuthenticated = false,
  userEmail = "",
  onLogout 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageNavigation = (path: string) => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    
    if (location.pathname === path) {
      return;
    }
    
    navigate(path);
    
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  const handleSectionNavigation = (section: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      sessionStorage.setItem('scrollToSection', section);
      navigate("/");
    } else {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  const handleAdminLogin = () => {
    setIsMenuOpen(false);
    navigate("/login");
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  const handleDashboardNavigation = () => {
    setIsMenuOpen(false);
    handlePageNavigation("/dashboard");
  };

  // Navigation items configuration
  const navItems = [
    { 
      label: "Home", 
      path: "/", 
      type: "link",
      action: handleHomeClick
    },
    {
      label: "About Us",
      path: "/about",
      type: "link",
      action: () => handlePageNavigation("/about")
    },
    {
      label: "Admissions",
      path: "/admissions",
      type: "link",
      action: () => handlePageNavigation("/admissions")
    },
    {
      label: "School Life",
      type: "dropdown",
      items: [
        { 
          label: "Overview", 
          action: () => handleSectionNavigation("school-life") 
        },
         {
      label: "News & Events",
      action: () => handleSectionNavigation("news"),
      type: "button",
    },
        { 
          label: "Gallery", 
          action: () => handlePageNavigation("/gallery") 
        },
        ...(isAuthenticated ? [
          { 
            label: "Dashboard", 
            action: handleDashboardNavigation 
          },
        ] : [])
      ],
    },
   
    {
      label: "Contact",
      action: () => handleSectionNavigation("contact"),
      type: "button",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div
            onClick={handleHomeClick}
            className="flex-shrink-0 flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
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
              item.type === "link" ? (
                <button
                  key={index}
                  onClick={item.action}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : 
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

          {/* Right Side - Admin Login/Logout & Apply Now */}
          <div className="hidden md:flex items-center gap-3">
            {/* Admin Section */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium hover:text-red-600 transition-colors outline-none group">
                  <User size={18} />
                  <span className="max-w-[120px] truncate">
                    {userEmail || "Admin"}
                  </span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-lg mt-2 py-2 min-w-[160px]">
                  <DropdownMenuItem
                    onClick={handleDashboardNavigation}
                    className="px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-md mx-1 font-medium"
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="px-4 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer transition-colors rounded-md mx-1 font-medium"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={handleAdminLogin}
                variant="outline"
                className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 transition-all duration-300"
              >
                <Lock size={16} />
                Admin Dashboard
              </Button>
            )}

            {/* Apply Now Button */}
            <Button
              onClick={() => handlePageNavigation("/admissions")}
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white border border-red-700"
            >
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
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item, index) =>
                item.type === "link" ? (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : 
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

              {/* Mobile Admin Section */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Admin: <span className="font-medium text-gray-700">{userEmail}</span>
                    </div>
                    <button
                      onClick={handleDashboardNavigation}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleAdminLogin}
                    className="flex items-center gap-2 w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors rounded-lg font-medium"
                  >
                    <Lock size={16} />
                    Admin Login
                  </button>
                )}
              </div>

              {/* Mobile Apply Now Button */}
              <div className="px-2 py-3">
                <Button 
                  onClick={() => handlePageNavigation("/admissions")}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold shadow-lg transition-all duration-300"
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