import React from "react";
import { BrowserRouter as Router, Routes, Route , HashRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import About from "./Pages/about";
import Contact from "./Pages/contactus";
import HealthNewsPage from "./components/news/news"; 
import Videos from "./Pages/video";
import SignUp from "./Pages/Register";
import Hospitals from "./Pages/Hospitals";
import Docs from "./Pages/Docs";
import Symptoms from "./Pages/Symptomchecker";
import Medsinfo from "./Pages/Medsinfo";
import scanner from "./Pages/scanner";
import { Analytics } from "@vercel/analytics/react";
import SignIn from "./Pages/Signin";

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
  image: Img1,
  tag: "Medical Order Record",
  title: "Easily Manage and Track Your Medical Orders",
  subtitle:
    "Our platform enables seamless management of medical prescriptions, lab tests, and treatment orders for better healthcare coordination.",
  link: "#",
};

const App = () => {
  return (
    <HashRouter>
   
      <Analytics />
      <Navbar />
      
      <Routes>
        {/* Home Page */}
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

        {/* Health News Page - Now Separate */}
        <Route path="/health-news" element={<HealthNewsPage />} />
        
        {/* Sign In Page */}
        <Route path="/signin" element={<SignIn />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Login Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Videos Page */}
        <Route path="/videos" element={<Videos />} />
        {/* Register Page */}
        <Route path="/signup" element={<SignUp />} />
        {/* Hospitals Page */}
        <Route path="/hospitals" element={<Hospitals />} />
        {/* Doctors Page */}
        <Route path="/doctors" element={<Docs />} />
        {/* Symptoms Checker Page */}
        <Route path="/symptoms" element={<Symptoms />} />
        {/* Medicines Info Page */}
        <Route path="/medicines" element={<Medsinfo />} />
        {/* Scanner Page */}
        <Route path="/scanner" element={<scanner />} />
        
      </Routes>
     
      <Footer />
  
    </HashRouter>
  );
};

export default App;
