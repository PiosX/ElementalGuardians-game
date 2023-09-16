import heroBarBg from "../../assets/hero/heroBarBg.svg";
import "./HeroBar.scss";

const HeroBar = () => {
	return (
		<div className="hero-bar">
			<div className="hero-bar__bg">
				<img src={heroBarBg} alt="background" />
			</div>
			<div className="hero-bar__buttons">
				<div className="hero-bar__buttons-campaign" data-selected="0">
					<div className="hero-bar__buttons-campaign-text">
						Campaign
					</div>
				</div>
				<div className="hero-bar__buttons-hero" data-selected="1">
					<div className="hero-bar__buttons-hero-text">Hero</div>
				</div>
				<div className="hero-bar__buttons-perks" data-selected="0">
					<div className="hero-bar__buttons-perks-text">Perks</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBar;
