import React, { useEffect } from "react";
import Hero from "./modules/Hero";
import Navbar from "./components/Nav/Navbar";
import useLocomotive from "./hooks/useLocomotive";
import RealWork from "./modules/RealWork";
import Team from "./modules/Team";
import About from "./modules/About";
import Insights from "./modules/Insights";
import Build from "./modules/Build";
import Footer from "./modules/Footer";
import Preloader from "./components/preloader/Preloader";
import Testimonial from "./modules/Testimonial";
import Projects from "./modules/Projects";
import ContactMove from "./components/ContactMove/ContactMove";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

const App = () => {
  useLocomotive(true); // Disable locomotive scroll

  useEffect(() => {
    const scriptSrc = "./plugin.js";

    setTimeout(() => {
      loadScript(scriptSrc)
        .then(() => {
          console.log("Plugin script loaded successfully.");
        })
        .catch((error) => {
          console.error("Error loading the plugin script:", error);
        });
    }, 5000);

    return () => {
      const script = document.querySelector(`script[src="${scriptSrc}"]`);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <RealWork />
        <Insights />
        <Team />
        <Projects />
        <About />
        <Testimonial />
        <div className="relative z-10">
          <Build />
          <ContactMove />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
