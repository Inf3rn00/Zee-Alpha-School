import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AboutUs from "./pages/AboutUs";
import "./index.css";
import Admissions from "./pages/Admissions";
import { Gallery } from "./pages/Gallery";
import ScrollToTop from "./components/ui/ScrollToTop";
import Dashboard from "./pages/dashboard/Dashboard";
import { DashboardProvider } from "./pages/dashboard/DashboardContext";
import SchoolApplicationForm from "./components/ui/SchoolApplicationForm";

export default function App() {
  return (
    <DashboardProvider>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admissionForm" element={<SchoolApplicationForm />} />
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}
