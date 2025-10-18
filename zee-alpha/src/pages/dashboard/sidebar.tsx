import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  activeTab: "gallery" | "news";
  setActiveTab: React.Dispatch<React.SetStateAction<"gallery" | "news">>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
     <Link to="/"> <h2 className="text-2xl font-bold mb-8">Dashboard</h2></Link>
      <nav className="space-y-2">
        <button
          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
            activeTab === "gallery"
              ? "bg-blue-700 text-white font-semibold"
              : "bg-blue-800/50 hover:bg-blue-700/50"
          }`}
          onClick={() => setActiveTab("gallery")}
        >
          📷 Gallery
        </button>
        <button
          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
            activeTab === "news"
              ? "bg-blue-700 text-white font-semibold"
              : "bg-blue-800/50 hover:bg-blue-700/50"
          }`}
          onClick={() => setActiveTab("news")}
        >
          📰 News & Events
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
