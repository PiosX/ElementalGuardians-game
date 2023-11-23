import { useState, useEffect } from "react";
import { EnemyInterface } from "../Interfaces/EnemyInterface";
import { EnemyPerksInterface } from "../Interfaces/EnemyPerksInterface";
import { getData } from "../Request/getData";
import enemyLink from "../assets/game/enemyLink.svg";
import bgc from "../assets/game/bgc.svg";
import bgcStats from "../assets/game/bgcStats.svg";
import enemyBgc from "../assets/enemies/enemyBgc.svg";
import "./Enemy.scss";

const Enemy = () => {
	const [enemy, setEnemy] = useState<EnemyInterface[]>([]);
	const [enemyPerks, setEnemyPerks] = useState<EnemyPerksInterface[]>([]);

	useEffect(() => {
		getData("enemy-stats", setEnemy);
		getData("enemy-stats/enemy-perks", setEnemyPerks);
	}, []);

	return (
		<div className="game__enemy">
			{enemy.length && enemyPerks.length > 0 ? (
				<>
					<div className="game__enemy-level">
						<img
							src={bgc}
							alt="Background level"
							className="game__enemy-level-bgc"
						/>
						<p className="game__enemy-level-text">
							{enemy[0].name}
						</p>
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
									src={enemy[0].img}
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
										<img
											src={bgcStats}
											alt="Background Stats"
										/>
										<div className="game__enemy-main-stats-info-hp-text">
											{enemy[0].health}
										</div>
									</div>
									<div className="game__enemy-main-stats-info-shield">
										<img
											src={bgcStats}
											alt="Background Stats"
										/>
										<div className="game__enemy-main-stats-info-shield-text">
											{enemy[0].shield}
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
