import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Img3 from "./assets/banner3.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import About from "./Pages/about";
import Contact from "./Pages/contactus";
import MedicalTermsSection from "./Pages/learn";
import EmergencyContactSection from "./Pages/Emergency";
import LocalHealthInfo from "./Pages/localinfo";
import HealthNewsPage from "./components/news/news";
import Videos from "./Pages/video";
import SignUp from "./Pages/Register";
import Hospitals from "./Pages/Hospitals";
import Docs from "./Pages/Docs";
import Symptoms from "./Pages/Symptomchecker";
import MedsInfoMain from "./MedsInfo/MedsInfoMain";
import Scanner from "./Pages/scanner"; // FIXED: Scanner should be uppercase
import { Analytics } from "@vercel/analytics/react";
import SignIn from "./Pages/Signin";
import DocVault from "./DocVault/DocVault";
import Learn from "./learn/Learn"; // Import the Learn component
import SymptomChecker from "./Pages/SymptomChecker"; // Import the SymptomChecker component

// Banner Data for Sections
const BannerData = {
  image: Img1,
  tag: "Personalized Health Monitoring",
  title: "Track and Manage Your Health Effortlessly",
  subtitle:
    "Our platform helps you track your health with customized reports, reminders for medication, and alerts for upcoming health checkups.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "Connect with Nearby Healthcare Providers",
  title: "Access Local Health Services with Ease",
  subtitle:
    "Find verified local clinics, hospitals, and pharmacies in your area. Stay updated on essential health drives and community healthcare events.",
  link: "#",
};

const BannerData3 = {
  image: Img3,
  tag: "Medical Order Record",
  title: "Easily Manage and Track Your Medical Orders",
  subtitle:
    "Our platform enables seamless management of medical prescriptions, lab tests, and treatment orders for better healthcare coordination.",
  link: "#",
};

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
      <Analytics />
      <Navbar className="text-black bg-white dark:bg-gray-800 dark:text-white"/>
      <main className="text-black bg-white dark:bg-gray-800 dark:text-white">
      <Routes className="text-black bg-white dark:bg-gray-800 dark:text-white">
        {/* 🏡 Home Page */}
        <Route
          path="/"
          element={
            <>
              <NavbarBanner />
              <Hero />
              <NumberCounter />
              <Banner {...BannerData} />
              <Banner {...BannerData2} reverse={true} />
              <Banner {...BannerData3} />
              <SubjectCard />
              <HealthNewsPage />
              <WhyChooseUs />
              <Testimonial />
            </>
          }
        />

        {/* 📰 Health News */}
        <Route path="/health-news" element={<HealthNewsPage />} />

        {/* 🔑 Authentication */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 📜 About & Contact */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🎥 Video Tutorials */}
        <Route path="/videos" element={<Videos />} />

        {/* 🏥 Healthcare Services */}
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Docs />} />

        {/* 🏥 Health Utilities */}
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/scanner" element={<Scanner />} />
          <Route path="/meds-info" element={<MedsInfoMain />} />
        {/* 🚨 Emergency Contacts */}

        <Route path="/emergency-contacts" element={<EmergencyContactSection />} />
        
        {/* 📚 Medical Terms */}
        
        
        <Route path="/medical-terms" element={<MedicalTermsSection />} />
        
        <Route path="/local-health" element={<LocalHealthInfo />} />
        
        {/* 📁 Document Vault */
        <Route path="/docvault" element={<DocVault />} />
        }

        <Route path="/learn" element={<Learn />} />

        <Route path="/symptom-checker" element={<SymptomChecker />} />

      </Routes>
          
      <Footer />
      </main>
      </main>
    </Router>
  );
};

export default App;
