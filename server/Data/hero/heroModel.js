const db = require("../../db");

class HeroModel {
	async getHero() {
		try {
			return await new Promise((resolve, reject) => {
				db.query("SELECT * FROM hero", (error, results) => {
					if (error) {
						reject(error);
					}
					if (results && results.rows) {
						resolve(results.rows);
					} else {
						reject(new Error("No results found"));
					}
				});
			});
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	async setExp(enemyId) {
		try {
			const currentHeroResult = await db.query(
				"SELECT exp, essence FROM hero WHERE hero_id = 1"
			);

			const currentHero = currentHeroResult.rows[0];

			if (!currentHero) {
				throw new Error("Hero not found");
			}

			const currentExp = currentHero.exp;
			const currentEssence = currentHero.essence;

			const enemyEarnResult = await db.query(
				"SELECT earn FROM enemies WHERE enemy_id = $1",
				[enemyId]
			);

			const enemyEarn = enemyEarnResult.rows[0]
				? enemyEarnResult.rows[0].earn
				: 0;

			const newExp = currentExp + 300;
			const newEssence = currentEssence + enemyEarn;

			const updateQuery =
				"UPDATE hero SET exp = $1, essence = $2 WHERE hero_id = 1 RETURNING *";

			const results = await db.query(updateQuery, [newExp, newEssence]);

			if (results && results.rows && results.rows.length > 0) {
				return results.rows[0];
			} else {
				throw new Error("Failed to update hero exp and essence");
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

module.exports = HeroModel;
