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
}

module.exports = HeroModel;
