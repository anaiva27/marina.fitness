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
import RetreatSection from "./RetreatSection";

export const Routes = () => {
  const [optRef, setOptRef] = useState();
  const [retreatRef, setRetreatRef] = useState();
  const scrollToSection = (ref) => {
    if (!ref) return;
    window.scrollTo({ top: ref.current.offsetTop });
  };
  return (
    <>
      <Home
        scrollToSection={scrollToSection}
        optRef={optRef}
        retreatsRef={retreatRef}
      />
      <Service setOptRef={setOptRef} />
      <RetreatSection setOptRef={setRetreatRef} />
      <About />
      {/* <About /> */}
      <Testimonials />
      <Contact />
      <Certificate />
      <Footer />
    </>
  );
};
