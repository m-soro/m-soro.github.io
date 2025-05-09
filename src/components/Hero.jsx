import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Salesforce Developer & Integration Specialist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center parallax"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="text-center z-10 px-4">
        <div className="backdrop-blur-lg bg-black/30 border border-white/10 p-8 rounded-xl shadow-xl">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            data-aos="fade-up"
          >
            Mark Soro
          </h1>
          <h2
            className="text-xl md:text-2xl text-purple-400 mb-6 h-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Software Developer | Salesforce Certified
          </h2>
          <p
            className="text-gray-300 max-w-xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I build solutions that make work easier and experiences better. My
            focus is turning complex challenges into simple, elegant systems
            that deliver real value to the people who use them.
          </p>
          <div
            className="flex justify-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#impact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/40 hover:border-purple-400 text-white hover:text-purple-400 font-semibold rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;
