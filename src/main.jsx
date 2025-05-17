import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./screens/Home.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Business from "./screens/Business.jsx";
import SoftwareDetails from "./screens/SoftwareDetails.jsx";
import Blogs from "./screens/Blogs.tsx";
import ContactPage from "./screens/ContactPage.jsx";
import Careers from "./screens/Careers.jsx";
import JobDetails from "./Sections/Careers/JobDetails.jsx";
import CRMInfoGraphics from "./Sections/Business/CRMInfoGraphics.jsx";
import Learning from "./screens/Learning.jsx";
import CourseDetails from "./Sections/Learning/CourseDetails.jsx";
import Services from "./screens/Services.jsx";
import JobPortalInfographics from "./Sections/Business/JobPortalInfographics.jsx";
import LMSInfographics from "./Sections/Business/LMSInfographics.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/software-details/:id" element={<SoftwareDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careersDetails" element={<JobDetails />} />
        <Route path="/crmoverview" element={<CRMInfoGraphics />} />
        <Route path="/jobinfographics" element={<JobPortalInfographics />} />
        <Route path="/lmsinfographics" element={<LMSInfographics />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
