const express = require("express");
const EnemyModel = require("./enemyModel");

class EnemyController {
	constructor() {
		this.router = express.Router();
		this.enemyModel = new EnemyModel();

		this.router.get("/", this.getEnemy.bind(this));
		this.router.get("/:enemyId", this.getEnemyById.bind(this));
		this.router.get("/:enemyId/enemy-perks", this.getPerks.bind(this));
	}

	async getEnemy(req, res) {
		try {
			const enemies = await this.enemyModel.getHero();
			res.status(200).send(enemies);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	async getPerks(req, res) {
		const { enemyId } = req.params;
		try {
			const perks = await this.enemyModel.getEnemyPerks(enemyId);
			res.status(200).send(perks);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	async getEnemyById(req, res) {
		const { enemyId } = req.params;
		try {
			const enemy = await this.enemyModel.getEnemyById(enemyId);
			res.status(200).send(enemy);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new EnemyController().router;
