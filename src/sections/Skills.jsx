import { skills } from "../data/portfolio";

const Skills = () => (
  <section id="work">
    <div className="sectionhead">
      <div>
        <div className="eyebrow">Skills</div>
        <h2>What I bring to a team</h2>
      </div>
      <p>
        Practical development, careful investigation, and a willingness to learn
        how an existing system really works.
      </p>
    </div>

    <div className="skills-grid">
      {skills.map((skill) => (
        <article className="skill-item" key={skill.title}>
          <h3>{skill.title}</h3>
          <p>{skill.summary}</p>
          <details>
            <summary>
              Example: {skill.exampleTitle} <span>↗</span>
            </summary>
            <p>{skill.example}</p>
          </details>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
