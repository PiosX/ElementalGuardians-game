import "./orbs.scss";
import greenOrbIcon from "../../assets/orbs/greenOrb.svg";

const GreenOrb = () => {
	return (
		<div className="orb orb--green">
			<img src={greenOrbIcon} alt="Orb icon" className="orb__icon" />
		</div>
	);
};

export default GreenOrb;
