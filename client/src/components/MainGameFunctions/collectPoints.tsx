import { MyPerksInterface } from "../../Interfaces/MyPerksInterface";
import { EnemyPerksInterface } from "../../Interfaces/EnemyPerksInterface";
import { attack } from "./attack";
import { Hero } from "../../Interfaces/HeroInterface";
import { EnemyInterface } from "../../Interfaces/EnemyInterface";

// export const collectPoints = (
// 	heroPerks: MyPerksInterface[],
// 	heroCollected: number,
// 	setHeroCollected: (value: React.SetStateAction<number>) => void
// ) => {
// 	const heroColl = heroCollected + 3;
// 	if (heroPerks[0].cost > heroCollected) {
// 		setHeroCollected((points: number) =>
// 			Math.min(points + 3, heroPerks[0].cost)
// 		);
// 	}
// 	if (heroPerks[0].cost <= heroColl) {
// 		setTimeout(() => {
// 			setHeroCollected(0);
// 		}, 300);
// 	}
// };

export const collectPoints = (
	heroCollected: number,
	enemyCollected: number,
	isMatching: boolean,
	isMatchingEnemy: boolean,
	heroPerks: MyPerksInterface[],
	enemyPerks: EnemyPerksInterface[],
	setHeroCollected: (value: React.SetStateAction<number>) => void,
	setEnemyCollected: (value: React.SetStateAction<number>) => void,
	setIsMatching: (value: React.SetStateAction<boolean>) => void,
	setIsMatchingEnemy: (value: React.SetStateAction<boolean>) => void,
	heroStats: Hero[],
	enemy: EnemyInterface[],
	setShowAngel: (value: React.SetStateAction<boolean>) => void,
	drawBls: () => void,
	setHit: (value: React.SetStateAction<boolean>) => void
) => {
	const heroColl = heroCollected + 3;
	const enemyColl = enemyCollected + 3;
	if (isMatching) {
		attack(heroStats, heroPerks, enemy, setHit);
		//heroStats[0].bless_points > heroColl
		if (heroStats[0].bless_points < heroColl) {
			setHeroCollected((points) =>
				Math.min(points + 3, heroPerks[0].cost)
			);
		} else {
			setHeroCollected(heroStats[0].bless_points);
			setTimeout(() => {
				//heroColl >= heroStats[0].bless_points)
				if (heroColl >= 0) {
					drawBls();
					setShowAngel(true);
				}
			}, 1000);
			setTimeout(() => {
				setHeroCollected(0);
			}, 2300);
		}
		setIsMatching(false);
	} else if (isMatchingEnemy) {
		console.log("matching enemy");
		if (enemyPerks[0].cost > enemyCollected) {
			setEnemyCollected((points) =>
				Math.min(points + 3, enemyPerks[0].cost)
			);
		}
		if (enemyPerks[0].cost <= enemyColl) {
			attack(enemy, enemyPerks, heroStats, setHit);
			setTimeout(() => {
				setEnemyCollected(0);
			}, 300);
		}
		setIsMatchingEnemy(false);
	}
};
