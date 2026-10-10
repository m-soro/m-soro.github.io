import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Prototypes from "./sections/Prototypes";
import Experience from "./sections/Experience";
import About from "./sections/About";
import PortfolioHistory from "./sections/PortfolioHistory";

function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
        <Skills />
        <Prototypes />
        <Experience />
        <About />
        <PortfolioHistory />
      </main>
      <footer className="wrap">Mark Soro / Salesforce Developer / 2026</footer>
    </>
  );
}

export default App;
