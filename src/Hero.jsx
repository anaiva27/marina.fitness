import "./Hero.css";
import img1 from "./images/hero-new1.png";
import img2 from "./images/img-intro.png";

const heroPoints = [
	"Ease tight hips",
	"Lower back stiffness",
	"Move with control",
	"Learn daily hip routine",
];

const programPoints = [
	"Safe, effective mobility gains",
	"Lifetime access to the program",
	"Progressive, step-by-step structure",
	"7 guided mobility classes",
	"Day 1-6 sessions: 25 minutes each",
	"Day 7: full 60-minute integration flow",
];

const stats = [
	{ value: "300+", label: "Happy Clients" },
	{ value: "12+", label: "Years of Coaching" },
];

function ArrowList({ items, program }) {
	return (
		<ul className="arrow-list">
			{program
				? items.map((item) => (
						<li key={item}>
							<span
								className="arrow"
								aria-hidden="true"
							>
								→
							</span>
							{item}
						</li>
					))
				: items.map((item) => (
						<li key={item}>
							<span
								className="arrow-features"
								aria-hidden="true"
							>
								→
							</span>
							{item}
						</li>
					))}
		</ul>
	);
}

export default function Hero() {
	return (
		<main className="page">
			{/* HERO */}

			<section className="hero">
				<div className="hero__image">
					<h1 className="hero__title-mobile">
						Move Better
						<br />
						Get Stronger
					</h1>
					<img
						src={img1}
						alt="Trainer standing in a gym"
					/>
				</div>
				<div className="hero__card">
					<h1 className="hero__title">
						Move Better
						<br />
						Get Stronger
					</h1>
					<h2 className="hero__subtitle">
						The 7-day Hip
						<br />
						Mobility Program
					</h2>
					<ArrowList
						items={heroPoints}
						program
					/>
					<a
						href="https://buy.stripe.com/5kQ7sL8Kf5Oa3nbcCFenS06"
						className="ghost-button-link hero__cta"
					>
						Join Us{" "}
						<span
							className="inline arrow-link"
							aria-hidden="true"
						>
							→
						</span>
					</a>
				</div>
			</section>

			{/* PROGRAM */}
			<section className="program">
				<article className="program__card">
					<svg
						className="program__icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#368777"
						strokeWidth="1.5"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M12 3 2 8l10 5 10-5-10-5Z" />
						<path d="m2 12 10 5 10-5" />
						<path d="m2 16 10 5 10-5" />
					</svg>
					<h2 className="program__card-title">
						The 7-day Hip
						<br />
						Mobility Program
					</h2>
					<ArrowList items={programPoints} />
					<a
						href="https://buy.stripe.com/5kQ7sL8Kf5Oa3nbcCFenS06"
						className="ghost-button-link program__cta"
					>
						Get the Program{" "}
						<span
							className="inline-green-arrow"
							aria-hidden="true"
						>
							→
						</span>
					</a>
				</article>

				<div className="program__content">
					<div>
						<h2 className="program__title">
							Mobility is longevity. <br /> Unlock your hips.
							<br />
							25 min a day.
						</h2>
						<p className="program__text">
							Getting down to the floor and back up is a skill.{" "}
							<strong>Use it or lose it.</strong> Train your hips now so they
							can carry you for decades.
						</p>
					</div>

					<div className="program__bottom">
						<dl className="stats">
							{stats.map((s) => (
								<div
									className="stat"
									key={s.label}
								>
									<dt className="stat__value">{s.value}</dt>
									<dd className="stat__label">{s.label}</dd>
								</div>
							))}
						</dl>
						<img
							className="program__photo"
							src={img2}
							alt="Woman in a triangle yoga pose"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
