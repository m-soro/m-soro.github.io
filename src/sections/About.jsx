import {
  certifications,
  certificationsUrl,
  contactLinks,
  earlierProjects,
} from "../data/portfolio";

const About = () => (
  <section id="about">
    <div className="about">
      <div>
        <div className="eyebrow">About</div>
        <h2>About me</h2>
        <img
          className="about-photo"
          src="https://res.cloudinary.com/dmozohlzf/image/upload/v1746806756/me002_alns00.jpg"
          alt="Mark Soro at his U.S. citizenship ceremony"
        />
        <p className="photo-caption">At my U.S. citizenship oath ceremony</p>
        <p>
          I came to the U.S. from the Philippines knowing one person. I spent years working in 
          luxury hotels while teaching myself to code through books and small projects.
          In 2023 I finished a software engineering program at Per Scholas and became a U.S. citizen that same year.
          I later trained in Salesforce development through SkillStorm, which helped me turn a personal interest
          in programming into a new career.
        </p>
        <p>
          What I enjoy most about development is figuring out how things work.
          I like digging into unfamiliar systems, experimenting with different approaches, and 
          understanding why something works rather than just getting it done.
          When I'm curious about an idea, I'll often build a small prototype to see what's possible.
          There's still plenty I don't know and that's part of what keeps this work interesting.
        </p>
        <p>Outside of work, I'm usually exploring the DC area with my partner.</p>
        <div className="badges">
          {certifications.map((cert) => (
            <a
              className="badge"
              key={cert}
              href={certificationsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cert} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="eyebrow">Contact</div>
        <h2>Let’s connect.</h2>
        <p>
          For Salesforce development or a conversation
          about your team’s systems, get in touch.
        </p>
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>

    <details className="archive">
      <summary>Earlier projects — Salesforce, full-stack, and Python</summary>
      <div className="archivegrid">
        {earlierProjects.map((project) => (
          <div key={project.title}>
            <h4>{project.title}</h4>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </details>
  </section>
);

export default About;
