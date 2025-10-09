import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OverviewSection } from "./components/OverviewSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { AdmissionsSection } from "./components/AdmissionsSection";
import { SchoolLifeSection } from "./components/SchoolLifeSection";
import { NewsEventsSection } from "./components/NewsEventsSection";
import { GallerySection } from "./components/GallerySection";
import { GalleryDashboard } from "./components/GalleryDashboard";
import { PartnersSection } from "./components/PartnersSection";
import { Footer } from "./components/Footer";
import './index.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />
      
      {currentPage === 'home' ? (
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
      ) : currentPage === 'gallery-dashboard' ? (
        <main>
          <GalleryDashboard onNavigate={handleNavigate} />
        </main>
      ) : null}
      
      <Footer />
    </div>
  );
}
