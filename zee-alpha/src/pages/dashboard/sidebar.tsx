import React from "react";
import { Link } from "react-router-dom";
import {  Images, Newspaper, ArrowLeft } from "lucide-react";

interface SidebarProps {
  activeTab: "gallery" | "news";
  setActiveTab: React.Dispatch<React.SetStateAction<"gallery" | "news">>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-80 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-600">
        <div className="w-12 h-12  rounded-lg flex items-center justify-center">
          <div className="text-blue-900 text-xs font-bold text-center leading-tight">
            <img src="/images/school logo.jpeg" alt="school-logo" className="rounded-full" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Zee Alpha</h1>
          <p className="text-blue-200 text-sm">School Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        <button
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            activeTab === "gallery"
              ? "bg-white text-blue-900 font-semibold shadow-lg"
              : "text-blue-100 hover:bg-blue-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("gallery")}
        >
          <Images size={20} />
          <span>Gallery Management</span>
        </button>
        <button
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            activeTab === "news"
              ? "bg-white text-blue-900 font-semibold shadow-lg"
              : "text-blue-100 hover:bg-blue-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("news")}
        >
          <Newspaper size={20} />
          <span>News & Events</span>
        </button>
      </nav>

      {/* Back to Home Button */}
      <Link 
        to="/"
        className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-700 rounded-xl transition-all duration-200 mt-auto border-t border-blue-600 pt-6"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default Sidebar;