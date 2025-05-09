import { useState, useRef } from "react";
import { impactData } from "../data/impact";
import ImpactModal from "./ImpactModal";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Impact = () => {
  const [selectedImpact, setSelectedImpact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const openImpactModal = (id) => {
    const impact = impactData.find((i) => i.id === id);
    if (impact) {
      // Pause the carousel when opening the modal
      if (sliderRef.current) {
        sliderRef.current.slickPause();
        setIsPlaying(false);
      }
      setSelectedImpact(impact);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Resume autoplay when closing the modal if it was playing before
    if (sliderRef.current && isPlaying) {
      sliderRef.current.slickPlay();
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to truncate text and add an arrow indicator
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return (
      <span>
        {text.substring(0, maxLength)}...{" "}
        <span className="text-purple-400 inline-block ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 inline-block transform translate-y-[-1px]"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    );
  };

  // Custom arrow components
  const PrevArrow = () => {
    return (
      <button
        className="custom-prev-arrow"
        onClick={() => sliderRef.current.slickPrev()}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    );
  };

  const NextArrow = () => {
    return (
      <button
        className="custom-next-arrow"
        onClick={() => sliderRef.current.slickNext()}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    );
  };

  // Play/Pause button
  const PlayPauseButton = () => {
    return (
      <button
        className="custom-play-pause-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="32"
            height="32"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="32"
            height="32"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    );
  };

  // Impact counter component
  const ImpactCounter = () => {
    return (
      <div className="project-counter">
        <span className="current">{currentSlide + 1}</span>
        <span className="separator"> / </span>
        <span className="total">{impactData.length}</span>
      </div>
    );
  };

  // Carousel settings with center mode
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerMode: true,
    centerPadding: "0",
    className: "center-mode-carousel impact-carousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <>
      <section
        id="impact"
        className="py-32 px-6 text-white parallax min-h-[90vh] flex items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0a0a0a, #0f0f1e, #0a0a0a)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Impactful Contributions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What I've accomplished professionally — real solutions that
              delivered measurable results and transformed business processes.
            </p>
          </div>

          <div className="carousel-container">
            <Slider ref={sliderRef} {...settings}>
              {impactData.map((impact, index) => (
                <div key={impact.id} className="px-3 slide-wrapper">
                  <div
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl impact-card cursor-pointer flex flex-col border border-gray-700 hover:border-blue-500/50 transition-all"
                    data-aos="fade-up"
                    onClick={() => openImpactModal(impact.id)}
                  >
                    <div className="impact-image h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl relative group">
                      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-black/70 rounded-full text-white text-sm font-medium">
                          View Details
                        </span>
                      </div>
                      <img
                        src={impact.image}
                        alt={impact.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {impact.title}
                    </h3>
                    <p className="text-gray-300 flex-grow mb-4">
                      {truncateText(impact.content)}
                    </p>
                    <div className="mt-auto text-sm text-blue-300 font-medium italic text-xs">
                      {impact.footer}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Navigation bar with counter and controls */}
            <div className="carousel-nav-bar mt-12">
              <ImpactCounter />
              <div className="carousel-controls">
                <PrevArrow />
                <PlayPauseButton />
                <NextArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <ImpactModal impact={selectedImpact} onClose={closeModal} />
      )}

      {/* Add CSS for center mode styling */}
      <style jsx global>{`
        /* Center mode styling for impact carousel */
        .impact-carousel .slick-track {
          display: flex !important;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .impact-carousel .slick-slide {
          height: inherit !important;
          transition: all 0.4s ease;
          opacity: 0.8;
          transform: scale(0.9);
          filter: blur(1px);
          visibility: visible !important;
        }

        .impact-carousel .slick-current {
          opacity: 1;
          transform: scale(1.05);
          z-index: 10;
          filter: blur(0);
        }

        .impact-carousel .slick-slide .impact-card {
          height: 380px;
          transition: all 0.4s ease;
          overflow: hidden; /* Ensure content doesn't overflow */
          border-radius: 0.75rem; /* Ensure border radius is consistent */
        }

        .impact-carousel .slick-current .impact-card {
          height: 400px; /* Slightly less extreme height difference */
          box-shadow: 0 10px 30px -5px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.3) !important;
        }

        /* Ensure the slide wrapper respects the card's rounded corners */
        .slide-wrapper {
          padding: 0 12px;
          overflow: visible;
        }

        /* Ensure the image container maintains rounded corners */
        .impact-image {
          border-top-left-radius: 0.75rem !important;
          border-top-right-radius: 0.75rem !important;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .impact-carousel .impact-card {
            height: auto;
            min-height: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default Impact;
