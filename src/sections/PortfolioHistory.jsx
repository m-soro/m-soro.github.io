import { portfolioVersions } from "../data/portfolio";

const PortfolioHistory = () => (
  <section className="time-machine" id="portfolio-history">
    <div className="sectionhead">
      <div>
        <div className="eyebrow">Portfolio time machine</div>
        <h2>A few versions of me.</h2>
      </div>
      <p>The portfolio has changed as the work has changed. Take a look back.</p>
    </div>

    <div className="history-links">
      {portfolioVersions.map((version) => {
        const body = (
          <>
            <span className="version-number">{version.number}</span>
            <div>
              <h3>{version.title}</h3>
              <p>{version.text}</p>
            </div>
          </>
        );

        return version.href ? (
          <a key={version.number} href={version.href} target="_blank" rel="noopener noreferrer">
            {body}
            <span className="version-action">Visit ↗</span>
          </a>
        ) : (
          <div key={version.number} className="current-version">
            {body}
            <span className="version-action">You’re here</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default PortfolioHistory;
