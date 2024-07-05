import { useState } from "react";
import About from "./About";
import "./App.css";
import Blog from "./Blog";
import { Certificate } from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Testimonials from "./Testimonials";
import Service from "./Service";
import { RevealPage } from "./RevealPage";

function App() {
  const [optRef, setOptRef] = useState();
  const scrollToSection = () => {
    if (!optRef) return;
    window.scrollTo({ top: optRef.current.offsetTop });
  };
  return (
    <div className="App">
      {/* <RevealPage /> */}
      <Home scrollToSection={scrollToSection} optRef={optRef} />
      <Service setOptRef={setOptRef} />
      <About />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
