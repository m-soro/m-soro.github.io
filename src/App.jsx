import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: "mobile", // Disable on mobile where scrolling issues are more common
      startEvent: "DOMContentLoaded", // Initialize AOS before scrolling starts
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
