import React, { useRef, useState } from "react";
import "./Service.css";
import img4 from "./img/package-img4.jpg";
import img3 from "./img/package-img3.jpg";
import img1 from "./img/package-img1.jpg";
import img2 from "./img/package-img2.jpg";
import { Modal } from "./portal";
import parse from "html-react-parser";

const contentGroup = [
  `
  <h1 className="bright" style={{ fontSize: 25, marginBottom: 20 }}>
          Group Mobility Classes
        </h1>
        <strong>
          In this class we will explore a movement enhanced mobility system that
          develops maximum body control, flexibility,and usable range of motion.
          Imagine an exercise class that combines:
        </strong>
        <br />
        - Flexibility
        <br />
        - Control
        <br />
        - Strength
        <br />
        - Joint health
        <br />
        - Coordination and kinesthetic awareness
        <br />
        <br />
        All in one class, sprinkled with some education on your specific body
        and human movement in general!
        <br />
        <br />
        Class is designed for all fitness levels, whether you are an athlete, a
        yogi, a runner, recovering from injury, or elderly person who wants to
        improve quality of life or a fitness professional who wants to learn
        more about movement and injury prevention.
        <br />
        <br />
        <h3>To sign up purchase 5 pack:</h3>
        <a
          href="https://buy.stripe.com/00g7w33cycgJ5yM3cm"
          className="underline bright"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <button
            className="about btn pointer service"
          >
            JOIN HERE
          </button>
        </a>
        And join private WhatsApp (PLACE TO CONNECT GROUP) with classes schedule
        and zoom info
        <br />
        <br />
  `,
  `
  <h1 className="bright" style={{ fontSize: 25, marginBottom: 20 }}>
  Online One on One Training</h1>      
        <br />
        - Private online zoom personal training
        <br />
        - Individualized training plan
        <br />
        - Customized nutrition guide
        <br />
        - New habits cultivation
        <br />
        - Access to the app
        <br />
        - Accountability from your coach
        <br />
        <br />
        <a
                  href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="about btn pointer">
                    Coaching Application
                  </button>
                </a>
        <br />
        <br />
  `,
  `
  <h1 className="bright" style={{ fontSize: 25, marginBottom: 20 }}>
  Personalized 360 Coaching</h1>      
        <br />
        - Individualized training plan
        <br />
        - Customized nutrition guide
        <br />
        - New habits cultivation
        <br />
        - Access to the app
        <br />
        - Accountability from your coach
        <br />
        <br />
        <a
                  href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="about btn pointer">
                    Coaching Application
                  </button>
                </a>
        <br />
        <br />
  `,
];

function Service({ setOptRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const openModal = (val, num) => {
    setIsOpen(val);
    setContent(contentGroup[num]);
  };
  const optionsRef = useRef();
  if (optionsRef) {
    setOptRef(optionsRef);
  }

  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading" ref={optionsRef}>
          All set to start the{" "}
          <div className="bright" style={{ fontSize: 60 }}>
            good
          </div>{" "}
          fight?
        </h1>
        <p className="heading p__color">
          Imagine stepping into a version of your life where chronic pain
          doesn't dictate your days.
          <br />
          <br />
          Now is your time to feel empowered and educated about movement,
          nutrition and your body.
        </p>
      </div>

      <div className="container service">
        <div className="row-service">
          <div className="col__2 service" onClick={() => openModal(true, 2)}>
            <img
              src={img1}
              alt="Marina fitness trainer doing exercises"
              className="bg__absolute cover"
            />
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Personalized 360 Coaching</h1>
                <p className="p service__text p__color">
                  - Individualized training plan <br />
                  - Customized nutrition guide <br />
                  - New habits cultivation <br />
                  - Access to the app <br />- Accountability from your coach
                </p>
              </div>
            </div>
          </div>

          <div className="col__2 service" onClick={() => openModal(true, 1)}>
            <img
              src={img2}
              alt="Marina fitness trainer doing exercises"
              className="bg__absolute cover"
            />
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Online One on One Training</h1>
                <p className="p service__text p__color">
                  - Private online zoom personal training
                  <br />
                  - Individualized training plan <br /> - Customized nutrition
                  guide <br />
                  - New habits cultivation <br />
                  - Access to the app <br />- Accountability from your coach
                </p>
              </div>
            </div>
          </div>
          <div className="col__2 service" onClick={() => openModal(true, 0)}>
            <img
              src={img4}
              alt="Marina fitness trainer doing exercises"
              className="bg__absolute cover"
            />
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Group Mobility Classes</h1>
                <p className="p service__text p__color">
                  - Flexibility
                  <br />
                  - Control <br /> - Strength
                  <br />
                  - Joint Health <br />
                  - Coordination and kinesthetic awareness <br />- All in one
                  class, sprinkled with some education on your specific body and
                  human movement in general.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col__2 service">
            <img
              src={img2}
              alt="Marina fitness trainer doing exercises"
              className="bg__absolute contain"
            />
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobility Package</h1>
                <p className="p service__text p__color">
                  Private mobility and functional yoga sessions
                </p>
              </div>
            </div>
          </div>

          <div className="col__2 service">
            <img
              src={img4}
              alt="Marina fitness trainer doing exercises"
              className="bg__absolute cover"
            />
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobility Group Classes</h1>
                <p className="p service__text p__color">
                  Private mobility and functional yoga sessions
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Marketing & Reporting</h1>
                <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p>
              </div>
            </div>
          </div> */}

        {/* <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p>
              </div>
            </div>
          </div> */}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {parse(content || "")}
      </Modal>
    </div>
  );
}

export default Service;
