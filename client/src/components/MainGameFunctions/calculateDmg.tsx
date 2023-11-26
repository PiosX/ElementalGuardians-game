// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const calculateDmg = (playerStats: any[], playerPerks: any[]) => {
	if (playerStats.length > 0 && playerPerks.length > 0) {
		let baseDamage = playerPerks[0].value + playerStats[0].strength * 0.5;
		const miss = "Miss!";

		if (Math.random() < playerPerks[0].criticalChance / 100) {
			baseDamage = baseDamage + playerPerks[0].criticalDamage / 100;
		}

		if (Math.random() < playerPerks[0].hit_chance / 100) {
			return baseDamage;
		} else {
			return miss;
		}
	}
};
