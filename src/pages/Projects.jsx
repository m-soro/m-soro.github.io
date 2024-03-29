import { ProjectData } from "/src/assets/myFiles/ProjectData.jsx";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

export default function Projects() {
  return (
    <div className="Projects fade-in">
      <h3>Tech Projects</h3>
      <div className="ProjectContainer">
        {ProjectData.map((project) => (
          <article className="ProjectCard" key={project.id}>
            <header>
              <hgroup>
                <Link to={`/projects/${project.id}`}>
                  <h4 className="ProjectsName">{project.projectName}</h4>
                </Link>
              </hgroup>
            </header>
            <div className="container-fluid">
              <swiper-container
                slides-per-view="1"
                loop="true"
                navigation="true"
                pagination="true"
                grabCursor="true"
                simulateTouch="true"
                loopedSlides={project.images ? project.images.length : null}
              >
                {project.images.map((image, index) => (
                  <swiper-slide key={index}>
                    <img src={image} alt={project.projectName} />
                  </swiper-slide>
                ))}
              </swiper-container>
              <div className="ProjectDetails">
                <p>{project.summary}</p>
              </div>
            </div>
            <footer className="StackBox">
              <div className="TechStack">
                <hgroup>
                  <p>built with</p>
                  {project.stack.map((icon, index) => {
                    return (
                      <img
                        src={icon}
                        alt={icon.split(".")[1].split("/").pop()}
                        key={index}
                      />
                    );
                  })}
                </hgroup>
              </div>

              <button className="outline">
                <Link to={`/projects/${project.id}`}>more details</Link>
              </button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
