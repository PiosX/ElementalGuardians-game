import "./orbs.scss";
import blueOrbIcon from "../../assets/orbs/blueOrb.svg";

const BlueOrb = () => {
	return (
		<div className="orb orb--blue">
			<img src={blueOrbIcon} alt="Orb icon" className="orb__icon" />
		</div>
	);
};

export default BlueOrb;
