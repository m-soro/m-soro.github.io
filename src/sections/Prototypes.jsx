import { Fragment } from "react";
import { prototypes } from "../data/portfolio";

const Prototypes = () => (
  <section id="prototypes">
    <div className="sectionhead">
      <div>
        <div className="eyebrow">Independent prototypes</div>
        <h2>The AI lab.</h2>
      </div>
      <p>
        Two custom-built assistant architectures:{" "}
        <span className="tech-pill">Apex orchestration</span> with custom tools,
        and <span className="tech-pill">Foundry orchestration</span> with{" "}
        <span className="tech-pill">Salesforce MCP</span>. Built with sample data
        in a developer environment, rather than Agentforce’s out-of-the-box agent
        framework.
      </p>
    </div>

    <div className="prototype-grid">
      {prototypes.map((proto) => (
        <article className="prototype" key={proto.title}>
          <div className="tag">{proto.tag}</div>
          <h3>{proto.title}</h3>
          <p className="architecture-label">{proto.architecture}</p>
          <div className="sketch">
            {proto.sketch.map((step, i) => (
              <Fragment key={step}>
                {i > 0 && <b>→</b>}
                <span>{step}</span>
              </Fragment>
            ))}
          </div>
          <div className="chunk">
            <h4>Question</h4>
            <p>{proto.question}</p>
          </div>
          <details className="prototype-details">
            <summary>
              Build & findings <span>+</span>
            </summary>
            <div className="chunk">
              <h4>What I built</h4>
              <p>{proto.built}</p>
            </div>
            <h4>What I learned</h4>
            <p>{proto.learned}</p>
          </details>
        </article>
      ))}
    </div>

    <p className="production-note">
      <span>From prototype to production</span> Findings from my Coral Cloud
      prototype helped inform the team’s production implementation: vector search
      for contextual questions, and live Salesforce queries for exact, current
      record data.
    </p>
  </section>
);

export default Prototypes;
