import heart from "../assets/game/heart.svg";
import shield from "../assets/game/shield.svg";
import playerBar from "../assets/game/playerBar.svg";
import bgcLP from "../assets/game/bgcLP.svg";
import bgcRP from "../assets/game/bgcRP.svg";
import "./HeroStat.scss";

const HeroStat = () => {
	return (
		<div className="game__hero">
			<div className="game__hero-stats">
				<div className="game__hero-stats-hp">
					<p className="game__hero-stats-hp-number">15</p>
					<div className="game__hero-stats-hp-icon">
						<img src={heart} alt="Heart icon" />
					</div>
				</div>
				<div className="game__hero-stats-hr"></div>
				<div className="game__hero-stats-shield">
					<div className="game__hero-stats-shield-icon">
						<img src={shield} alt="Shield icon" />
					</div>
					<p className="game__hero-stats-shield-number">30</p>
				</div>
			</div>
			<div className="game__hero-skills">
				<div className="game__hero-skills-attack skill"></div>
				<div className="game__hero-skills-resistance skill"></div>
				<div className="game__hero-skills-special skill"></div>
				<div className="game__hero-skills-item skill"></div>
			</div>
			<div className="game__hero-attack">
				<div className="game__hero-attack-power">
					<p className="game__hero-attack-power-number">6</p>
					<p className="game__hero-attack-power-text">Attack</p>
				</div>
				<div className="game__hero-attack-bar">
					<img
						src={playerBar}
						alt="Attack bar border"
						className="game__hero-attack-bar-border"
					/>
					<div className="game__hero-attack-bar-fill"></div>
				</div>
				<div className="game__hero-attack-count">
					<p className="game__hero-attack-count-number">7/10</p>
				</div>
			</div>
			<img
				src={bgcLP}
				alt="background for stats left"
				className="game__hero-bgc1"
			/>
			<img
				src={bgcRP}
				alt="background for stats right"
				className="game__hero-bgc2"
			/>
		</div>
	);
};

export default HeroStat;
