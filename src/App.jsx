import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App container">
      <Header />
      <div className="BackToTopContainer">
        {scrollTop > 0 ? <BackToTop /> : <div></div>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
