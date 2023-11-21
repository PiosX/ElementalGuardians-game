// może co 3 poziomy jak w shadowfights, grindowanie broni
//poziomy perków,
const basic = {
	login: "",
	password: "",
	email: "",
};

const knight = {
	level: 1,
	exp: 0,
	strength: 3,
	dexterity: 1,
	intelligence: 1,
	health: 15,
	shield: 15,
	fireRes: 0,
	poisonRes: 0,
	electricRes: 0,
	iceRes: 0,
	psychicRes: 0,
};

const perksAttack1Stage = [
	{
		name: "Fast Strike",
		desc: "Fast Strike enables the character to swiftly deliver a powerful blow, dealing physical damage to the opponent.",
		effect: "Physical Damage: ",
		src: "",
		value: 4,
		min: 3,
		max: 7,
		cost: 9,
	},
];

const perksAmulet1Stage = [{}];

const perksArmor1Stage = [{}];
