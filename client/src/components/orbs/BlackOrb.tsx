import "./orbs.scss";
import blackOrbIcon from "../../assets/orbs/blackOrb.svg";

const BlackOrb = () => {
	return (
		<div className="orb orb--black">
			<img src={blackOrbIcon} alt="Orb icon" className="orb__icon" />
		</div>
	);
};

export default BlackOrb;
