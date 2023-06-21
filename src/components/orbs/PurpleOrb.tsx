import "./orbs.scss";
import purpleOrbIcon from "../../assets/orbs/purpleOrb.svg";

const PurpleOrb = () => {
	return (
		<div className="orb orb--purple">
			<img src={purpleOrbIcon} alt="Orb icon" className="orb__icon" />
		</div>
	);
};

export default PurpleOrb;
