import React, { useRef, useState } from "react";
import "./Service.css";
import retreatImg1 from "./SamadhiRetreat/assets/retreat-img1.jpg";
import retreatImg2 from "./SamadhiRetreat/assets/retreat-img2.png";
import retreatImg3 from "./SamadhiRetreat/assets/retreat-img1.png";
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
					Check out my{" "}
					<div
						className="bright"
						style={{ fontSize: 45 }}
					>
						wellness retreats
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
							src={retreatImg3}
							alt="Marina fitness trainer doing exercises"
							className="retreat"
						/>
					</div>

					<div
						className="col__2 "
						onClick={() => window.open("/retreat")}
					>
						<img
							src={retreatImg1}
							alt="Marina fitness trainer doing exercises"
							className="retreat"
						/>
					</div>
					<div
						className="col__2 "
						onClick={() => window.open("https://www.samadhi-sistarhood.com")}
					>
						<img
							src={retreatImg2}
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
