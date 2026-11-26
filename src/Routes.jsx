import { useState } from "react";
import About from "./About";
import styled from "styled-components";
import "./App.css";
import Blog from "./Blog";
import { Certificate } from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Testimonials from "./Testimonials";
import Service from "./Service";
import RetreatSection from "./RetreatSection";
import Compare from "./Compare";
import Marquee from "./Marquee";
import ServicesNew from "./ServicesNew";

export const Routes = () => {
	const [optRef, setOptRef] = useState();
	const [retreatRef, setRetreatRef] = useState();

	const scrollToSection = (ref) => {
		if (!ref) return;
		window.scrollTo({ top: ref.current.offsetTop - 265 });
	};

	return (
		<>
			<Home
				scrollToSection={scrollToSection}
				optionsRef={optRef}
				retreatsRef={retreatRef}
			/>
			<ServicesNew setOptRef={setOptRef} />
			<Marquee setOptRef={setOptRef} />
			<Compare />
			{/* <Service setOptRef={setOptRef} /> */}
			{/* <Testimonials /> */}
			{/* <About /> */}
			{/* <RetreatSection setOptRef={setRetreatRef} /> */}
			<Contact setOptRef={setOptRef} />
			<Certificate />
			<Footer />
		</>
	);
};
