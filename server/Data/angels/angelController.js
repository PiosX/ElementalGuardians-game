const express = require("express");
const AngelModel = require("./angelModel");

class AngelController {
	constructor() {
		this.router = express.Router();
		this.angelModel = new AngelModel();

		this.router.get("/:angelId", this.getAngel.bind(this));
	}

	async getAngel(req, res) {
		const { angelId } = req.params;

		try {
			const angel = await this.angelModel.getAngel(angelId);

			if (angel) {
				res.status(200).send(angel);
			} else {
				res.status(404).send("Angel not found");
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = new AngelController().router;
