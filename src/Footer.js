import React from "react";
import logoSmall from "./img/logo-new-White-crop-Marina.png";

function Footer() {
	return (
		<div
			className="footer d__flex align__items__center justify__content_center pz-10"
			style={{ padding: "30px 30px 40px", zIndex: "100", background: "#000" }}
		>
			{/* <img src={logoSmall} alt="" /> */}
			<span
				className="copyright"
				style={{ color: "#fff", fontSize: "14px", opacity: "0.75" }}
			>
				© 2026 Marina Fitness. All Rights Reserved.
			</span>
			<span
				className="copyright"
				style={{ color: "#fff", fontSize: "14px", opacity: "0.75" }}
			>
				Developed by -{" "}
				<a
					href="https://a27-web-lab.vercel.app"
					target="_blank"
					className="footer-dev-link"
					rel="noopener noreferrer"
				>
					A27 Web Lab
				</a>
			</span>
		</div>
	);
}

export default Footer;
