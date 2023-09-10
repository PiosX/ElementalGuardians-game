import enemyLink from "../assets/game/enemyLink.svg";
import bgc from "../assets/game/bgc.svg";
import bgcStats from "../assets/game/bgcStats.svg";
import enemyBgc from "../assets/enemies/enemyBgc.svg";
import wolf from "../assets/perks/enemies/wolf/wolf.png";
import wolfA from "../assets/perks/enemies/wolf/attack.svg";
import wolfE from "../assets/perks/enemies/wolf/effect.svg";
import "./Enemy.scss";

const Enemy = () => {
	return (
		<div className="game__enemy">
			<div className="game__enemy-level">
				<img
					src={bgc}
					alt="Background level"
					className="game__enemy-level-bgc"
				/>
				<p className="game__enemy-level-text">Wolf</p>
			</div>
			<div className="game__enemy-main">
				<div className="game__enemy-main-attack">
					<div className="game__enemy-main-attack-perk">
						<img src={wolfA} alt="Wolf Attack" />
					</div>
				</div>
				<div className="game__enemy-main-stats">
					<div className="game__enemy-main-stats-bgc">
						<img src={enemyBgc} alt="Enemy background" />
						<img
							src={wolf}
							alt="Wolf"
							className="game__enemy-main-stats-bgc-img"
						/>
						<div className="game__enemy-main-stats-charge">
							<div className="game__enemy-main-stats-charge-num">
								6/11
							</div>
						</div>
						<div className="game__enemy-main-stats-info">
							<div className="game__enemy-main-stats-info-hp">
								<img src={bgcStats} alt="Background Stats" />
								<div className="game__enemy-main-stats-info-hp-text">
									80
								</div>
							</div>
							<div className="game__enemy-main-stats-info-shield">
								<img src={bgcStats} alt="Background Stats" />
								<div className="game__enemy-main-stats-info-shield-text">
									15
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="game__enemy-main-effect">
					<div className="game__enemy-main-effect-perk">
						<img src={wolfE} alt="Wolf Effect" />
					</div>
				</div>
				<div className="game__enemy-main-link">
					<img src={enemyLink} alt="Link" />
				</div>
			</div>
		</div>
	);
};

export default Enemy;
