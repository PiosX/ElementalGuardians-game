const express = require("express");
const EquippedModel = require("./EquippedModel");

class EquippedController {
	constructor() {
		this.router = express.Router();
		this.equippedModel = new EquippedModel();

		this.router.get("/", this.getEquipped.bind(this));
	}

	async getEquipped(req, res) {
		try {
			const equipped = await this.equippedModel.getEquipped();
			res.status(200).send(equipped);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new EquippedController().router;
