const express = require("express");
const EnemyModel = require("./enemyModel");

class EnemyController {
	constructor() {
		this.router = express.Router();
		this.enemyModel = new EnemyModel();

		this.router.get("/", this.getEnemy.bind(this));
		this.router.get("/:enemyId", this.getEnemyAndPerks.bind(this));
	}

	async getEnemy(req, res) {
		try {
			const enemies = await this.enemyModel.getHero();
			res.status(200).send(enemies);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	async getEnemyAndPerks(req, res) {
		const { enemyId } = req.params;

		try {
			const [enemy, perks] = await Promise.all([
				this.enemyModel.getEnemyById(enemyId),
				this.enemyModel.getEnemyPerks(enemyId),
			]);

			res.status(200).send({ enemy, perks });
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new EnemyController().router;
