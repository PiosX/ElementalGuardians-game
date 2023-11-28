import lose from "../../assets/afterMatch/lose.png";
import essence from "../../assets/afterMatch/essence.svg";
import "./Lose.scss";

const Lose = () => {
	return (
		<div className="lose">
			<div className="lose__frame"></div>
			<div className="lose__img">
				<img src={lose} alt="lose graphic" />
			</div>
			<div className="lose__text">You Died!</div>
			<div className="lose__earn">
				<div className="lose__earn-essence">
					<img src={essence} alt="essence icon" />
				</div>
				<div className="lose__earn-amount">0</div>
			</div>
			<div className="lose__retry-btn">Retry</div>
			<div className="lose__abort-btn">Abort</div>
		</div>
	);
};

export default Lose;
