import React, { useLayoutEffect } from "react";
import logo from "./img/MarinaLogo2.png";
import "./RevealPage.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const RevealPage = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".clip-center", {
          height: "100%",
          duration: 2,
          delay: 1,
        })
        .to(".clip-top", {
          opacity: 0,
          display: "none",
        });
    },
    { scope: container },
  );

  //   useLayoutEffect(() => {
  //     reveal();
  //   }, []);
  //   const reveal = () => {
  //     const tl = gsap.timeline({
  //       onComplete: () => {
  //         console.log("complete");
  //       },
  //     });
  //     tl.duration(".clip-center", {
  //       delay: 1,
  //       height: "100vh",
  //       ease: "power4.inOut",
  //       y: 0,
  //     });
  //     tl.duration(".clip-top", {
  //       delay: 1,
  //       opacity: 0,
  //       display: "none",
  //     });
  //   };
  return (
    <div className="loader" ref={container}>
      <div className="loader-clip clip-top">
        <div className="marquee">
          <div className="marquee-container"></div>
        </div>
      </div>
      <div className="loader-clip clip-bottom">
        <div className="marquee">
          <div className="marquee-container"></div>
        </div>
      </div>
      <div className="loader-clip clip-center">
        <div className="marquee">
          <div className="marquee-container">
            <img className="logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
