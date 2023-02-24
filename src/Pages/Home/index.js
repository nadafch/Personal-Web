import React from "react";
import Navbar from "../../Component/Navbar";
import HeroSection from "../HeroSection";
import About from "../About";
import RecentWork from "../RecentWork";
import Portofolio from "../Portofolio";
import Contact from "../Contact";
import Footer from "../../Component/Footer";

function Home() {
  return (
    <div className="w-full h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <About />
      <RecentWork />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
