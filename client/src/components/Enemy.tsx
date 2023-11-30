import { EnemyInterface } from "../Interfaces/EnemyInterface";
import { EnemyPerksInterface } from "../Interfaces/EnemyPerksInterface";
import enemyLink from "../assets/game/enemyLink.svg";
import bgc from "../assets/game/bgc.svg";
import bgcStats from "../assets/game/bgcStats.svg";
import enemyBgc from "../assets/enemies/enemyBgc.svg";
import "./Enemy.scss";

const Enemy: React.FC<{
	collected: number;
	enemy: EnemyInterface;
	enemyPerks: EnemyPerksInterface[];
}> = ({ collected, enemy, enemyPerks }) => {
	return (
		<div className="game__enemy">
			{enemy != null && enemyPerks.length > 0 ? (
				<>
					<div className="game__enemy-level">
						<img
							src={bgc}
							alt="Background level"
							className="game__enemy-level-bgc"
						/>
						<p className="game__enemy-level-text">{enemy.name}</p>
					</div>
					<div className="game__enemy-main">
						<div className="game__enemy-main-attack">
							<div className="game__enemy-main-attack-perk">
								<img
									src={enemyPerks[0].src}
									alt={enemyPerks[0].name}
								/>
							</div>
						</div>
						<div className="game__enemy-main-stats">
							<div className="game__enemy-main-stats-bgc">
								<img src={enemyBgc} alt="Enemy background" />
								<img
									src={enemy.img}
									alt="Wolf"
									className="game__enemy-main-stats-bgc-img"
								/>
								<div className="game__enemy-main-stats-charge">
									<div className="game__enemy-main-stats-charge-num">
										<span className="game__enemy-collected">
											{collected}
										</span>
										/
										<span className="game__enemy-value">
											{enemyPerks[0].cost}
										</span>
									</div>
								</div>
								<div className="game__enemy-main-stats-info">
									<div className="game__enemy-main-stats-info-hp">
										<img
											src={bgcStats}
											alt="Background Stats"
										/>
										<div className="game__enemy-main-stats-info-hp-text">
											{enemy.health}
										</div>
									</div>
									<div className="game__enemy-main-stats-info-shield">
										<img
											src={bgcStats}
											alt="Background Stats"
										/>
										<div className="game__enemy-main-stats-info-shield-text">
											{enemy.shield}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="game__enemy-main-effect">
							<div className="game__enemy-main-effect-perk">
								<img
									src={enemyPerks[1].src}
									alt={enemyPerks[1].name}
								/>
							</div>
						</div>
						<div className="game__enemy-main-link">
							<img src={enemyLink} alt="Link" />
						</div>
					</div>
				</>
			) : (
				""
			)}
		</div>
	);
};

export default Enemy;
