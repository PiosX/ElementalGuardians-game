const db = require("../../db");

class EnemyModel {
	async getHero() {
		try {
			return await new Promise((resolve, reject) => {
				db.query("SELECT * FROM enemies", (error, results) => {
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
	async getEnemyPerks() {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					"SELECT enemy_perks.* FROM enemy_perks JOIN enemies ON enemy_perks.enemy_id = enemies.enemy_id WHERE enemies.enemy_id = 1",
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

module.exports = EnemyModel;
