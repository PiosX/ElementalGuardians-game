import { Hero } from "../Interfaces/HeroInterface";
import { MyPerksInterface } from "../Interfaces/MyPerksInterface";
import heroBorder from "../assets/hero/heroBorder.svg";
import graces from "../assets/enemies/graces.svg";
import hero from "../assets/hero/knight.png";
import hp from "../assets/enemies/hp.svg";
import shieldImg from "../assets/enemies/shield.svg";
import "./HeroStat.scss";

const HeroStat: React.FC<{
	heroStats: Hero[];
	heroPerks: MyPerksInterface[];
	collected: number;
	graceNumber: number;
}> = ({ heroStats, heroPerks, collected, graceNumber }) => {
	return (
		<div className="game__hero">
			{heroStats.length > 0 && heroPerks.length > 0 ? (
				<div className="game__hero-wrap">
					<div className="game__hero-attack">
						<div className="game__hero-attack-perk">
							<img
								src={heroPerks[0].src}
								alt={heroPerks[0].name}
							/>
						</div>
						<div className="game__hero-attack-stat">
							<div className="game__hero-attack-stat-num">
								{heroPerks[0].value}
								{collected}
							</div>
							<div className="game__hero-attack-stat-text">
								Attack
							</div>
						</div>
					</div>
					<div className="game__hero-main">
						<div className="game__hero-main-border">
							<img src={heroBorder} alt="Border" />
						</div>
						<div className="game__hero-main-img">
							<img src={hero} alt="hero" />
						</div>
						<div className="game__hero-main-req">
							<img src={heroPerks[0].perk_req} alt="element" />
						</div>
						<div className="game__hero-main-stats">
							<div className="game__hero-main-stats-hp">
								<div className="game__hero-main-stats-hp-img">
									<img src={hp} alt="Health icon" />
								</div>
								<div className="game__hero-main-stats-hp-number">
									{heroStats[0].health}
									<span>{heroStats[0].health}</span>
								</div>
							</div>
							<div className="game__hero-main-stats-shield">
								<div className="game__hero-main-stats-shield-img">
									<img src={shieldImg} alt="Shield icon" />
								</div>
								<div className="game__hero-main-stats-shield-number">
									{heroStats[0].shield}
									<span>{heroStats[0].shield}</span>
								</div>
							</div>
						</div>
					</div>
					<div className="game__hero-graces">
						<div className="game__hero-graces-icon">
							<img src={graces} alt="graces icon" />
						</div>
						<div className="game__hero-graces-stat">
							<div className="game__hero-graces-stat-num">
								{graceNumber}
							</div>
							<div className="game__hero-graces-stat-text">
								Graces
							</div>
						</div>
					</div>
					{/* <div className="game__hero-perks">
						<div className="game__hero-perks-special">
							<img src={special1} alt="special" />
						</div>
						<div className="game__hero-perks-attack">
							<img
								src={heroPerks[0].src}
								alt={heroPerks[0].name}
							/>
						</div>
						<div className="game__hero-perks-effect">
							<img src={effect1} alt="effect" />
						</div>
					</div>
					<div className="game__hero-stats">
						<div className="game__hero-stats-bgc">
							<img
								src={heroBgc}
								alt="hero background"
								className="game__hero-stats-bgc-img"
							/>
							<img
								src={hero}
								alt="hero"
								className="game__hero-stats-bgc-hero"
							/>
						</div>
						<div className="game__hero-stats-charge">
							<img src={heroCharge} alt="charge background" />
							<div className="game__hero-stats-charge-number">
								<span className="game__hero-collected">
									{collected}
								</span>
								/
								<span className="game__hero-value">
									{heroPerks[0].cost}
								</span>
							</div>
						</div>
						<div className="game__hero-stats-info">
							<div className="game__hero-stats-info-hp">
								<div className="game__hero-stats-info-hp-number">
									{heroStats[0].health}
								</div>
								<img src={heart} alt="heart icon" />
							</div>
							<div className="game__hero-stats-info-shield">
								<img src={shield} alt="shield icon" />
								<div className="game__hero-stats-info-shield-number">
									{heroStats[0].shield}
								</div>
							</div>
						</div>
					</div>
					<div className="game__hero-link">
						<img src={heroLink} alt="hero link" />
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
					/>*/}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HeroStat;
