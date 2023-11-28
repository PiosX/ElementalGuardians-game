import win from "../../assets/afterMatch/win.png";
import essence from "../../assets/afterMatch/essence.svg";
import "./Win.scss";

const Win = () => {
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
					<div className="win__level-bar-progress"></div>
				</div>
				<div className="win__level-next">2</div>
			</div>
			<div className="win__continue-btn">Continue</div>
		</div>
	);
};

export default Win;
