import "./Home.scss";

import About from "./sections/About";
import BackToTopButton from "../../components/backToTop/BackToTopButton";
import Contact from "./sections/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "./sections/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "./sections/Portfolio";
import React from "react";
import Services from "./sections/Services";
import WaveSVG from "../../components/WaveSVG";

export default function Home() {
  return (
    <main className="wrapper home position-relative h-100">
      <div className="dark-background"></div>
      <Navbar />
      <Hero />
      <About />
      <WaveSVG position="top" color="#f3f4f5" />
      <Services />
      <WaveSVG position="bottom" color="#f3f4f5" />
      <Portfolio />
      <WaveSVG position="top" color="#080631" />
      <Contact />
      <WaveSVG position="bottom" color="#080631" />
      <BackToTopButton />
      <Footer />
    </main>
  );
}
