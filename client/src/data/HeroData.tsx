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
	strength: 3, // physical dmg power
	dexterity: 1, // chance to hit
	intelligence: 1, // magic dmg power
	health: 15,
	shield: 15,
	fireRes: 0,
	poisonRes: 0,
	electricRes: 0,
	iceRes: 0,
	psychicRes: 0,
};

const perksAttack1Rank = [
	{
		name: "Fast Strike",
		desc: "Fast Strike enables the character to swiftly deliver a powerful blow, dealing physical damage to the opponent.",
		effect: "Physical Damage: ",
		src: "src/assets/perks/hero/attack/attack1.svg",
		value: 4,
		min: 3,
		max: 7,
		cost: 9,
		hit_desc: "Chance to hit: ",
		hit_chance: 75,
		hit_min: 60,
		hit_max: 85,
		perk_type: "attack",
	},
];

const perksAmulet1Stage = [{}];

const perksArmor1Stage = [{}];
