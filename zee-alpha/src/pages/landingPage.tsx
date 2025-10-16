import { Header } from "../components/landing page/Header";
import { HeroSection } from "../components/landing page/HeroSection";
import { OverviewSection } from "../components/landing page/OverviewSection";
import { AboutSection } from "../components/landing page/AboutSection";
import { WhyChooseUsSection } from "../components/landing page/WhyChooseUsSection";
import { AdmissionsSection } from "../components/landing page/AdmissionsSection";
import { SchoolLifeSection } from "../components/landing page/SchoolLifeSection";
import { NewsEventsSection } from "../components/landing page/NewsEventsSection";
import { GallerySection } from "../components/landing page/GallerySection";
import { PartnersSection } from "../components/landing page/PartnersSection";
import { Footer } from "../components/landing page/Footer";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    // Handle section scrolling after navigation
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        sessionStorage.removeItem('scrollToSection');
      }, 100);
    }
    
    // Handle scroll prevention for page navigation
    const preventScrollFlash = sessionStorage.getItem('preventScrollFlash');
    if (preventScrollFlash) {
      window.scrollTo(0, 0);
      sessionStorage.removeItem('preventScrollFlash');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
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
        <Footer />
      </main>
    </div>
  );
}