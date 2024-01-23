/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateDmg = (
	playerStats: any[],
	playerPerks: any[],
	enemy: any[]
) => {
	if (playerStats.length > 0 && playerPerks.length > 0 && enemy.length > 0) {
		let baseDamage = playerPerks[0].value + playerStats[0].strength * 0.5;
		const miss = "Miss!";
		const dodge = "Dodge!";
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		const hit = Math.floor(Math.random() * 100) + 1;

		if (randomNumber <= playerPerks[0].criticalChance) {
			baseDamage = baseDamage + playerPerks[0].criticalDamage / 100;
		}

		if (hit <= playerPerks[0].hit_chance) {
			const dodged = Math.floor(Math.random() * 100) + 1;
			if (dodged <= enemy[0].dodge) {
				return dodge;
			} else {
				return baseDamage;
			}
		} else {
			return miss;
		}
	}
};
