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
			throw new Error("Internal server error");
		}
	}
	async setExp() {
		try {
			const currentExpResult = await db.query(
				"SELECT exp FROM hero WHERE hero_id = 1"
			);
			const currentExp = currentExpResult.rows[0]
				? currentExpResult.rows[0].exp
				: 0;
			const newExp = currentExp + 300;
			const updateQuery =
				"UPDATE hero SET exp = $1 WHERE hero_id = 1 RETURNING *";
			const results = await db.query(updateQuery, [newExp]);

			if (results && results.rows && results.rows.length > 0) {
				return results.rows[0];
			} else {
				throw new Error("Failed to update hero exp");
			}
		} catch (error) {
			console.error(error);
			throw new Error("Internal server error");
		}
	}
}

module.exports = HeroModel;
