import { useNavigate } from "react-router-dom";
import heroBarBg from "../../assets/hero/heroBarBg.svg";
import "./HeroBar.scss";

const HeroBar = () => {
	const navigate = useNavigate();
	const navigateToInventory = () => {
		navigate("/inventory");
	};
	const navigateToCampaign = () => {
		navigate("/campaign");
	};
	const navigateToHero = () => {
		navigate("/hero");
	};
	return (
		<div className="hero-bar">
			<div className="hero-bar__bg">
				<img src={heroBarBg} alt="background" />
			</div>
			<div className="hero-bar__buttons">
				<div
					className="hero-bar__buttons-campaign"
					data-selected="0"
					onClick={navigateToCampaign}
				>
					<div className="hero-bar__buttons-campaign-text">
						Campaign
					</div>
				</div>
				<div
					className="hero-bar__buttons-hero"
					data-selected="1"
					onClick={navigateToHero}
				>
					<div className="hero-bar__buttons-hero-text">Hero</div>
				</div>
				<div
					className="hero-bar__buttons-perks"
					data-selected="0"
					onClick={navigateToInventory}
				>
					<div className="hero-bar__buttons-perks-text">
						Inventory
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBar;
