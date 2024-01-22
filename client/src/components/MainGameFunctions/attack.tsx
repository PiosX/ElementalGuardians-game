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
		const dmg = await calculateDmg(playerStats, filter);
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
			}
		} else {
			setHit(false);
			return dmg;
		}
	} catch (error) {
		console.error(error);
	}
};
