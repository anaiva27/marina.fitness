import { gsap } from "gsap";
import "./assets/styles/animate.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import img1 from "./assets/img1-1.jpg";
import img2 from "./assets/img2-2.jpg";
import img3 from "./assets/img3-1.jpg";
import img4 from "./assets/img4-1.jpg";
import img5 from "./assets/img5-2.jpg";
import logo from "./assets/logo.png";
import menu from "./assets/menu.png";
import headline from "./assets/headline.png";

export const Hero = () => {
	const tl = useRef();
	useGSAP(() => {
		gsap.to(".heroSR", {
			scale: 1.3,
			duration: 3,
			ease: "power3.inOut",
			delay: 0.3,
		});
		// gsap.to(".hero", {
		// 	scale: 1,
		// 	duration: 3,
		// 	ease: "power3.inOut",
		// 	stagger: 0.25,
		// 	delay: 2,
		// });
		tl.current = gsap
			.timeline()
			.to(".hero-imgs > img", {
				clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
				duration: 1.5,
				ease: "power4.inOut",
				stagger: 0.3,
				delay: 0.3,
			})
			.to(".heroSR", {
				scale: 1,
				duration: 2.4,
				ease: "power4.inOut",
			})
			.to(".stagger", {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.inOut",
				stagger: 0.2,
				delay: -1.25,
			});
		// .to(".hero-imgs > img", {
		// 	clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
		// 	duration: 1.5,
		// 	ease: "power4.inOut",
		// 	stagger: 0.25,
		// })
		// .to(".hero", {
		// 	display: "none",
		// })
		// .to(".website-content", {
		// 	display: "block",
		// });
	});

	return (
		<div className="heroSR">
			<div className="hero-imgs">
				<img
					src={img1}
					alt=""
					className="animate-img"
				/>
				<img
					src={img2}
					alt=""
					className="animate-img"
				/>
				<img
					src={img3}
					alt=""
					className="animate-img"
				/>
				<img
					src={img4}
					alt=""
					className="animate-img"
				/>
				<img
					src={img5}
					alt=""
					className="animate-img animate-img2"
				/>
			</div>
			{/* <div className="website-content"> */}
			<img
				src={logo}
				alt=""
				className="logoSR stagger"
			/>
			<img
				src={menu}
				alt=""
				className="menuSR stagger"
			/>
			<img
				src={headline}
				alt=""
				className="headlineSR stagger"
			/>
			{/* </div>  */}
		</div>
	);
};
