import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Hero } from "./Hero";

export const Samadhi = () => {
	return <Hero />;
};

const H1 = styled.h1`
	font-size: 50px;
	color: #635341;
	@media (max-width: 1000px) {
		font-size: 32px;
	}
`;
const Body = styled.p`
	font-size: 20px;
	max-width: 1000px;

	${({ darkColor }) =>
		darkColor &&
		css`
			color: #635341;
			word-wrap: break-word;
		`}
	@media (max-width: 1000px) {
		font-size: 18px;
	}
`;
const Logo = styled.img`
	width: 40% !important;
	margin-top: -150px;
	@media (max-width: 1000px) {
		margin-top: -60px;
		width: 60% !important;
	}
`;
const WideImg = styled.img`
	width: 100% !important;
	object-fit: cover;
	object-position: center;
	@media (max-width: 1000px) {
		width: 100% !important;
	}
`;
const SideImage = styled.div`
	width: 50% !important;
	position: relative;
	z-index: 5;
	img {
		margin-left: -20%;
		width: 100% !important;
		object-fit: cover;
		object-position: center;
	}
	@media (max-width: 1000px) {
		width: 100% !important;
		img {
			margin: 0;
		}
	}
`;
const SideHistoryImage = styled.div`
	width: 50% !important;
	position: relative;
	z-index: 5;
	img {
		margin-right: -30%;
		width: 100% !important;
		object-fit: cover;
		object-position: center;
	}
	@media (max-width: 1000px) {
		width: 100% !important;
		img {
			margin: 0;
		}
	}
`;
const Mandala = styled.img`
	width: 100% !important;
	position: absolute;
	scale: 1.1;
	opacity: 0.25;
	top: 0;
	max-width: 1300px;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 1;
	margin-top: -70px;
	@media (max-width: 450px) {
		margin-top: -10px;
		scale: 1.3;
		width: 100% !important;
	}
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 15;
	align-items: center;
	justify-content: center;
	gap: 35px;
	h3 {
		text-transform: uppercase;
		color: #635341;
	}
	@media (min-width: 1100px) {
		button {
			margin-top: 40px;
		}
	}
`;
const SideContent = styled.div`
	width: 50%;
	display: flex;
	height: fit-content;
	flex-direction: column;
	padding: 30px;
	margin-top: 100px;
	position: relative;
	z-index: 15;
	align-items: center;
	justify-content: center;
	gap: 35px;
	background-color: #eee3d9be;
	h1 {
		text-transform: uppercase;
	}
	ul {
		list-style: circle;
		margin-left: 15px;
		list-style-position: outside;
		li {
			position: relative;
			margin-bottom: 15px !important;
			margin-left: 15px !important;
			list-style: outside !important;
			list-style-position: outside;
			list-style-type: disc !important;

			&::marker {
				unicode-bidi: isolate;
				font-variant-numeric: tabular-nums;
				text-transform: none;
				text-indent: 10px !important;
				text-align: start !important;
				text-align-last: start !important;
				position: absolute;
				left: -10px !important;
			}
		}
	}
	${({ yulia }) =>
		yulia &&
		css`
			background-color: transparent !important;
			padding: 0;
			margin-bottom: 25px;
		`}
	@media (max-width: 1000px) {
		width: 100%;
		margin-top: 10px;
		ul {
			margin-left: 0px;
		}
	}
	@media (min-width: 1000px) {
		${({ history }) =>
			history &&
			css`
				padding: 50px 60px;
				margin-left: -40px;
			`}
	}
	@media (min-width: 1000px) {
		${({ list }) =>
			list &&
			css`
				width: 53%;
			`}
	}
`;
const DescriptionWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #cfc4c0;
	img {
		object-fit: cover;
		object-position: top center;
		width: 100%;
	}
`;
const HeroSection = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	z-index: 10;
	img {
		object-fit: cover;
		object-position: top center;
		width: 100%;
	}
`;
const Description = styled.div`
	width: 100%;
	max-width: 1300px;
	display: flex;
	margin: auto;
	flex-direction: row-reverse;
	gap: 35px;
	padding: 40px;
	@media (max-width: 1000px) {
		padding: 20px;
		flex-direction: column-reverse;
		background-color: #f5eee9;
	}
`;
const HistorySection = styled.div`
	width: 100%;
	max-width: 1300px;
	display: flex;
	margin: auto;
	flex-direction: row-reverse;
	padding: 40px;
	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		background-color: #f5eee9;
	}
`;
const YuliaSection = styled.div`
	width: 100%;
	max-width: 1300px;
	display: flex;
	margin: auto;
	background-color: #eee3d9be;
	flex-direction: row-reverse;
	padding: 40px;
	margin-bottom: 50px;
	@media (max-width: 1000px) {
		margin-bottom: 10px;
		flex-direction: column-reverse;
		background-color: #f5eee9;
	}
`;
const HostName = styled.div`
	font-size: 50px;
	color: #635341;
	margin-bottom: 30px;
	// font-family: "Pinyon Script";
	font-weight: 600;
	@media (max-width: 1000px) {
		display: none;
	}
`;
const MeetSection = styled.div`
	width: 100%;
	max-width: 1300px;
	display: flex;
	margin: auto;
	flex-direction: row;
	position: relative;
	padding: 40px;
	${HostName} {
		border-bottom: 0.5px solid #635341;
	}
	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 20px;
	}
`;
const HostNameMobile = styled.div`
	display: none;
	@media (max-width: 1000px) {
		font-size: 10vw;
		color: #635341;
		margin-bottom: 20px;
		margin-top: 10px;
		font-weight: 600;
		text-align: center;
		display: block;
	}
`;
const Legend = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 5;
	// align-items: center;
	justify-content: center;
	padding-left: 70px;
	padding-top: 40px;
	@media (max-width: 1000px) {
		width: 100%;
		padding: 15px;
	}
	${({ marina }) =>
		marina &&
		css`
			padding: 40px;
			text-align: right;
			@media (max-width: 1000px) {
				text-align: left;
			}
		`}
`;
const SideImg = styled.div`
	width: 50% !important;
	img {
		width: 100% !important;
		object-fit: cover;
		object-position: center;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;
const SideImgMobile = styled.div`
	display: none;
	@media (max-width: 1000px) {
		display: block;
		width: 100% !important;
		img {
			width: 100% !important;
			object-fit: cover;
			object-position: center;
		}
	}
`;
const IntroSection = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	z-index: 5;
	margin: 0px auto 100px;
	padding: 60px 60px 0;
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 35px;
	align-items: center;
	justify-content: center;
	h1 {
		/* color: #1c2a14; */
	}
	img {
		object-fit: cover;
		object-position: top center;
		width: 100%;
	}
	@media (max-width: 1100px) {
		padding: 30px 20px 0;
		margin: 0 auto 60px auto;
	}
`;
const ExploreSection = styled.div`
	width: 100%;
	margin: 60px auto 100px;
	display: flex;
	flex-direction: column;
	text-align: left;
	gap: 35px;
	align-items: center;
	justify-content: center;
	h1 {
		color: #1c2a14;
	}
	p {
		padding: 20px;
	}
	img {
		object-fit: cover;
		object-position: top center;
		width: 100%;
		max-width: 1200px;
	}
	@media (max-width: 1100px) {
		margin: 20px auto;
		button {
			margin-bottom: 40px;
		}
	}
`;
const IncludedSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 35px;
	align-items: center;
	justify-content: center;

	@media (max-width: 1000px) {
		padding: 30px 0 0;
	}
`;
const NotIncludedSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 35px;
	margin: 0px 0;
	padding: 30px;
	align-items: flex-start;
	justify-content: center;
	background-color: #cfc4c0;
	color: white !important;
	p {
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
	}
	span {
		color: white;
		display: inline;
	}
	h1 {
		white-space: nowrap;
		font-size: 40px;
		width: 500px;
		text-align: right;
	}
	@media (max-width: 1000px) {
		padding: 30px;
		flex-direction: column;
		align-items: center;
		h1 {
			white-space: wrap;
			font-size: 40px;
			width: fit-content;
			text-align: center;
		}
	}
`;
const ModalImg = styled.img`
	width: 100%;
	object-fit: contain;
	display: block;
`;
const DaytName = styled.div`
	font-size: 30px;
	color: #635341;
	margin-bottom: 20px;
	font-weight: 600;
`;
const ScheduleSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #cfc4c0;
	padding: 50px 30px 0px;
	${H1} {
		margin-bottom: 25px;
	}
	${DaytName} {
		margin-bottom: 0;
	}
	& > ${DaytName}, ${H1}, & > ${Body} {
		text-align: center;
	}
`;
const ScheduleTable = styled.div`
	max-width: 1200px;
	padding: 30px 20px 10px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 40px;
	${DaytName} {
		border-bottom: 0.5px solid #635341;
		margin-bottom: 7px;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		gap: 25px;
	}
`;
const List = styled.div`
	padding: 20px 30px;
	max-width: 1200px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 50px;
	li {
		margin-bottom: 25px;
	}
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		gap: 0;
	}
`;
const NotIncludedList = styled.div`
	padding: 13px 0 0;
	max-width: 400px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 50px;
	li {
		margin-bottom: 25px;
		//text-shadow: 0.5px 0px 0px #000000aa;
	}
	@media (max-width: 700px) {
		padding: 0;
		ul {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;
const ContactList = styled.div`
	padding: 13px 0 0;
	max-width: 400px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 50px;
	li {
		margin-bottom: 25px;
		//text-shadow: 0.5px 0px 0px #000000aa;
	}
	a {
		color: white;
		text-decoration: underline;
		cursor: pointer;
	}
	@media (max-width: 700px) {
		padding: 0;
		ul {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		p {
			font-size: max(15px, 3vw);
		}
	}
`;
const ButtonPrimary = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-align: center;
	width: 100%;
	max-width: 350px;
	height: 55px;
	background-color: #635341;
	border: none;
	color: white;
	letter-spacing: 0.5px;
	font-weight: 600;
	font-size: 22px;
	text-transform: uppercase;
	border-radius: 4px;
`;
const DayDesktop = styled.div`
	display: block;
	@media (max-width: 700px) {
		display: none;
	}
`;
const DayMobile = styled.div`
	display: none;
	@media (max-width: 700px) {
		display: block;
	}
`;
