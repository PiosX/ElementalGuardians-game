const express = require("express");
const HeroModel = require("./heroModel");

class HeroController {
	constructor() {
		this.router = express.Router();
		this.heroModel = new HeroModel();

		this.router.get("/", this.getHero.bind(this));
	}

	async getHero(req, res) {
		try {
			const heroes = await this.heroModel.getHero();
			res.status(200).send(heroes);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new HeroController().router;
