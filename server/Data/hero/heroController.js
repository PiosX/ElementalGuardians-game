const express = require("express");
const HeroModel = require("./heroModel");

class HeroController {
	constructor() {
		this.router = express.Router();
		this.heroModel = new HeroModel();

		this.router.get("/", this.getHero.bind(this));
		this.router.post("/add-exp", this.setExp.bind(this));
	}

	async getHero(req, res) {
		try {
			const heroes = await this.heroModel.getHero();
			res.status(200).send(heroes);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	async setExp(req, res) {
		try {
			const { enemyId } = req.body;

			if (!enemyId) {
				throw new Error("enemyId is required");
			}

			const updateExp = await this.heroModel.setExp(enemyId);
			res.status(200).send(updateExp);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new HeroController().router;
