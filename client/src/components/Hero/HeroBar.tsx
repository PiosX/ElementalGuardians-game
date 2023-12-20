import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroBarBg from "../../assets/hero/heroBarBg.svg";
import "./HeroBar.scss";

const HeroBar = () => {
	const btnCampaign = useRef<HTMLDivElement>(null);
	const btnHero = useRef<HTMLDivElement>(null);
	const btnPerks = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const location = useLocation();
	const selectBtn = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		const parent = target.closest(".hero-bar-btn");

		if (parent === btnCampaign.current) {
			navigateToCampaign();
		} else if (parent === btnHero.current) {
			navigateToHero();
		} else {
			navigateToInventory();
		}
	};
	const navigateToInventory = () => {
		navigate("/inventory");
	};
	const navigateToCampaign = () => {
		navigate("/campaign");
	};
	const navigateToHero = () => {
		navigate("/hero");
	};
	useEffect(() => {
		const pathname = location.pathname;
		if (pathname.includes("/campaign")) {
			btnCampaign.current?.setAttribute("data-selected", "1");
		} else if (pathname.includes("/hero")) {
			btnHero.current?.setAttribute("data-selected", "1");
		} else if (pathname.includes("/inventory")) {
			btnPerks.current?.setAttribute("data-selected", "1");
		}
	}, [location]);
	return (
		<div className="hero-bar">
			<div className="hero-bar__bg">
				<img src={heroBarBg} alt="background" />
			</div>
			<div className="hero-bar__buttons">
				<div
					className="hero-bar__buttons-campaign hero-bar-btn"
					data-selected="0"
					// onClick={navigateToCampaign}
					onClick={selectBtn}
					ref={btnCampaign}
				>
					<div className="hero-bar__buttons-campaign-text">
						Campaign
					</div>
				</div>
				<div
					className="hero-bar__buttons-hero hero-bar-btn"
					data-selected="0"
					onClick={selectBtn}
					ref={btnHero}
				>
					<div className="hero-bar__buttons-hero-text">Hero</div>
				</div>
				<div
					className="hero-bar__buttons-perks hero-bar-btn"
					data-selected="0"
					onClick={selectBtn}
					ref={btnPerks}
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
