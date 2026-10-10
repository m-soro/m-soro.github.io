import { experience } from "../data/portfolio";

const Experience = () => (
  <section id="experience">
    <div className="sectionhead">
      <div>
        <div className="eyebrow">Experience</div>
        <h2>Experience</h2>
      </div>
    </div>

    <div className="history">
      {experience.map((entry) => (
        <article className="entry" key={entry.title}>
          <div className="date">{entry.date}</div>
          <h3>{entry.title}</h3>
          {entry.bullets ? (
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : (
            <p>{entry.text}</p>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
