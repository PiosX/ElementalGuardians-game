const db = require("../../db");

class MyPerksModel {
	async getPerks() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT perks_rank1.* FROM perks_rank1 JOIN equipped ON perks_rank1.perk1_id = equipped.perk_id JOIN hero ON equipped.hero_id = hero.hero_id WHERE hero.hero_id = 1`,
					(error, results) => {
						if (error) {
							reject(error);
						}
						if (results && results.rows) {
							resolve(results.rows);
						} else {
							reject(new Error("No results found"));
						}
					}
				);
			});
		} catch (error) {
			console.error(error);
			throw new Error("Internal server error");
		}
	}
}

module.exports = MyPerksModel;
