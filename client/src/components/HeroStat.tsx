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
	hero_req: number;
}> = ({ heroStats, heroPerks, collected, graceNumber, hero_req }) => {
	const calculatedScale = (collected / hero_req) * 100;

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
							<img src={heroPerks[0].req} alt="element" />
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
						<div className="game__hero-main-bar">
							<div
								className="game__hero-main-bar-progress"
								style={{
									transform: `scaleX(${
										calculatedScale / 100
									})`,
								}}
							></div>
							<div className="game__hero-main-bar-point"></div>
							<div className="game__hero-main-bar-text">
								{collected}
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
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HeroStat;
