import { useState, useRef } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const openProjectModal = (id) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      // Pause the carousel when opening the modal
      if (sliderRef.current) {
        sliderRef.current.slickPause();
        setIsPlaying(false);
      }
      setSelectedProject(project);
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

  // Project counter component
  const ProjectCounter = () => {
    return (
      <div className="project-counter">
        <span className="current">{currentSlide + 1}</span>
        <span className="separator"> / </span>
        <span className="total">{projects.length}</span>
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
    className: "center-mode-carousel projects-carousel",
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
        id="projects"
        className="py-32 px-6 text-white parallax min-h-[90vh] flex items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0a0a0a, #1a0b20, #0a0a0a)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 -right-24 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What I've built — a selection of projects that showcase my
              technical skills and problem-solving abilities in action.
            </p>
          </div>

          <div className="carousel-container">
            <Slider ref={sliderRef} {...settings}>
              {projects.map((project, index) => (
                <div key={project.id} className="px-3 slide-wrapper">
                  <div
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl project-card cursor-pointer flex flex-col border border-gray-700 hover:border-purple-500/50 transition-all"
                    data-aos="fade-up"
                    onClick={() => openProjectModal(project.id)}
                  >
                    <div className="project-image h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl relative group">
                      <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-black/70 rounded-full text-white text-sm font-medium">
                          View Details
                        </span>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 flex-grow mb-4">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-900/40 border border-purple-500/30 rounded-full text-sm text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-purple-900/40 border border-purple-500/30 rounded-full text-sm text-purple-200">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Navigation bar with counter and controls */}
            <div className="carousel-nav-bar mt-12">
              <ProjectCounter />
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
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      {/* Add CSS for center mode styling */}
      <style jsx global>{`
        /* Center mode styling for projects carousel */
        .projects-carousel .slick-track {
          display: flex !important;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .projects-carousel .slick-slide {
          height: inherit !important;
          transition: all 0.4s ease;
          opacity: 0.8;
          transform: scale(0.9);
          filter: blur(1px);
          visibility: visible !important;
        }

        .projects-carousel .slick-current {
          opacity: 1;
          transform: scale(1.05);
          z-index: 10;
          filter: blur(0);
        }

        .projects-carousel .slick-slide .project-card {
          height: 380px;
          transition: all 0.4s ease;
          overflow: hidden; /* Ensure content doesn't overflow */
          border-radius: 0.75rem; /* Ensure border radius is consistent */
        }

        .projects-carousel .slick-current .project-card {
          height: 400px; /* Slightly less extreme height difference */
          box-shadow: 0 10px 30px -5px rgba(168, 85, 247, 0.3);
          border-color: rgba(168, 85, 247, 0.3) !important;
        }

        /* Ensure the slide wrapper respects the card's rounded corners */
        .slide-wrapper {
          padding: 0 12px;
          overflow: visible;
        }

        /* Ensure the image container maintains rounded corners */
        .project-image {
          border-top-left-radius: 0.75rem !important;
          border-top-right-radius: 0.75rem !important;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .projects-carousel .project-card {
            height: auto;
            min-height: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
