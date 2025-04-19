import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <FeaturedProjects />
        <Stats />
        <Testimonials />
        <Experience />
        <AboutUs />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
