/* eslint-disable @typescript-eslint/no-explicit-any */

import { calculateDmg } from "./calculateDmg";

export const attack = async (
	playerStats: any[],
	playerPerks: any[],
	yourEnemy: any[],
	setHit: (value: React.SetStateAction<boolean>) => void
) => {
	try {
		const filter = playerPerks.filter((perk) => perk.hit_chance !== null);
		const dmg = await calculateDmg(playerStats, filter, yourEnemy);
		if (typeof dmg === "number") {
			const dmgRound = Math.round(dmg);
			setHit(true);
			if (filter[0].effect === "Physical Damage: ") {
				if (yourEnemy[0].shield > 0) {
					if (yourEnemy[0].shield - dmgRound > 0) {
						yourEnemy[0].shield = yourEnemy[0].shield - dmgRound;
					} else {
						const minusValue = yourEnemy[0].shield - dmgRound;
						yourEnemy[0].shield = 0;
						yourEnemy[0].health += minusValue;
					}
				} else {
					yourEnemy[0].health -= dmgRound;
				}
			} else if (filter[0].effect === "Ice Damage: ") {
				const dmgRound = Math.round(
					dmg * (1 - yourEnemy[0].iceres / 100)
				);
				if (yourEnemy[0].shield > 0) {
					if (yourEnemy[0].shield - dmgRound > 0) {
						yourEnemy[0].shield = yourEnemy[0].shield - dmgRound;
					} else {
						const minusValue = yourEnemy[0].shield - dmgRound;
						yourEnemy[0].shield = 0;
						yourEnemy[0].health += minusValue;
					}
				} else {
					yourEnemy[0].health -= dmgRound;
				}
			} else if (filter[0].effect === "Bleeding Damage: ") {
				const dmgRound = Math.round(
					dmg * (1 - yourEnemy[0].bleedingres / 100)
				);
				const enemyShield = Math.round(dmg / 2);

				if (yourEnemy[0].shield > 0) {
					if (yourEnemy[0].shield - dmgRound > 0) {
						yourEnemy[0].health -= dmgRound;
						yourEnemy[0].shield -= enemyShield;
					}
				} else {
					yourEnemy[0].health -= dmgRound;
					setTimeout(() => {
						yourEnemy[0].health -= enemyShield;
					}, 400);
				}
			} else if (filter[0].effect === "Poison Damage: ") {
				const dmgRound = Math.round(
					dmg * (1 - yourEnemy[0].poisonres / 100)
				);
				const enemyShield = Math.round(dmg / 2);

				yourEnemy[0].health -= dmgRound;

				setTimeout(() => {
					yourEnemy[0].health -= enemyShield;
				}, 400);
			} else if (filter[0].effect === "Fire Damage: ") {
				const dmgRound = Math.round(
					dmg * (1 - yourEnemy[0].fireres / 100)
				);
				if (yourEnemy[0].shield > 0) {
					if (yourEnemy[0].shield - dmgRound > 0) {
						yourEnemy[0].shield = yourEnemy[0].shield - dmgRound;
					} else {
						const minusValue = yourEnemy[0].shield - dmgRound;
						yourEnemy[0].shield = 0;
						yourEnemy[0].health += minusValue;
					}
				} else {
					yourEnemy[0].health -= dmgRound;
				}
			}
		} else {
			setHit(false);
			return dmg;
		}
	} catch (error) {
		console.error(error);
	}
};
