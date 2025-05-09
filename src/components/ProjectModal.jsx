import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if project has images array and multiple images
  const hasMultipleImages = project.images && project.images.length > 1;

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: () => (
      <div className="custom-dot bg-white/30 hover:bg-white/50"></div>
    ),
  };

  // Custom arrow components
  const PrevArrow = () => {
    return (
      <button
        className="custom-modal-prev-arrow"
        onClick={() => sliderRef.current.slickPrev()}
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    );
  };

  const NextArrow = () => {
    return (
      <button
        className="custom-modal-next-arrow"
        onClick={() => sliderRef.current.slickNext()}
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 modal-animate">
      <div className="backdrop-blur-lg bg-white/10 text-white border border-white/10 shadow-xl rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto modal-content-animate">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition"
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

          {/* Project image carousel */}
          <div className="mb-6 -mx-6 -mt-2 relative project-image-container">
            {hasMultipleImages ? (
              <div className="project-carousel-container">
                <Slider ref={sliderRef} {...settings}>
                  {project.images.map((img, index) => (
                    <div key={index} className="project-carousel-slide">
                      <div className="modal-image-wrapper">
                        <img
                          src={img}
                          alt={`${project.title} - image ${index + 1}`}
                          className="modal-carousel-image"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* Custom navigation */}
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                  <div className="pointer-events-auto">
                    <PrevArrow />
                  </div>
                  <div className="pointer-events-auto">
                    <NextArrow />
                  </div>
                </div>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                  {currentSlide + 1} / {project.images.length}
                </div>
              </div>
            ) : (
              <div className="modal-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="modal-carousel-image"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            )}
          </div>

          {/* Short description */}
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Long description */}
          {project.long_description && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-purple-400">
                About this Project
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {project.long_description}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-purple-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-900/40 border border-purple-500/30 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project footer */}
          {project.footer && (
            <p className="text-gray-400 italic text-sm mb-6">
              {project.footer}
            </p>
          )}

          {/* Action buttons */}
          <div className="flex space-x-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                View Demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-purple-500 hover:border-purple-400 text-white hover:text-purple-400 font-medium rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
