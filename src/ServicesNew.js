import React, { useRef, useState } from "react";
import "./ServiceNew.css";

function ServicesNew({ setOptRef }) {
	const optionsRef = useRef();
	if (optionsRef) {
		setOptRef(optionsRef);
	}

	return (
		<div className="about component__space">
			<div className="container services-new">
				<div className="services-header-container">
					<h1
						className="compare__heading"
						ref={optionsRef}
					>
						Strength training and <br />
						mobility coaching
					</h1>{" "}
					<p className="subheading_text legend">
						Get comprehensive, easy to follow, personalized training program and{" "}
						<br />
						nutrition guide{" "}
						<strong>tailored to your goals, needs, and lifestyle.</strong>
					</p>
					<a
						href="https://calendly.com/marinafit/30min"
						className="cta-services"
					>
						Free Consultation{" "}
						<span
							className="inline-green-arrow"
							aria-hidden="true"
						>
							→
						</span>
					</a>
				</div>{" "}
				<br /> <br />
				<div className="list-centered">
					{/* <p
						className="mobile-width p__accent"
						ref={optionsRef}
					>
						These sessions are designed to help you:
					</p> */}
					<div className="service-grid">
						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2.1rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M9 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 4.6C9 4.03995 9 3.75992 9.10899 3.54601C9.20487 3.35785 9.35785 3.20487 9.54601 3.10899C9.75992 3 10.0399 3 10.6 3L13.4 3C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V21M15 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H15"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								Comprehensive{" "}
								<span className="services-inline">
									functional fitness program
								</span>{" "}
								(strength + mobility) on Trainerize app (included).
								<br />
								<br />
								Updated every 4 weeks.
							</p>
						</div>
						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2.2rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M10 8.50224C10.1762 8.00136 10.524 7.579 10.9817 7.30998C11.4395 7.04095 11.9777 6.9426 12.501 7.03237C13.0243 7.12213 13.499 7.39421 13.8409 7.80041C14.1829 8.20661 14.37 8.72072 14.3692 9.25168C14.3692 10.7506 12.1209 11.5 12.1209 11.5M12.1499 14.5H12.1599M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								Check-ins to answer questions, review food logs, or review
								filmed exercises{" "}
								<span className="services-inline">to refine technique.</span>
								<br />
								<br />
								Monthly via Zoom.
							</p>
						</div>

						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2.2rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								<span className="services-inline">Movement assessments</span>,
								<br />
								because assessment never really stops.
								<br />
								<br />
								Monthly via Zoom.
							</p>
						</div>
						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M14 10C14.9319 10 15.3978 10 15.7654 9.84776C16.2554 9.64477 16.6448 9.25542 16.8478 8.76537C17 8.39782 17 7.93188 17 7C17 6.06812 17 5.60218 16.8478 5.23463C16.6448 4.74458 16.2554 4.35523 15.7654 4.15224C15.3978 4 14.9319 4 14 4L6 4C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10L14 10Z"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
								<path
									d={
										"M18 20C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20L18 20Z"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								<span className="services-inline">Habit-building</span> and
								tracking support within the app.
							</p>
							<br />
						</div>
						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.157 5.70403 19.0391 5.9 20M2 20H2.01M14 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V8"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								<span className="services-inline">Access to weekly</span> live
								Zoom classes (yoga and mobility).
							</p>
							<br />
							{/* <span className="accent_hero">Create consistency</span>  */}
						</div>

						<div className="service-grid-item">
							<svg
								xmlns={"http://www.w3.org/2000/svg"}
								width={"2.2rem"}
								height={"3rem"}
								viewBox={"0 0 24 24"}
								fill={"none"}
								aria-hidden={"true"}
								focusable={"false"}
							>
								<path
									d={
										"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z"
									}
									stroke="#368777"
									strokeWidth={"2"}
									strokeLinecap={"round"}
									strokeLinejoin={"round"}
								/>
							</svg>
							<p>
								<span className="services-inline">Daily accountability</span>{" "}
								and support from your coach.
							</p>
							<br />
						</div>
					</div>

					<br />
					<br />
					<p className="subheading_text legend">
						Do you want to have my personal attention to each of your sessions?{" "}
						<br />
						<strong>Add-ons:</strong> Let me guide you via Live Zoom strength or
						mobility sessions.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesNew;
