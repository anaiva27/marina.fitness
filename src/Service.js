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
  <h1 className="bright heading__services">
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
          <a href="https://chat.whatsapp.com/BH1wTrbdkFf1wwqU1ovviY" target="_blank" rel="noopener noreferrer">And <span className="inline__link">JOIN PRIVATE WhatsApp</span></a> (place to connect group) with classes schedule and zoom info
        <br />
        <br />
  `,
	`
  <h1 className="bright heading__services">
  Private One-on-One Coaching</h1>      
       
        <br />
    <p className="service-list-item p__color">This is my most personalized coaching experience for individuals serious about transforming their body, movement, habits, and mindset.

    </p>
    <br />
    <p className="service-list-item p__color">    Through private sessions and individualized programming, we focus on building sustainable strength, mobility, energy, and confidence — while creating habits that support long-term results.
    </p>
    <br />
    <p className="service-list-item p__color">To ensure consistency, commitment, and measurable progress, coaching requires:
    <br />-Minimum 2 sessions per week
    <br />-Minimum 3-month commitment
    </p>

        <br />
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
  `,
	`
  <h1 className="bright heading__services" >
  The 7-Day Hip Mobility Reset</h1>  
    <br />
    <p className="service-list-item p__color">A Guided Program to Help You Move Freely Again.</p>
      <br /><br />

      <p className="service-list-item p__color">This 7-day mobility experience is designed to help you release tight hips, improve movement quality, and reconnect with your body through intentional, progressive mobility training.
      </p>
       <br /> <br />

      <p className="service-list-item p__color">
      Every class builds on the previous one, gradually preparing your joints, muscles, and connective tissues for deeper mobility, better control, and long-term results.
      </p>
        <br />
        <br />
        <br />
        <a
                  href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="about btn pointer">
                    PURCHASE
                  </button>
                </a>
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
		<div
			className="service component__space"
			id="Services"
		>
			<div className="services_content">
				<br />
				<h1 className="motto__heading  intro-cta">
					Kick-Start Your Journey for Free
				</h1>
				<p
					className=" p__color"
					ref={optionsRef}
				>
					{/* Imagine stepping into a version of your life where chronic pain
          doesn't dictate your days. */}
					{/* Now is your time to feel empowered and educated about movement,
					nutrition and your body. */}
					Explore my free classes on my{" "}
					<a
						href="https://www.youtube.com/@marinabogatkina7444"
						target="_blank"
						rel="noopener noreferrer"
						className="link-YT"
					>
						YouTube Channel
					</a>{" "}
					with new mobility, strength, yoga, and wellness content added weekly.
				</p>
				<p
					className=" p__color"
					ref={optionsRef}
				>
					These sessions are designed to help you:
				</p>
				<ul className=" p__color service-list-item">
					<li>
						<strong>Improve</strong> mobility and flexibility
					</li>
					<li>
						<strong>Build</strong> strength and body awareness
					</li>
					<li>
						<strong>Reduce</strong> stiffness and tension
					</li>
					<li>
						<strong>Create consistency</strong> in your movement practice
					</li>
				</ul>
				<p className=" p__color">
					Experience my coaching style and let's start working together more
					closely. Enjoy free yoga, mobility and Myofascial Release classes.
				</p>
			</div>

			<div className="container service">
				<div className="row-service">
					<div
						className="col__2 service"
						onClick={() => openModal(true, 2)}
					>
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
								<h1 className="service__text">The 7-Day Hip Mobility Reset</h1>
								<br />
								<h3 className="service__text white underline">Ideal for:</h3>
								<ul className="service-list-item p__color white ">
									<li>Tight hips and lower back stiffness</li>
									<li>Beginners and active individuals alike</li>
									<li>
										Busy individuals who don’t have time for long classes but
										still desire good results
									</li>
								</ul>
								<br />
								<h3 className="service__text white underline">
									What's Included:
								</h3>
								<ul className="service-list-item p__color white">
									<li>7 guided mobility classes</li>
									<li>Day 1-6 sessions: 25 minutes each</li>
									<li>Day 7: full 60-minute integration flow</li>
									<li>
										Progressive structure for safe, effective mobility gains
									</li>
									<li>Lifetime access to the program</li>
								</ul>
								<button className="about btn pointer">GET THE PROGRAM</button>
							</div>
						</div>
					</div>

					<div
						className="col__2 service"
						onClick={() => openModal(true, 1)}
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
									<line
										x1="2"
										y1="20"
										x2="2"
										y2="20"
									></line>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">Private One-on-One Coaching</h1>
								<br />
								<h3 className="service__text white ">
									High-Level Coaching for Lasting Transformation.
								</h3>
								<h3 className="service__text white underline">
									Ideal for those looking for:
								</h3>
								<ul className="service-list-item p__color white ">
									<li>Personalized attention</li>
									<li>Structure and accountability</li>
									<li>Long-term lifestyle transformation</li>
								</ul>
								<br />
								<h3 className="service__text white underline">
									What's Included:
								</h3>
								<ul className="service-list-item p__color white">
									<li>
										Fully individualized mobility + strength training program
									</li>
									<li>Private coaching sessions (Zoom or in person)</li>
									<li>Customized nutrition guidance</li>
									<li>Habit-building and lifestyle support</li>
									<li>Access to coaching app</li>
									<li>Direct accountability and ongoing support</li>
									<li>Access to live weekend mobility classes</li>
								</ul>
								<button className="about btn pointer">GET THE PROGRAM</button>
							</div>
						</div>
					</div>
					{/* <div
						className="col__2 service"
						onClick={() => openModal(true, 0)}
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
									<line
										x1="2"
										y1="20"
										x2="2"
										y2="20"
									></line>
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
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				{parse(content || "")}
			</Modal>
		</div>
	);
}

export default Service;
