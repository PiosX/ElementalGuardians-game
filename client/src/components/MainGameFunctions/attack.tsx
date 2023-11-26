/* eslint-disable @typescript-eslint/no-explicit-any */

import { calculateDmg } from "./calculateDmg";

export const attack = async (
	playerStats: any[],
	playerPerks: any[],
	yourEnemy: any[]
) => {
	try {
		const dmg = await calculateDmg(playerStats, playerPerks);
		if (typeof dmg === "number") {
			const dmgRound = Math.round(dmg);
			if (playerPerks[0].effect === "Physical Damage: ") {
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
			return dmg;
		}
	} catch (error) {
		console.error(error);
	}
};
