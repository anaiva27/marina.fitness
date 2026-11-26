import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./RevealPage.css";
import logo from "./img/MarinaLogo2.png";
import logoDark from "./img/MarinaLogo-dark.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { dropDelay, popDelay } from "./animate";
import { useClickOutside } from "./portal/useClickOutside";
import { useMediaQuery } from "./helpers/useMediaQuery";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import Hero from "./Hero";

function Home({ optionsRef, retreatsRef, scrollToSection }) {
	const [collapse, setCollapse] = useState(false);
	const isMobile = useMediaQuery();
	const ref = useRef();
	// Toogle Menu
	const [show, setShow] = useState(false);
	//useClickOutside(ref, show ? show : () => null);

	// fixed Header
	// window.addEventListener("scroll", function () {
	// 	const header = document.querySelector(".header");
	// 	header.classList.toggle("active", window.scrollY > 0);
	// 	setCollapse((prev) =>
	// 		window.scrollY === 0 ? (prev = false) : (prev = true),
	// 	);
	// });

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	useEffect(() => {
		const navItems = document.querySelectorAll(".nav__items");
		const toggleMenu = document.querySelector(".toggle__menu");
		if (collapse) {
			navItems.forEach((item) => {
				item.classList.add("collapsed");
			});
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
		let tl = gsap.timeline();
		tl.from("#slider", { delay: 1, duration: 0.8, xPercent: -100 })
			.to("#logo", { opacity: 1 })
			.to("#slider", { duration: 0.8, xPercent: 100 })
			.to("#logo", {
				opacity: 0,
			})
			.to("#content", { opacity: 1 })
			.to("#wrapper", { height: "unset" });
	});

	return (
		<Wrapper id="wrapper">
			<Slider id="slider"></Slider>
			<Logo
				src={logo}
				alt=""
				id="logo"
			/>
			<Content id="content">
				<div
					className="home"
					id="Home"
				>
					<div className="home__bg">
						<div className="header d__flex align__items__center pxy__20">
							<div className="logo__home">
								<img
									src={logoDark}
									alt=""
								/>
							</div>
							<div className="navigation">
								<ul className="navbar d__flex hide-list-marker">
									<a
										href="#programs"
										className="nav-top-padding"
									>
										<li className="nav__items mx__15 hide-list-marker">
											Programs
										</li>
									</a>
									<a
										href="#reviews"
										className="nav-top-padding"
									>
										<li className="nav__items mx__15 hide-list-marker">
											Reviews
										</li>
									</a>
									<a
										href="#contact"
										className="nav-top-padding"
									>
										<li className="nav__items mx__15 hide-list-marker">
											Contact
										</li>
									</a>
									<a
										href="https://calendly.com/marinafit/30min"
										className="nav-top-padding"
										target="_blank"
										rel="noopener noreferrer"
									>
										<li className="nav__items mx__15 hide-list-marker ghost-button">
											Free Consultation <span className="arrow-link">→</span>
										</li>
									</a>
								</ul>
							</div>
							{/* Toogle Menu */}
							{isMobile && (
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
												fill="#fff"
											/>
										</svg>
									) : (
										<svg
											onClick={() => setShow(!show)}
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="black"
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
							)}

							<div className={`sideNavbar ${show ? "open" : ""}`}>
								<ul className="sidebar d__flex">
									<li className="sideNavbar black mx__15 hide-list-marker">
										<a
											className="black "
											href="https://calendly.com/marinafit/30min"
											target="_blank"
											rel="noopener noreferrer"
										>
											Free Consultation{" "}
											<span className="arrow-link-white">→</span>
										</a>
									</li>

									<br />
									<br />
									<li className="nav__items mx__45 hide-list-marker">
										<a
											href="#Services"
											className="p__white"
										>
											Services
										</a>
									</li>
									<li className="nav__items mx__45 hide-list-marker">
										<a
											href="#Testimonials"
											className="p__white"
										>
											Testimonials
										</a>
									</li>
									<li className="nav__items mx__45 hide-list-marker">
										<a
											href="#Contact"
											className="p__white "
										>
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* HOME CONTENT */}
						{/* <div className="container home">
							<div className="home__content">
								<h2 className="home__text pz__10 mb__25 eyebrow">
									Want to <span className="accent_hero">feel your best</span>{" "}
									again?
								</h2>
								<h1 className="home__text pz__10 bright_hero">
									Move Better <br />
									Get Stronger <br />
									<span className="bright_hero">with Marina</span>
								</h1>

								{isMobile ? (
									<>
										<button
											className="button__primary"
											onClick={() => scrollToSection(optionsRef)}
										>
											Book your Free Consultation
										</button>
										<h2 className="home__text pz__10 mb__25">
											Easy to follow, personalised{" "}
											<span className="accent_hero">
												training program and nutrition guide
											</span>{" "}
											tailored to your goals, needs, and lifestyle.
										</h2>
									</>
								) : (
									<>
										<h2 className="home__text pz__10 mb__25 hero-body">
											Get comprehensive, easy to follow, personalised training
											program and nutrition guide{" "}
											<span className="accent_hero">
												tailored to your goals, needs, and lifestyle.
											</span>
										</h2>
										<button
											className="button__primary"
											onClick={() => scrollToSection(optionsRef)}
										>
											Book your Free Consultation
										</button>
										<h2 className="home__text pz__10 mb__25">
											* Trusted by clients worldwide
										</h2>
									</>
								)}
							</div>
						</div> */}

						<Hero />
					</div>
				</div>
			</Content>
		</Wrapper>
	);
}

export default Home;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: #fff;
	overflow: hidden;
`;
const Logo = styled.img`
	object-fit: cover;
	opacity: 0;
	width: 100%;
	max-width: 300px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	scale: 1;
	margin: auto;
	z-index: 1;
`;
const Slider = styled.div`
	background-color: #000;
	width: 100%;
	display: grid;
	place-items: center;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
`;
const Content = styled.div`
	display: flex;
	width: 100%;
	/* background-color: #000; */
	margin: 0 auto;
	justify-content: center;
	opacity: 0;
	z-index: 2;
	position: relative;
	/* margin-right: 100px; */
	@media (max-width: 1000px) {
		flex-direction: column;
		margin: auto;
	}
`;
