import "./HeroNav.scss";
import heroNav from "../../assets/hero/heronav.svg";
import heroEssence from "../../assets/hero/heroessence.svg";
import heroBg from "../../assets/hero/heroBg.svg";
import heroKnight from "../../assets/hero/knight-nav.png";

const HeroNav = () => {
	return (
		<div className="hero-nav">
			<div className="hero-nav__img">
				<img src={heroNav} alt="Background" />
			</div>
			<div className="hero-nav__content">
				<div className="hero-nav__content-essence">
					<div className="hero-nav__content-essence-img">
						<img src={heroEssence} alt="essence" />
					</div>
					<div className="hero-nav__content-essence-number">
						34597
					</div>
				</div>
				<div className="hero-nav__content-hero">
					<div className="hero-nav__content-hero-bg">
						<img
							src={heroBg}
							alt="background"
							className="hero-nav__content-hero-bg-img"
						/>
						<img
							src={heroKnight}
							alt="background"
							className="hero-nav__content-hero-bg-class"
						/>
					</div>
					<div className="hero-nav__content-hero-lvl">
						<div className="hero-nav__content-hero-lvl-num">12</div>
					</div>
				</div>
				<div className="hero-nav__content-name">Dev_Pla1</div>
			</div>
		</div>
	);
};

export default HeroNav;
