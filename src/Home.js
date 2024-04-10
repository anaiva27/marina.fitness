import React, { useRef, useState } from "react";
import "./Home.css";
import logo from "./img/logo-new-White-c1.png";
import heroBg from "./img/hero-bg.jpg";
import logoSmall from "./img/logo-new-White-crop-Marina.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { dropDelay, popDelay } from "./animate";

function Home({ optionsRef, scrollToSection }) {
  const [collapse, setCollapse] = useState(false);

  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
    console.log("window.scrollY", window.scrollY);
    setCollapse((prev) =>
      window.scrollY === 0 ? (prev = false) : (prev = true)
    );
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        {/* <img
          src={heroBg}
          alt="Marina fitness trainer doing exercises"
          className="bg__absolute"
        /> */}
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={collapse ? logoSmall : logo} alt="" />
          </div>
          <div className="navigation">
            <ul className="navbar d__flex">
              <a href="#Experience">
                <li className="nav__items mx__15">Experience</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Testimonials">
                <li className="nav__items mx__15">Testimonials</li>
              </a>
              {/* <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a> */}
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar black">
                  <a
                    className="black underline"
                    href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                    target="_blank"
                    and
                    rel="noopener noreferrer"
                  >
                    Coaching Application
                  </a>
                </li>
                <br />
                <br />
                <li className="sideNavbar black">
                  <p className="black">
                    Supplements from trusted sources, that I personally use:
                  </p>
                </li>
                <li className="sideNavbar">
                  <a
                    href="https://www.ryzesuperfoods.com"
                    className="bright underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ryzesuperfoods.com
                  </a>
                  <p className="black">
                    <br />
                    USE CODE MARINABOGATKINA for 15% discount
                  </p>
                </li>
                <br />
                <li className="sideNavbar">
                  <a
                    href="https://promixnutrition.com"
                    className=" underline bright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Promixnutrition.com
                  </a>
                  <p className="black">
                    <br />
                    USE CODE MARINABOGATKINA for 20% discount
                  </p>
                </li>
                <br />
                <li className="sideNavbar">
                  <a
                    href="https://s.thorne.com/ZY6dX"
                    className="bright underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thorne.com
                  </a>
                  <p className="black">
                    <br />
                    Use my link to get 15% off
                  </p>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container home">
          <div className="home__content">
            <div className="home__meta">
              <motion.h1
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10"
                style={{ scaleY: 1.3 }}
              >
                TAKE CHARGE of your WELLNESS
              </motion.h1>
              <motion.h1
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10 mb__25 bright"
              >
                Reinvent yourself one rep at a time
              </motion.h1>
              <motion.h2
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10"
              >
                Work with me to improve your mobility,
              </motion.h2>
              <motion.h2
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__5"
              >
                optimize nutrition and build strength
              </motion.h2>
              {/* <h3 className="home__text sweet pz__10">JS Developer.</h3>
              <h4 className="home__text pz__10">based in USA.</h4> */}
              <motion.button
                variants={popDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="button__primary"
                onClick={() => scrollToSection()}
              >
                VIEW COACHING OPTIONS
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
