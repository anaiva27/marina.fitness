import React from "react";
import "./Compare.css";

function Compare() {
	return (
		<div
			className="about component__space"
			id="About"
		>
			<div className="container about">
				<h1 className="compare__heading">The Marina Fitness Difference</h1>
				<div className="compare__grid_header">
					<h2>Training with Marina</h2>
					<span className="white_span">
						vs
						{/* {" "}
						&nbsp; &nbsp; &nbsp; vs. &nbsp; &nbsp;{" "} */}
					</span>{" "}
					<h2>Training on Your Own</h2>
				</div>
				<div className="compare_grid">
					<div className="compare_grid_col padding-l-5">
						Personalized mobility & strength plan
					</div>
					<div className="compare_grid_col">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#368777"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#cb2525"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col padding-r-5">
						Random or generic workouts
					</div>

					<div className="compare_grid_col grey padding-l-5">
						Improved joint mobility in weeks
					</div>
					<div className="compare_grid_col grey">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#368777"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col grey">
						{" "}
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#cb2525"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col grey padding-r-5">
						Stiffness may persist or worsen
					</div>

					<div className="compare_grid_col padding-l-5">
						Proper form coached every session
					</div>
					<div className="compare_grid_col">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#368777"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col">
						{" "}
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#cb2525"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col padding-r-5">
						Higher risk of poor form & injury
					</div>

					<div className="compare_grid_col grey padding-l-5">
						Steady progress you can measure
					</div>
					<div className="compare_grid_col grey">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#368777"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col grey">
						{" "}
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#cb2525"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div className="compare_grid_col grey padding-r-5">
						Plateaus and guesswork
					</div>
				</div>
			</div>
		</div>
	);
}

export default Compare;
