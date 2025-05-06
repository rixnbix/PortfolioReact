import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">
        <Projects />
      </section>

      <section>
        <Parallax type="about" />
      </section>

      <section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
