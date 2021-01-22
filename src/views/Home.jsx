import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import CustomerSection from "./sections/CustomerSection";
import DownloadSection from "./sections/DownloadSection";
import DriverSection from "./sections/DriverSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import RegistrationSection from "./sections/RegistrationSection";

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <CustomerSection />
    <DriverSection />
    <RegistrationSection />
    <DownloadSection />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
