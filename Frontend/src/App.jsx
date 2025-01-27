import React from "react";
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
import { Analytics } from "@vercel/analytics/react";

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

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Analytics/>
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <WhyChooseUs />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
