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
					`SELECT 
					perks_rank1.*, 
					hero_perks.*,
					rare_bonuses.bonus_desc AS rare_bonus_desc,
					rare_bonuses.bonus_min AS rare_bonus_min,
					rare_bonuses.bonus_max AS rare_bonus_max,
					rare_bonuses.bonus_value AS rare_bonus_value,
					epic_bonuses.bonus_desc AS epic_bonus_desc,
					epic_bonuses.bonus_min AS epic_bonus_min,
					epic_bonuses.bonus_max AS epic_bonus_max,
					epic_bonuses.bonus_value AS epic_bonus_value,
					legendary_bonuses.bonus_desc AS legendary_bonus_desc,
					legendary_bonuses.bonus_min AS legendary_bonus_min,
					legendary_bonuses.bonus_max AS legendary_bonus_max,
					legendary_bonuses.bonus_value AS legendary_bonus_value
				FROM 
					hero_perks
				JOIN 
					perks_rank1 ON hero_perks.perk1_id = perks_rank1.perk1_id 
				JOIN 
					bonuses AS rare_bonuses ON hero_perks.rare = rare_bonuses.bonus_id
				JOIN 
					bonuses AS epic_bonuses ON hero_perks.epic = epic_bonuses.bonus_id
				JOIN 
					bonuses AS legendary_bonuses ON hero_perks.legendary = legendary_bonuses.bonus_id
				WHERE 
					hero_perks.hero_id = 1;`,
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
