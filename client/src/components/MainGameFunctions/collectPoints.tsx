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
	enemy: EnemyInterface[]
) => {
	const heroColl = heroCollected + 3;
	const enemyColl = enemyCollected + 3;
	if (isMatching) {
		if (heroPerks[0].cost > heroCollected) {
			setHeroCollected((points) =>
				Math.min(points + 3, heroPerks[0].cost)
			);
		}
		if (heroPerks[0].cost <= heroColl) {
			attack(heroStats, heroPerks, enemy);
			setTimeout(() => {
				setHeroCollected(0);
			}, 300);
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
			attack(enemy, enemyPerks, heroStats);
			setTimeout(() => {
				setEnemyCollected(0);
			}, 300);
		}
		setIsMatchingEnemy(false);
	}
};
