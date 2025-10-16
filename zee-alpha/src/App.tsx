import { useState } from "react";
import { Header } from "./components/landing page/Header";
import { HeroSection } from "./components/landing page/HeroSection";
import { OverviewSection } from "./components/landing page/OverviewSection";
import { AboutSection } from "./components/landing page/AboutSection";
import { WhyChooseUsSection } from "./components/landing page/WhyChooseUsSection";
import { AdmissionsSection } from "./components/landing page/AdmissionsSection";
import { SchoolLifeSection } from "./components/landing page/SchoolLifeSection";
import { NewsEventsSection } from "./components/landing page/NewsEventsSection";
import { GallerySection } from "./components/landing page/GallerySection";
import { GalleryDashboard } from "./components/landing page/GalleryDashboard";
import { PartnersSection } from "./components/landing page/PartnersSection";
import { Footer } from "./components/landing page/Footer";
import "./index.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />

      {currentPage === "home" ? (
        <main>
          <HeroSection />
          <OverviewSection />
          <AboutSection />
          <WhyChooseUsSection />
          <AdmissionsSection />
          <SchoolLifeSection />
          <NewsEventsSection />
          <GallerySection />
          <PartnersSection />
        </main>
      ) : currentPage === "gallery-dashboard" ? (
        <main>
          <GalleryDashboard onNavigate={handleNavigate} />
        </main>
      ) : null}

      <Footer />
    </div>
  );
}
