import heroBarBg from "../../assets/hero/heroBarBg.svg";
import "./HeroBar.scss";

const HeroBar = () => {
	return (
		<div className="hero-bar">
			<div className="hero-bar__bg">
				<img src={heroBarBg} alt="background" />
			</div>
			<div className="hero-bar__buttons">
				<div className="hero-bar__buttons-campaign">
					<div className="hero-bar__buttons-campaign-text">
						Campaign
					</div>
				</div>
				<div className="hero-bar__buttons-hero">
					<div className="hero-bar__buttons-hero-text">Hero</div>
				</div>
				<div className="hero-bar__buttons-perks">
					<div className="hero-bar__buttons-perks-text">Perks</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBar;
