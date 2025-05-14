import React from "react";
import FloatingIcons from "./Components/FloatingIcons";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div
      className="relative min-h-screen flex flex-col overflow-x-hidden overflow-y-auto"
      style={{ color: "var(--color-text)", backgroundColor: "var(--color-bg)" }}
    >
      <Navbar />
      <FloatingIcons countMultiplier={5} />
      <div className="w-full mt-4 overflow-auto flex-grow">
        <div style={{ height: "100vh" }}>
          <HeroSection />
        </div>
        <div style={{ height: "100vh" }}>
          <Experience />
        </div>
        <div style={{ height: "100vh" }}>
          <Education />
        </div>
        <div style={{ height: "100vh" }}>
          <Projects />
        </div>
        <div style={{ height: "100vh" }}>
          <Skills />
        </div>
        <div style={{ height: "100vh" }}>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
