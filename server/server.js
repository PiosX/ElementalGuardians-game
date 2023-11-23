const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const heroController = require("./Data/hero/heroController");
const enemyController = require("./Data/enemy/enemyController");
const myPerksController = require("./Data/myPerks/myPerksController");
const equippedController = require("./Data/equipped/EquippedController");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/hero-stats", heroController);
app.use("/enemy-stats", enemyController);
app.use("/my-perks", myPerksController);
app.use("/equipped", equippedController);

const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
