import { useEffect } from "react";
import gsap from "gsap";
import "./Splash.scss";

const Splash = () => {
	useEffect(() => {
		gsap.fromTo(
			".splash__continue",
			{ opacity: 1 },
			{
				opacity: 0,
				duration: 1,
				yoyo: true,
				repeat: -1,
				ease: "ease-out",
			}
		);
	}, []);

	return (
		<div className="splash">
			<div className="splash__title">Elemental Guardians</div>
			<div className="splash__continue">Tap to continue</div>
			<div className="splash__version">version 1.000</div>
		</div>
	);
};

export default Splash;
