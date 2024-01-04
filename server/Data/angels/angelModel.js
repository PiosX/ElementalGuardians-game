const db = require("../../db");

class AngelModel {
	async getAngel(angelId) {
		try {
			return await new Promise((resolve, reject) => {
				db.query(
					`SELECT blessing_value.*, blessings.*, angels.* 
                    FROM blessing_value
                    JOIN blessings ON blessing_value.blessing_id = blessings.blessing_id
                    JOIN angels ON angels.angel_id = blessings.angel_id
                    WHERE angels.angel_id = $1;`,
					[angelId],
					(error, results) => {
						if (error) {
							reject(error);
						}
						if (
							results &&
							results.rows &&
							results.rows.length > 0
						) {
							resolve(results.rows);
						} else {
							reject(new Error("Angel not found"));
						}
					}
				);
			});
		} catch (error) {
			throw new Error("Internal server error");
		}
	}
}

module.exports = AngelModel;
