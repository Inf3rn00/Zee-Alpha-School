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
import AuthComponent from "./pages/authComponent";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { Layout } from "./layouts/layout";

export default function App() {
  return (
    <DashboardProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutUs /></Layout>} />
          <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/admissionForm" element={<Layout><SchoolApplicationForm /></Layout>} />
          
          <Route path="/login" element={<AuthComponent />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                  <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}