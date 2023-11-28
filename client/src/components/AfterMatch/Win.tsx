import { useEffect, useRef } from "react";
import win from "../../assets/afterMatch/win.png";
import essence from "../../assets/afterMatch/essence.svg";
import "./Win.scss";
import gsap from "gsap";

const Win = ({ exp, exp_req }: { exp: number; exp_req: number }) => {
	const progressRef = useRef(null);

	useEffect(() => {
		const progressWidth = exp_req !== 0 ? (exp / exp_req) * 100 - 4 : 0;

		gsap.fromTo(
			progressRef.current,
			{ width: "0%" },
			{
				width: `${progressWidth}%`,
				duration: 1.5,
				delay: 2,
				ease: "power2.inOut",
			}
		);
	}, [exp, exp_req]);
	return (
		<div className="win">
			<div className="win__frame"></div>
			<div className="win__img">
				<img src={win} alt="win graphic" />
			</div>
			<div className="win__text">VICTORY!</div>
			<div className="win__earn">
				<div className="win__earn-essence">
					<img src={essence} alt="essence icon" />
				</div>
				<div className="win__earn-amount">274</div>
			</div>
			<div className="win__level">
				<div className="win__level-present">1</div>
				<div className="win__level-bar">
					<div
						className="win__level-bar-progress"
						ref={progressRef}
					></div>
				</div>
				<div className="win__level-next">2</div>
			</div>
			<div className="win__continue-btn">Continue</div>
		</div>
	);
};

export default Win;
