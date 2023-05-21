import React from "react";
import HeroSection from "../HeroSection";
import About from "../About";
import RecentWork from "../RecentWork";
import Portofolio from "../Portofolio";
import Contact from "../Contact";
import Footer from "../../Component/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <RecentWork />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
