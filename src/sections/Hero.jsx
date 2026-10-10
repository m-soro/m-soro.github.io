import { scopeStrip } from "../data/portfolio";

const Hero = () => (
  <>
    <div id="home" className="hero personal-hero">
      <div className="hero-main">
        <div className="eyebrow hero-breadth">Salesforce · APIs · Systems</div>
        <h1>
          Mark Soro
          <br />
          <span>Developer</span>
        </h1>
        <p className="intro">
          I develop and support a heavily customized, deeply integrated Salesforce org at Bridgepointe Technologies.
        </p>
        <p className="intro hero-second">
          My work spans integrations, Apex, Lightning, and the practical
          responsibility of understanding, maintaining, and improving an existing
          environment.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">
            Explore my skills ↓
          </a>
          <a className="button" href="#contact">
            Contact ↗
          </a>
        </div>
      </div>

      <aside className="system-map" aria-label="Illustration of connected Salesforce systems">
        <div className="map-head">
          <span>THE SYSTEMS I SUPPORT</span>
          <span className="live-dot">Production</span>
        </div>
        <div className="map-stage">
          <div className="map-item north">
            External integrations<small>APIs · Systems · Data</small>
          </div>
          <div className="map-item west">
            Internal teams<small>Operations & Stakeholders</small>
          </div>
          <div className="map-item center">
            Salesforce<small>Apex · LWC · Aura</small>
          </div>
          <div className="map-item east">
            Partners<small>Experience Cloud</small>
          </div>
          <div className="map-item south">
            AI workflows<small>Assistant tools & context</small>
          </div>
        </div>
        <p>
          I develop and support the Salesforce components and integrations
          connecting business systems, internal teams, and partners.
        </p>
      </aside>
    </div>

    <div className="scope-strip">
      {scopeStrip.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </>
);

export default Hero;
