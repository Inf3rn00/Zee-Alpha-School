import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AboutUs from "./pages/AboutUs";
import "./index.css";
import Admissions from "./pages/Admissions";
import { Gallery } from "./pages/Gallery";

export default function App() {
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </BrowserRouter>
  );
}

