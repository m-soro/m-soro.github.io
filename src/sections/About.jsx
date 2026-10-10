import {
  certifications,
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
          I came to the U.S. from the Philippines knowing one person. I worked in
          hotels for years and taught myself to code on the side, mostly from
          books and small projects. In 2023 I finished a software engineering
          program at Per Scholas and became a U.S. citizen in the same year.
        </p>
        <p>
          I moved into Salesforce because I liked working on systems that real
          teams depend on every day. I like understanding why something works,
          not just getting the ticket done. When I'm not sure about an approach,
          I build a quick version, test it, and try another one if it doesn't
          feel right. I still have plenty to learn, and that's a big part of why
          I enjoy this work.
        </p>
        <p>Outside of work, I'm usually exploring the DC area with my partner.</p>
        <div className="badges">
          {certifications.map((cert) => (
            <span className="badge" key={cert}>
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="eyebrow">Contact</div>
        <h2>Let’s connect.</h2>
        <p>
          For Salesforce development, integration support, or a conversation
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
