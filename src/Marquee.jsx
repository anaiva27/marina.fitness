import { useEffect, useRef } from "react";
import "./Marquee.css";

// Placeholder content: replace with your real testimonials.
const row1 = [
	{
		title: "Total body care",
		text: "Marina is a knowledgeable and intuitive fitness professional. Her workouts are about total body care through breath, mobility, balance and strength. Marina brings her positive energy to every workout. Her zoom classes saved me during Covid lockdown. She is amazing!",
		name: "Liz Nally",
		role: "Ocean View, DE",
	},
	{
		title: "Always feel good after our sessions",
		text: "Marina is inspirational, extremely well versed in different ways to effectively and safely work your body. Never boring work out! Always feel good after our sessions. Highly recommended!",
		name: "Lugene Nighly",
		role: "Bethany Beach, DE",
	},
	{
		title: "Enthusiasm, energy, and humor",
		text: "I met Marina online and was immediately impressed by her enthusiasm, energy level, and sense of humor. If you looking for a good coach for (e.x. mobility, strength, nutrition, transformation and mindset) don’t hesitate work with Marina. If you want to finally get on track with your health and fitness, or feel younger, look better, or extend your life, I would recommend you talk to Marina today, and start working with her this week!",
		name: "Brian Carter",
		role: "Charleston, SC",
	},
	{
		title: "Game Changer for Your Fitness Journey!",
		text: "I've had the privilege of working with Marina and I couldn't be happier with the results. Marinas knowledge, dedication, and passion for fitness are evident in every session. She has a deep understanding of human anatomy which allows her to tailor each workout to my specific needs and goals. Her positive energy and enthusiasm are contagious, making each workout session enjoyable and rewarding while also having fun in the process.",
		name: "Melissa Valenzuela",
		role: "Miami, FL",
		rating: 5,
	},
	{
		title: "Strength and stamina at its best",
		text: "Marina is inspiring and very accomplished teacher because she is always searching for self improvements! You will have fun with her easy going ways! I have been practicing yoga under Marina’s guidance for many years and my strength and stamina is at its best!",
		name: "Ginny Roberts",
		role: "Ocean View, DE",
	},
	{
		title: "Always very professional and detail oriented",
		text: "My husband and I worked with Marina as a personal trainer for 2 years in person and now almost a year through zoom. She was always very professional and detail oriented. Never did we do an exercise with the wrong posture or position, and I think it’s really important especially for us elderly people. She is a gem!",
		name: "Karen and Rod",
		role: "Fenwick Island, DE",
	},
];

const row2 = [
	{
		title: "Real, lasting results",
		text: "Marina is a phenomenal trainer with comprehensive knowledge of resistance training and nutrition to fit her client’s individual needs! In 11 months of working together, not only I dropped pounds, gained muscles, developed confidence, but actually grew to love exercise. She is encouraging, patient and dedicated to help her clients achieve real lasting results! Highly, highly recommended!",
		name: "Kim Wade",
		role: "Bethany Beach, DE",
	},
	{
		title: "Challenging and creative",
		text: "Marina always displays welcoming energy! The classes are both challenging and creative.",
		name: "Caitlin Owes",
		role: "Ocean View, DE",
	},
	{
		title: "Extremely knowledgeable about the body",
		text: "I love training with Marina! She is extremely knowledgeable about the body and ensures both a safe and effective training session. I learned how to honor the body and push it at the same time! Marina is amazing!",
		name: "Allison P",
		role: "Ocean View, DE",
	},
	{
		title: "More flexibility, less weight, more strength",
		text: "I had the privilege of having Marina as my personal trainer for over two years! Her ability to custom fit my training with any and all ailments were simply awesome. With her help I increased flexibility in my body, lost weight and gained strength. She was a huge part of my rehab after my shoulder surgery. She always has a smile and positive demeanor about her. Her knowledge about anatomy, training techniques is unsurpassed.",
		name: "Bob Finley",
		role: "Ocean View, DE",
	},
	{
		title: "Over 5 years of training",
		text: "I have done functional training and mobility/stretching small groups and one on one with Marina for over 5 years, first in person sessions and now remotely through the zoom. Simply put, she is the best! She will challenge you but will always program and adapt exercise to one’s needs and abilities like my operated knees for example. I'm continuing training with Marina remotely and finding it as effective as if we were together at the gym.",
		name: "Larry Platt",
		role: "Washington, DC",
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
			<div
				className="marquee__container"
				id="reviews"
			>
				<h1 className="compare__heading">
					Marina is Here to Help You Overcome Your Challenges.
				</h1>
				<p className="subheading_text legend width-sub">
					Hear from people who trust Marina with their joint mobility and
					strength training, and feel the difference for yourself.
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
