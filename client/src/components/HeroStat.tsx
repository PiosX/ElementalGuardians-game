import { Hero } from "../Interfaces/HeroInterface";
import { MyPerksInterface } from "../Interfaces/MyPerksInterface";
import heart from "../assets/game/heart.svg";
import shield from "../assets/game/shield.svg";
import bgcLP from "../assets/game/bgcLP.svg";
import bgcRP from "../assets/game/bgcRP.svg";
import special1 from "../assets/perks/hero/special/special1.svg";
import effect1 from "../assets/perks/hero/effect/effect1.svg";
import heroBgc from "../assets/perks/hero/heroBgc.svg";
import heroCharge from "../assets/perks/hero/heroCharge.svg";
import hero from "../assets/perks/hero/hero.png";
import heroLink from "../assets/game/heroLink.svg";
import "./HeroStat.scss";

const HeroStat: React.FC<{
	collected: number;
	heroStats: Hero[];
	heroPerks: MyPerksInterface[];
}> = ({ collected, heroStats, heroPerks }) => {
	return (
		<div className="game__hero">
			{heroStats.length > 0 && heroPerks.length > 0 ? (
				<div>
					<div className="game__hero-perks">
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
					/>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HeroStat;
