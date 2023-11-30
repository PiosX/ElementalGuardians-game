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
			throw error;
		}
	}
	async getEnemyPerks(enemyId) {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					"SELECT enemy_perks.* FROM enemy_perks JOIN enemies ON enemy_perks.enemy_id = enemies.enemy_id WHERE enemies.enemy_id = $1",
					[enemyId],
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
			throw error;
		}
	}
	async getEnemyById(enemyId) {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					"SELECT * FROM enemies WHERE enemy_id = $1",
					[enemyId],
					(error, results) => {
						if (error) {
							reject(error);
						}
						if (
							results &&
							results.rows &&
							results.rows.length > 0
						) {
							resolve(results.rows[0]);
						} else {
							reject(new Error("Enemy not found"));
						}
					}
				);
			});
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

module.exports = EnemyModel;
