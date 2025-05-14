import React, { useRef, useState } from "react";
import "./Service.css";
import heroImg from "./SamadhiRetreat/assets/hero-img.png";
import heroImg2 from "./WellnessRetreat/assets/heroImgCR3.jpg";
import heroImg3 from "./MizataRetreat/assets/heroMizataImg.png";

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
		<div
			className="service component__space"
			id="Retreats"
			ref={retreatsRef}
		>
			<div className="heading">
				<br />
				<h1 className="motto__heading center">
					Check out my past{" "}
					<div
						className="bright"
						style={{ fontSize: 45 }}
					>
						retreats
					</div>
				</h1>
				<h2 className="motto__heading center">And stay tuned for more!</h2>
			</div>

			<div className="container ">
				<div className="row-service">
					<div
						className="col__2"
						onClick={() => window.open("/mizata-retreat")}
					>
						<img
							src={heroImg3}
							alt="Marina fitness trainer doing exercises"
							className="retreat"
						/>
					</div>
				</div>

				<div className="row-service">
					<div
						className="col__2 "
						onClick={() => window.open("/retreat")}
					>
						<img
							src={heroImg}
							alt="Marina fitness trainer doing exercises"
							className="retreat"
						/>
					</div>
				</div>

				{/* <div className="row-service">
          <div
            className="col__2 "
            onClick={() => window.open("/wellness-retreat")}
          >
            <img
              src={heroImg2}
              alt="Marina fitness trainer doing exercises"
              className="retreat"
            />
          </div>
        </div> */}
			</div>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				{parse(content || "")}
			</Modal>
		</div>
	);
}

export default RetreatSection;
