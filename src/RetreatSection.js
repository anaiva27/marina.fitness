import React, { useRef, useState } from "react";
import "./Service.css";
import heroImg from "./SamadhiRetreat/assets/hero-img.png";

import img4 from "./img/package-img4.jpg";
import img3 from "./img/package-img3.jpg";
import img1 from "./img/package-img1.jpg";
import img2 from "./img/package-img2.jpg";
import { Modal } from "./portal";
import parse from "html-react-parser";

function RetreatSection({ setOptRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  // const openModal = (val, num) => {
  //   setIsOpen(val);
  //   setContent(contentGroup[num]);
  // };
  const retreatsRef = useRef();
  if (retreatsRef) {
    setOptRef(retreatsRef);
  }

  return (
    <div className="service component__space" id="Retreats" ref={retreatsRef}>
      <div className="heading">
        <br />
        <h1 className="motto__heading center">
          Check out my upcoming{" "}
          <div className="bright" style={{ fontSize: 45 }}>
            retreats
          </div>
        </h1>
      </div>

      <div className="container service">
        <div className="row-service">
          <div
            className="col__2 service"
            onClick={() => window.open("/retreat")}
          >
            <img
              src={heroImg}
              alt="Marina fitness trainer doing exercises"
              className="retreat"
            />
            <div className="retreat__box pointer">
              {/* <div className="icon">
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
              </div> */}
              {/* <div className="service__meta">
                <h1 className="service__text">Personalized 360 Coaching</h1>
                <p className="p service__text p__color">
                  - Individualized training plan <br />
                  - Customized nutrition guide <br />
                  - New habits cultivation <br />
                  - Access to the app <br />- Accountability from your coach
                </p>
              </div> */}
            </div>
          </div>

          {/* <div
            className="col__2 service"
            //onClick={() => openModal(true, 1)}
          >
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
          <div
            className="col__2 service"
            //onClick={() => openModal(true, 0)}
          >
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
          </div> */}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {parse(content || "")}
      </Modal>
    </div>
  );
}

export default RetreatSection;
