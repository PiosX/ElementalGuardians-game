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
			throw new Error("Internal server error");
		}
	}
	async getInventory() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT perks_rank1.* FROM hero_perks
				JOIN perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
				WHERE hero_perks.hero_id = 1;`,
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
			throw new Error("Internal server error");
		}
	}
	async deleteItem(heroPerkId) {
		return await new Promise((resolve, reject) => {
			db.query(
				`DELETE FROM hero_perks WHERE perk1_id = $1;`,
				[heroPerkId],
				(error, results) => {
					if (error) {
						reject(error);
					}
					if (results && results.rowCount > 0) {
						resolve(results.rowCount);
					} else {
						reject(new Error("No matching row found"));
					}
				}
			);
		});
	}
}

module.exports = EquippedModel;
