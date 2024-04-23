import "./App.css";
export default App;
import ArrowDown from "./assets/arrow-down.svg";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import ReactGA from "react-ga";

export function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const onPageScroll = () => {
    if (window.scrollY > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <NavBar scrolling={scrolling} />
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <Intro />
        {/* Projects section */}
        <Projects />
        {/* Technoglies section */}
        <Skills />
        {/* About me */}
        <About />
      </main>
      <footer>
        <Contact />
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}
