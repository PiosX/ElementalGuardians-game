const express = require("express");
const EquippedModel = require("./EquippedModel");

class EquippedController {
	constructor() {
		this.router = express.Router();
		this.equippedModel = new EquippedModel();

		this.router.get("/", this.getEquipped.bind(this));
		this.router.get("/inv", this.getInventory.bind(this));
		this.router.delete("/:heroPerkId", this.deleteItem.bind(this));
	}

	async getEquipped(req, res) {
		try {
			const equipped = await this.equippedModel.getEquipped();
			res.status(200).send(equipped);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	async getInventory(req, res) {
		try {
			const equipped = await this.equippedModel.getInventory();
			res.status(200).send(equipped);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	async deleteItem(req, res) {
		const heroPerkId = parseInt(req.params.heroPerkId);

		if (isNaN(heroPerkId)) {
			return res.status(400).send("Invalid item id");
		}

		try {
			const deletedRowCount = await this.equippedModel.deleteItem(
				heroPerkId
			);
			return deletedRowCount > 0
				? res.sendStatus(200)
				: res.status(404).send("No matching row found");
		} catch (error) {
			return res.status(500).send(error.message);
		}
	}
}

module.exports = new EquippedController().router;
