import Navbar from "./components/Navbar";
import "../src/App.css";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="main">
      <Navbar />
      <section className="hero">
        <Hero />
        <Projects />
        <Technologies />
      </section>
      <Footer />
    </div>
  );
}

export default App;
