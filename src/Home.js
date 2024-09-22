import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./RevealPage.css";
import logo from "./img/MarinaLogo2.png";
import heroBg from "./img/hero-bg.jpg";
import logoSmall from "./img/logo-new-White-small.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { dropDelay, popDelay } from "./animate";
import { useClickOutside } from "./portal/useClickOutside";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home({ optionsRef, retreatsRef, scrollToSection }) {
  const [collapse, setCollapse] = useState(false);
  const ref = useRef();
  // Toogle Menu
  const [show, setShow] = useState(false);
  //useClickOutside(ref, show ? show : () => null);

  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
    setCollapse((prev) =>
      window.scrollY === 0 ? (prev = false) : (prev = true),
    );
  });

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav__items");
    const toggleMenu = document.querySelector(".toggle__menu");
    if (collapse) {
      navItems.forEach((item) => {
        item.classList.add("collapsed");
      });
      console.log("t", toggleMenu);
      toggleMenu?.classList?.add("collapsed-toggle");
    } else if (!collapse) {
      navItems.forEach((item) => {
        item.classList.remove("collapsed");
      });
      toggleMenu?.classList?.remove("collapsed-toggle");
    }
  }, [collapse]);

  const container = useRef();
  const tl = useRef();

  useGSAP(() => {
    gsap.to(".line", {
      height: "100%",
      duration: 2,
      delay: 1,
    });
    gsap.to(".line", { opacity: 0, display: "none", delay: 2 });
    gsap.to(".loader", {
      backgroundColor: "#ffffff",
      delay: 2,
    });
    gsap.to(".loader", {
      opacity: 0,
      display: "none",
      delay: 2,
    });
  });

  return (
    <div className="home" id="Home">
      <div className="loader">
        <div className="line">
          {/* <div className="marquee">
          <div className="marquee-container"></div>
        </div> */}
        </div>
      </div>
      <div className="home__bg">
        {/* <img
          src={heroBg}
          alt="Marina fitness trainer doing exercises"
          className="bg__absolute"
        /> */}
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation">
            <ul className="navbar d__flex">
              <a href="#Retreats">
                <li className="nav__items mx__15">Retreats</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Experience">
                <li className="nav__items mx__15">Experience</li>
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
            {show ? (
              <svg
                onClick={() => setShow(!show)}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="#ffffff"
                />
              </svg>
            ) : (
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
            )}
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
                    href="https://www.thorne.com/u/AM1155640?affid=AM1155640&utm_campaign=Affiliate%20Programs&utm_medium=Ambassador&utm_source=Custom%20Link&utm_content=Marina%20Bogatkina%20-%20Dispensary"
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
              <motion.h2
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10 mb__25 bright"
              >
                Reinvent yourself one rep at a time
              </motion.h2>
              <motion.h1
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10"
              >
                TAKE CHARGE of
                <br />
                your WELLNESS
              </motion.h1>

              <motion.h3
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__10"
              >
                Work with me to improve your mobility, <br />
                optimize nutrition and build strength
              </motion.h3>
              {/* <motion.h2
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="home__text pz__5"
              >
                optimize nutrition and build strength
              </motion.h2> */}
              {/* <h3 className="home__text sweet pz__10">JS Developer.</h3>
              <h4 className="home__text pz__10">based in USA.</h4> */}
              <motion.button
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="button__primary"
                onClick={() => scrollToSection(optionsRef)}
              >
                VIEW COACHING OPTIONS
              </motion.button>
              <motion.button
                variants={dropDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="button__primary"
                onClick={() => scrollToSection(retreatsRef)}
              >
                CHECK OUT MY RETREATS
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
