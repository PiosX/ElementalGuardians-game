import { EnemyInterface } from "../Interfaces/EnemyInterface";
import { EnemyPerksInterface } from "../Interfaces/EnemyPerksInterface";
import enemyBorder from "../assets/enemies/enemyBorder.svg";
import hp from "../assets/enemies/hp.svg";
import shield from "../assets/enemies/shield.svg";
import graces from "../assets/enemies/graces.svg";
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
					<div className="game__enemy-attack">
						<div className="game__enemy-attack-stat">
							<div className="game__enemy-attack-stat-num">
								{enemyPerks[1].value}
								{collected}
							</div>
							<div className="game__enemy-attack-stat-text">
								Attack
							</div>
						</div>
						<div className="game__enemy-attack-perk">
							<img
								src={enemyPerks[1].src}
								alt={enemyPerks[1].name}
							/>
						</div>
					</div>
					<div className="game__enemy-main">
						<div className="game__enemy-main-border">
							<img src={enemyBorder} alt="Border" />
						</div>
						<div className="game__enemy-main-name">
							{enemy.name}
						</div>
						<div className="game__enemy-main-lvl">
							{enemy.enemy_id}
						</div>
						<div className="game__enemy-main-img">
							<img src={enemy.img} alt={enemy.name} />
						</div>
						<div className="game__enemy-main-stats">
							<div className="game__enemy-main-stats-hp">
								<div className="game__enemy-main-stats-hp-img">
									<img src={hp} alt="Health icon" />
								</div>
								<div className="game__enemy-main-stats-hp-number">
									{enemy.health}
									<span>{enemy.health}</span>
								</div>
							</div>
							<div className="game__enemy-main-stats-shield">
								<div className="game__enemy-main-stats-shield-img">
									<img src={shield} alt="Shield icon" />
								</div>
								<div className="game__enemy-main-stats-shield-number">
									{enemy.shield}
									<span>{enemy.shield}</span>
								</div>
							</div>
						</div>
						<div className="game__enemy-main-req">
							<img src={enemyPerks[1].perk_req} alt="element" />
						</div>
					</div>
					<div className="game__enemy-graces">
						<div className="game__enemy-graces-stat">
							<div className="game__enemy-graces-stat-num">
								{2}
							</div>
							<div className="game__enemy-graces-stat-text">
								Graces
							</div>
						</div>
						<div className="game__enemy-graces-icon">
							<img src={graces} alt="graces icon" />
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
