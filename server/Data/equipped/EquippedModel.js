const db = require("../../db");

class EquippedModel {
	async getEquipped() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT
					perks.*
				FROM
					equipped
				JOIN
					hero ON equipped.hero_id = hero.hero_id
				JOIN
					perks ON equipped.perk_id = perks_rank1.perk1_id
				WHERE
					hero.hero_id = 1`,
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

module.exports = EquippedModel;
