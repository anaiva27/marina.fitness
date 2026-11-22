import { useEffect, useRef } from "react";
import "./Marquee.css";

// Placeholder content: replace with your real testimonials.
const row1 = [
	{
		title: "Short headline quote",
		text: "A longer testimonial goes here. Two or three sentences about what changed after working together.",
		name: "Name Surname",
		role: "Customer Success Manager",
		rating: 5,
	},
	{
		text: "Since switching, our customer satisfaction score has risen and our response time dropped from hours to minutes.",
		name: "Name Surname",
		role: "Head of Customer Service, Company",
	},
	{
		text: "It's almost like all the sites I visit use it. I instantly associate it with great customer service.",
		name: "Name Surname",
		role: "@handle",
	},
	{
		text: "The ability to see the entire team's workflow and collaborate behind the scenes creates a better experience.",
		name: "Name Surname",
		role: "Enterprise (>1000 emp.)",
		rating: 5,
	},
];

const row2 = [
	{
		title: "Growing as you scale",
		text: "We have a great relationship with the team. They listen, they deliver, and they help us get the best out of the product.",
		name: "Name Surname",
		role: "Sr. Director of Support Operations",
		rating: 5,
	},
	{
		text: "What used to be a disjointed customer experience is now unified, consistent, and personalized.",
		name: "Name Surname",
		role: "VP, Global Customer Support",
	},
	{
		text: "Without it, we would not be able to support our customers in real time with the efficiency that we do now.",
		name: "Name Surname",
		role: "Auto, 51-200 emp.",
		rating: 5,
	},
	{
		text: "It can be a challenge to scale customer support. This helped us deliver fast response times and stay competitive.",
		name: "Company Name",
		role: "@company",
	},
];

function Card({ title, text, name, role, rating, avatar }) {
	const initials = name
		.split(" ")
		.map((w) => w[0])
		.slice(0, 2)
		.join("");

	return (
		<article className="card">
			<div className="card__body">
				{title && <p className="card__title">“{title}”</p>}
				<p className="card__text">{text}</p>
			</div>
			<footer className="card__author">
				{avatar ? (
					<img
						className="card__avatar"
						src={avatar}
						alt=""
					/>
				) : (
					<span className="card__avatar card__avatar--initials">
						{initials}
					</span>
				)}
				<div>
					<p className="card__name">{name}</p>
					<p className="card__role">{role}</p>
					{rating && (
						<p
							className="card__stars"
							aria-label={`${rating} out of 5 stars`}
						>
							{"★".repeat(rating)}
						</p>
					)}
				</div>
			</footer>
		</article>
	);
}

const SPEED = 40; // px per second

function MarqueeRow({ items, reverse = false }) {
	const rowRef = useRef(null);
	const trackRef = useRef(null);

	useEffect(() => {
		const row = rowRef.current;
		const track = trackRef.current;
		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const dir = reverse ? 1 : -1;

		let x = 0;
		let dragging = false;
		let lastX = 0;
		let lastTime = performance.now();
		let frame;

		const wrap = () => {
			const half = track.scrollWidth / 2; // list is rendered twice
			x %= half;
			if (x > 0) x -= half;
		};

		const tick = (now) => {
			const dt = (now - lastTime) / 1000;
			lastTime = now;
			if (!dragging && !reduceMotion) x += dir * SPEED * dt;
			wrap();
			track.style.transform = `translate3d(${x}px, 0, 0)`;
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);

		const onDown = (e) => {
			dragging = true;
			lastX = e.clientX;
			row.setPointerCapture(e.pointerId);
			row.classList.add("is-dragging");
		};
		const onMove = (e) => {
			if (!dragging) return;
			x += e.clientX - lastX;
			lastX = e.clientX;
		};
		const onUp = () => {
			dragging = false;
			row.classList.remove("is-dragging");
		};

		row.addEventListener("pointerdown", onDown);
		row.addEventListener("pointermove", onMove);
		row.addEventListener("pointerup", onUp);
		row.addEventListener("pointercancel", onUp);

		return () => {
			cancelAnimationFrame(frame);
			row.removeEventListener("pointerdown", onDown);
			row.removeEventListener("pointermove", onMove);
			row.removeEventListener("pointerup", onUp);
			row.removeEventListener("pointercancel", onUp);
		};
	}, [reverse]);

	// Render the list twice so the loop is seamless.
	return (
		<div
			className="marquee__row"
			ref={rowRef}
		>
			<div
				className="marquee__track"
				ref={trackRef}
			>
				{[0, 1].map((copy) => (
					<div
						className="marquee__group"
						key={copy}
						aria-hidden={copy === 1}
					>
						{items.map((item, i) => (
							<Card
								key={`${copy}-${i}`}
								{...item}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default function Marquee() {
	return (
		<>
			<div className="compare__container">
				<h1 className="compare__heading">
					Marina is Here to Help You <br />
					Overcome Your Challenges.
				</h1>
				<p
					className="subheading_text"
					style={{ textAlign: "center", margin: "auto" }}
				>
					See why many others trust Marina with their joints and overall
					mobility.
				</p>
			</div>
			<section className="marquee">
				<MarqueeRow items={row1} />
				<MarqueeRow
					items={row2}
					reverse
				/>
			</section>
		</>
	);
}
