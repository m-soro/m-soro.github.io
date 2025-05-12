import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background change
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["home", "impact", "projects", "about", "contact"];
      let currentSection = "home";

      // Check if we're near the bottom of the page
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (isNearBottom) {
        // If near bottom, set active section to contact
        currentSection = "contact";
      } else {
        // Otherwise, check each section's position
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Handle initial hash in URL
    const handleInitialHash = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash) {
        setIsNavigating(true); // Show spinner

        const element = document.getElementById(hash);
        if (element) {
          // Wait a bit for all components to render
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            // Hide spinner after scrolling completes
            setTimeout(() => setIsNavigating(false), 300);
          }, 300); // Reduced from 500ms to 300ms
        } else {
          setIsNavigating(false); // Hide spinner if element not found
        }
      }
    };

    // Run once after initial render
    handleInitialHash();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            Mark<span className="text-purple-500">Soro</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {["home", "impact", "projects", "about", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-gray-300 hover:text-purple-400 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-400 after:transition-all ${
                    activeSection === section
                      ? "text-purple-400 after:w-full"
                      : ""
                  }`}
                >
                  {section === "impact"
                    ? "Impact"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              )
            )}
          </nav>
          <button className="md:hidden text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Loading Spinner */}
      {isNavigating && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      )}
    </>
  );
};

export default Header;
