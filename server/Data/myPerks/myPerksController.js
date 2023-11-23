const express = require("express");
const MyPerksModel = require("./myPerksModel");

class MyPerksController {
	constructor() {
		this.router = express.Router();
		this.myPerksModel = new MyPerksModel();

		this.router.get("/", this.getMyPerks.bind(this));
	}

	async getMyPerks(req, res) {
		try {
			const myPerks = await this.myPerksModel.getPerks();
			res.status(200).send(myPerks);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new MyPerksController().router;
