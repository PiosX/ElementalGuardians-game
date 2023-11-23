import "./orbs.scss";
import redOrbIcon from "../../assets/orbs/redOrb.svg";

const RedOrb = () => {
	return (
		<div className="orb orb--red">
			<img src={redOrbIcon} alt="Orb icon" className="orb__icon" />
		</div>
	);
};

export default RedOrb;
