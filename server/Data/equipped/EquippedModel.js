const db = require("../../db");

class EquippedModel {
	async getEquipped() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT perks_rank1.*, hero_perks.hero_id FROM hero_perks
					JOIN perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
					WHERE hero_perks.hero_id = 1 AND hero_perks.equipped = true;`,
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
	async countPerks() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT 
					(SELECT COUNT(*) FROM hero_perks 
					 JOIN perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
					 WHERE perks_rank1.perk_type = 'attack') AS attack_count,
					
					(SELECT COUNT(*) FROM hero_perks 
					 JOIN perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
					 WHERE perks_rank1.perk_type = 'stance') AS stance_count,
				
					(SELECT COUNT(*) FROM hero_perks 
					 JOIN perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
					 WHERE perks_rank1.perk_type = 'effect') AS effect_count;`,
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
					`SELECT perks_rank1.*, hero_perks.equipped FROM hero_perks
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
	async updateEssence(essenceValue) {
		try {
			const currentHeroResult = await db.query(
				"SELECT essence FROM hero WHERE hero_id = 1"
			);

			const currentHero = currentHeroResult.rows[0];

			const currentEssence = currentHero.essence;
			const newEssence = currentEssence + essenceValue;

			const result = await new Promise((resolve, reject) => {
				db.query(
					`UPDATE hero SET essence = $1 WHERE hero_id = 1 RETURNING *;`,
					[newEssence],
					(error, results) => {
						if (error) {
							reject(error);
						}
						if (results && results.rows) {
							resolve(results.rows[0]);
						} else {
							reject(new Error("No matching row found"));
						}
					}
				);
			});

			return result;
		} catch (error) {
			throw new Error("Internal server error");
		}
	}
	async updateEquipped(perkId, perkType) {
		try {
			const result = await new Promise((resolve, reject) => {
				db.query(
					`UPDATE hero_perks
					SET equipped = false
					FROM perks_rank1
					WHERE hero_perks.perk1_id = perks_rank1.perk1_id
					  AND perks_rank1.perk_type = $1`,
					[perkType],
					(error, updateResult) => {
						if (error) {
							reject(error);
							return;
						}

						db.query(
							`UPDATE hero_perks
				   SET equipped = true
				   WHERE perk1_id = $1
					 AND (SELECT perk_type FROM perks_rank1 WHERE perk1_id = $1) = $2
				   RETURNING *;`,
							[perkId, perkType],
							(innerError, innerResults) => {
								if (innerError) {
									reject(innerError);
									return;
								}
								resolve(innerResults.rows[0]);
							}
						);
					}
				);
			});

			return result;
		} catch (error) {
			throw new Error("Internal server error");
		}
	}
}

module.exports = EquippedModel;
