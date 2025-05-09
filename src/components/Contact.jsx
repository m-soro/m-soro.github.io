import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// Import the PDF file directly
import resumePDF from "../data/Mark_Soro_CV_Salesforce_Developer_blur.pdf";

const ResumeModal = ({ isOpen, onClose, pdfSrc }) => {
  if (!isOpen) return null;

  // Create a portal to render the modal at the root level
  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 md:p-8"
      onClick={onClose}
    >
      <div
        // Adjusted width and max-height to better match PDF aspect ratio
        className="w-full max-w-4xl h-auto max-h-[90vh] bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: "1/1.414" }} // Standard PDF aspect ratio
      >
        <div className="flex justify-between items-center p-3 bg-black/60 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">Mark Soro - Resume</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 rounded-full hover:bg-white/10"
            aria-label="Close resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="h-[calc(100%-3.5rem)] bg-white">
          <iframe
            src={pdfSrc}
            title="Mark Soro Resume"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>,
    document.body // Render directly to the body element
  );
};

const Contact = () => {
  const [showResume, setShowResume] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showResume]);

  const toggleResumeView = () => {
    setShowResume(!showResume);
  };

  return (
    <section
      id="contact"
      className="py-32 px-4 md:px-6 lg:px-8 bg-black text-white text-center min-h-[80vh] flex items-center relative"
      data-aos="fade-up"
    >
      {/* Single background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480506132288-68f7705954bd?auto=format&fit=crop&w=1400&q=80')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Adjusted card width and padding */}
        <div className="bg-black/40 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            data-aos="fade-up"
          >
            Let's Connect
          </h2>
          <p
            className="max-w-2xl mx-auto text-gray-300 mb-10 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Interested in working together? Want to know more about my
            experience or how I can help your team? Feel free to reach out via
            the links below or view my resume.
          </p>

          <div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              onClick={toggleResumeView}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl text-lg w-full md:w-auto"
            >
              {showResume ? "Close Resume" : "View Resume"}
            </button>

            <a
              href="mailto:napoleon_soro@rocketmail.com"
              className="px-8 py-4 border border-purple-500 hover:border-purple-400 text-white hover:text-purple-400 font-semibold rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl text-lg flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Me
            </a>
          </div>

          <div
            className="flex justify-center space-x-8 md:space-x-12 text-purple-400 text-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://github.com/m-soro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-purple-900/20 group-hover:border-purple-500/30 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marksoro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-purple-900/20 group-hover:border-purple-500/30 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v-1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Resume Modal using Portal */}
      <ResumeModal
        isOpen={showResume}
        onClose={toggleResumeView}
        pdfSrc={resumePDF}
      />
    </section>
  );
};

export default Contact;
