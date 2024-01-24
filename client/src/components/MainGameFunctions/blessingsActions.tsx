/* eslint-disable no-mixed-spaces-and-tabs */
import { EnemyInterface } from "../../Interfaces/EnemyInterface";
import { EnemyPerksInterface } from "../../Interfaces/EnemyPerksInterface";
import { MyPerksInterface } from "../../Interfaces/MyPerksInterface";
import { Hero } from "../../Interfaces/HeroInterface";
import { AngelInterface } from "../../Interfaces/AngelInterface";

let counter: number = 0;
let counter1: number = 0;
let counter2: number = 0;
let counter3: number = 0;
let counter4: number = 0;
let counter5: number = 0;
let counter6: number = 0;
let counter7: number = 0;
let counter8: number = 0;
let counter9: number = 0;
let counter10: number = 0;
let counter11: number = 0;
let counter12: number = 0;
let counter13: number = 0;
let counter14: number = 0;
let counter15: number = 0;
let counter16: number = 0;
let counter17: number = 0;

let freezedTurns: number = 0;
let immoTurns: number = 0;
let immoTurns29: number = 0;
// eslint-disable-next-line prefer-const
let durationImmo: number = 3;
let ressurect: number = 0;
let secondChance: boolean = true;

export const getInfo = (
	heroPerks: MyPerksInterface[],
	enemyPerks: EnemyPerksInterface[],
	hero: Hero[],
	enemy: EnemyInterface,
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[],
	updatedHeroStats: Hero[],
	setHeroWon: (value: React.SetStateAction<boolean | null>) => void,
	setDiedOnce: (value: React.SetStateAction<boolean>) => void,
	setFreezed: (value: React.SetStateAction<boolean>) => void,
	hit: boolean,
	setRes: (value: React.SetStateAction<boolean>) => void
) => {
	// blessing_1(enemyPerks, hero, graces, updatedEnemyValues, updatedHeroStats);
	// blessing_2(enemyPerks, graces, updatedEnemyValues);
	// blessing_3(enemy, graces, collected, setCollected);
	// blessing_4(enemy, graces, collected, setCollected);
	// blessing_5(heroPerks, graces, updatedHeroPerks, angel, enemy);
	// blessing_6(enemy, graces, updatedEnemyValues);
	// blessing_7(heroPerks, graces, updatedHeroPerks);
	// blessing_8(enemy, graces, updatedEnemyValues);
	// blessing_9(
	// 	enemyPerks,
	// 	hero,
	// 	graces,
	// 	updatedEnemyValues,
	// 	angel,
	// 	updatedHeroStats
	// );
	// blessing_10(graces, updatedHeroStats, hero, setHeroWon, setDiedOnce);
	// blessing_11(enemy, graces, collected, setCollected);
	// blessing_12(enemy, graces, collected, setCollected, angel);
	// blessing_13(hero, updatedHeroStats, graces);
	// blessing_14(hero, updatedHeroStats, graces);
	// blessing_15(heroPerks, graces, updatedHeroPerks, angel, enemy);
	// blessing_16(enemyPerks, graces, updatedEnemyValues, angel, enemy);
	// blessing_17(enemy, graces, collected, setCollected);
	// blessing_18(
	// 	enemy,
	// 	graces,
	// 	collected,
	// 	setCollected,
	// 	angel,
	// 	enemyPerks,
	// 	updatedEnemyValues
	// );
	// blessing_19(hero, updatedHeroStats, graces);
	// blessing_20(hero, updatedHeroStats, graces);
	// blessing_21(heroPerks, graces, updatedHeroPerks, angel);
	// blessing_22(graces, angel, setFreezed, collected, setCollected);
	// blessing_23(enemy, graces, collected, setCollected, angel, setFreezed);
	// blessing_24(enemy, graces, collected, setCollected);
	// blessing_25(heroPerks, graces, updatedHeroPerks, angel, enemy);
	// blessing_26(heroPerks, graces, updatedHeroPerks, angel, enemy);
	// blessing_27(enemyPerks, graces, updatedEnemyValues);
	// blessing_28(hero, updatedHeroStats, graces);
	// blessing_29(enemy, graces, collected, setCollected, angel, setFreezed);
	// blessing_30(enemy, graces, collected, setCollected, angel);
	// blessing_31(
	// 	heroPerks,
	// 	graces,
	// 	updatedHeroPerks,
	// 	hero,
	// 	updatedHeroStats,
	// 	angel
	// );
	// blessing_32(heroPerks, graces, updatedHeroPerks);
	// blessing_33(
	// 	enemy,
	// 	graces,
	// 	collected,
	// 	setCollected,
	// 	angel,
	// 	heroPerks,
	// 	updatedHeroPerks
	// );
	// blessing_34(
	// 	enemy,
	// 	graces,
	// 	collected,
	// 	setCollected,
	// 	angel,
	// 	heroPerks,
	// 	updatedHeroPerks
	// );
	// blessing_35(
	// 	enemyPerks,
	// 	hero,
	// 	graces,
	// 	updatedEnemyValues,
	// 	updatedHeroStats,
	// 	angel
	// );
	// blessing_36(hero, updatedHeroStats, graces);
	// blessing_37(graces, durationImmo);
	// blessing_38(graces, hero, updatedHeroStats);
	// blessing_39(hero, updatedHeroStats, graces, hit, enemy);
	// blessing_40(
	// 	graces,
	// 	angel,
	// 	hero,
	// 	updatedHeroStats,
	// 	enemy,
	// 	collected,
	// 	setCollected
	// );
	// blessing_41(graces, angel, hero, updatedHeroStats, setRes);
	// blessing_42(enemy, graces, collected, setCollected, angel, enemyPerks);
	blessing_43(
		heroPerks,
		graces,
		updatedHeroPerks,
		enemy,
		collected,
		setCollected
	);
	blessing_44(graces, updatedEnemyValues, angel, enemy);
	blessing_45(enemyPerks, graces, updatedEnemyValues, angel, enemy);
	blessing_46(enemy, graces, collected, setCollected);
	blessing_47(enemy, graces, collected, setCollected, angel);
	blessing_48(
		enemyPerks,
		hero,
		graces,
		updatedEnemyValues,
		angel,
		updatedHeroStats
	);
};

const blessing_1 = (
	enemyPerks: EnemyPerksInterface[],
	hero: Hero[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	updatedHeroStats: Hero[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 1);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const reduction = updatedHeroStats[0].dmg_reduction + grace[0][key];
			hero[0].dmg_reduction = reduction;
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reducedAttack = Math.round(
				orginalAttack[0].value * (1 - hero[0].dmg_reduction / 100)
			);

			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].value =
				reducedAttack;
		}
	}
};

const blessing_2 = (
	enemyPerks: EnemyPerksInterface[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 2);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reduceValue = grace[0][key];
			const reducedHitChance = Math.round(
				orginalAttack[0].hit_chance * (1 - reduceValue / 100)
			);
			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].hit_chance =
				reducedHitChance;
		}
	}
};

const blessing_3 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 3);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter = 0;
					grace[0].value1 = counter;
				} else {
					counter = counter + 3;
					grace[0].value1 = counter;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_4 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 4);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (
					grace[0].value1 >= hitAfter ||
					grace[0].value1 + 3 >= hitAfter
				) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter1 = 0;
					grace[0].value1 = counter1;
				} else {
					counter1 = counter1 + 3;
					grace[0].value1 = counter1;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_5 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 5);
	const attackPerk = heroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("redOrb")
	);
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("redOrb")
	);

	if (heroPerks.length > 0 && grace.length > 0 && angel.length > 0 && enemy) {
		const fireRes = 1 - enemy.fireres / 100;
		const filterFirst = graces.filter((grace) => grace.blessing_id === 3);
		const filterSecond = graces.filter((grace) => grace.blessing_id === 4);
		const firePerk1 =
			filterFirst.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 3 &&
							perk.level === filterFirst[0].level
				  )
				: undefined;
		const firePerk2 =
			filterSecond.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 4 &&
							perk.level === filterSecond[0].level
				  )
				: undefined;
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const fireDmg = grace[0][key];
			if (attackPerk.length > 0) {
				const value = Math.round(
					primaryAttackPerk[0].value * (1 + fireDmg / 100)
				);
				const res = Math.round(value * fireRes);
				attackPerk[0].value = res;
			}
			if (firePerk1 != undefined) {
				if (key in firePerk1[0]) {
					const attack = graces.filter(
						(grace) => grace.blessing_id === 3
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							firePerk1[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * fireRes);
						attack[0][key] = res;
					}
				}
			}
			if (firePerk2 != undefined) {
				if (key in firePerk2[0]) {
					const attack = graces.filter(
						(grace) => grace.blessing_id === 4
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							firePerk2[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * fireRes);
						attack[0][key] = res;
					}
				}
			}
		}
	}
};

const blessing_6 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 6);
	if (grace.length > 0 && enemy) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const primaryEnemy = updatedEnemyValues!.enemy.fireres;
			const fireRes = grace[0][key];
			const value = Math.round(primaryEnemy * (1 - fireRes / 100));
			enemy.fireres = value;
		}
	}
};

const blessing_7 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 7);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (grace.length > 0 && heroPerks.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const critDmg = grace[0][key];
			const value = Math.round(
				primaryAttackPerk[0].criticalDamage * (1 + critDmg / 100)
			);
			attackPerk[0].criticalDamage = value;
		}
	}
};

const blessing_8 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 8);
	if (grace.length > 0 && enemy) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const primaryEnemy = updatedEnemyValues!.enemy.dodge;
			const dodge = grace[0][key];
			const value = Math.round(primaryEnemy * (1 - dodge / 100));
			enemy.dodge = value;
		}
	}
};

const blessing_9 = (
	enemyPerks: EnemyPerksInterface[],
	hero: Hero[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	angel: AngelInterface[],
	updatedHeroStats: Hero[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 9);
	if (grace.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 9 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const reduction = updatedHeroStats[0].dmg_reduction + grace[0][key];
			hero[0].dmg_reduction = reduction;
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reducedAttack = Math.round(
				orginalAttack[0].value * (1 - hero[0].dmg_reduction / 100)
			);

			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].value =
				reducedAttack;

			const bleeding = updatedHeroStats[0].bleedingres + perk[1][key];
			hero[0].bleedingres = bleeding;
		}
	}
};

const blessing_10 = (
	graces: AngelInterface[],
	updatedHeroStats: Hero[],
	hero: Hero[],
	setHeroWon: (value: React.SetStateAction<boolean | null>) => void,
	setDiedOnce: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 10);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const hpValue = grace[0][key];
			const hp = Math.round(updatedHeroStats[0].health * (hpValue / 100));
			if (hero[0].health >= 0.5 && secondChance === true) {
				setDiedOnce(true);
				setHeroWon(null);
				hero[0].health = hp;
				secondChance = false;
			}
		}
	}
};

const blessing_11 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 11);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter2 = 0;
					grace[0].value1 = counter2;
				} else {
					counter2 = counter2 + 3;
					grace[0].value1 = counter2;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_12 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 12);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 12 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const randomNumber = Math.floor(Math.random() * 100) + 1;
				const chance = perk[1][key];
				const dmg = grace[0][key];
				if (randomNumber <= chance) {
					if (grace[0].value1 >= hitAfter) {
						enemy.health -= dmg;
					} else {
						counter3 = counter3 + 3;
						grace[0].value1 = counter3;
					}
				} else {
					if (grace[0].value1 >= hitAfter) {
						if (enemy.shield > 0) {
							if (enemy.shield - dmg > 0) {
								enemy.shield = enemy.shield - dmg;
							} else {
								const minusValue = enemy.shield - dmg;
								enemy.shield = 0;
								enemy.health += minusValue;
							}
						} else {
							enemy.health -= dmg;
						}
						counter3 = 0;
						grace[0].value1 = counter3;
					} else {
						counter3 = counter3 + 3;
						grace[0].value1 = counter3;
					}
				}
			}
		}
		setCollected(false);
	}
};

const blessing_13 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 13);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const dodge = grace[0][key];
			const value = updatedHeroStats[0].dodge + dodge;
			hero[0].dodge = value;
		}
	}
};

const blessing_14 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 14);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const dodge = grace[0][key];
			const value = updatedHeroStats[0].barier + dodge;
			hero[0].barier = value;
		}
	}
};

const blessing_15 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 15);
	const attackPerk = heroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("blueOrb")
	);
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("blueOrb")
	);

	if (heroPerks.length > 0 && grace.length > 0 && angel.length > 0 && enemy) {
		const electricRes = 1 - enemy.electricres / 100;
		const filterFirst = graces.filter((grace) => grace.blessing_id === 17);
		const filterSecond = graces.filter((grace) => grace.blessing_id === 18);
		const electricPerk1 =
			filterFirst.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 17 &&
							perk.level === filterFirst[0].level
				  )
				: undefined;
		const electricPerk2 =
			filterSecond.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 18 &&
							perk.level === filterSecond[0].level
				  )
				: undefined;
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const electricDmg = grace[0][key];
			if (attackPerk.length > 0) {
				const value = Math.round(
					primaryAttackPerk[0].value * (1 + electricDmg / 100)
				);
				const res = Math.round(value * electricRes);
				attackPerk[0].value = res;
			}
			if (electricPerk1 != undefined) {
				if (key in electricPerk1[0]) {
					const attack = graces.filter(
						(grace) => grace.blessing_id === 17
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							electricPerk1[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * electricRes);
						attack[0][key] = res;
					}
				}
			}
			if (electricPerk2 != undefined) {
				if (key in electricPerk2[0]) {
					console.log("here1");
					const attack = graces.filter(
						(grace) => grace.blessing_id === 18
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							electricPerk2[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * electricRes);
						attack[0][key] = res;
					}
				}
			}
		}
	}
};

const blessing_16 = (
	enemyPerks: EnemyPerksInterface[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 16);
	if (grace.length > 0 && enemy) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 16 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reduceValue = grace[0][key];
			const reducedHitChance = Math.round(
				orginalAttack[0].hit_chance * (1 - reduceValue / 100)
			);
			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].hit_chance =
				reducedHitChance;

			const enemyDodge = perk[1][key];
			const value = Math.round(
				updatedEnemyValues!.enemy.dodge * (1 - enemyDodge / 100)
			);
			enemy.dodge = value;
		}
	}
};

const blessing_17 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 17);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter4 = 0;
					grace[0].value1 = counter4;
				} else {
					counter4 = counter4 + 3;
					grace[0].value1 = counter4;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_18 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	enemyPerks: EnemyPerksInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 18);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 18 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter5 = 0;
					grace[0].value1 = counter5;
				} else {
					counter5 = counter5 + 3;
					grace[0].value1 = counter5;
				}
				const enemyAttack = enemyPerks.filter(
					(perk) => perk.hit_min != null
				);
				const orginalAttack = updatedEnemyValues!.perks.filter(
					(perk) =>
						perk.perk_id === enemyAttack[0].perk_id &&
						perk.hit_min != null
				);
				const reduceValue = perk[1][key];
				const reducedDamage =
					orginalAttack[0].value * (1 - reduceValue / 100);
				enemyPerks[enemyPerks.indexOf(enemyAttack[0])].value =
					reducedDamage;
			}
		}
		setCollected(false);
	}
};

const blessing_19 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 19);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const maxHp = grace[0][key];
			const value = Math.round(
				updatedHeroStats[0].health * (1 + maxHp / 100)
			);
			hero[0].health = value;
		}
	}
};

const blessing_20 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 20);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const maxShield = grace[0][key];
			const value = Math.round(
				updatedHeroStats[0].shield * (1 + maxShield / 100)
			);
			hero[0].shield = value;
		}
	}
};

const blessing_21 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 21);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (grace.length > 0 && heroPerks.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 21 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const critChance = perk[1][key];
			const hitChance = grace[0][key];
			const value = Math.round(
				primaryAttackPerk[0].hit_chance * (1 + hitChance / 100)
			);
			const critValue = Math.round(
				primaryAttackPerk[0].criticalChance * (1 + critChance / 100)
			);
			attackPerk[0].hit_chance = value;
			attackPerk[0].criticalChance = critValue;
		}
	}
};

const blessing_22 = (
	graces: AngelInterface[],
	angel: AngelInterface[],
	setFreezed: (value: React.SetStateAction<boolean>) => void,
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 22);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 22 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const turn = perk[1][key];
				const freeze = grace[0][key];
				const value = Math.floor(Math.random() * 100) + 1;
				if (freezedTurns < turn) {
					freezedTurns += 1;
				} else {
					setFreezed(false);
					freezedTurns = 0;
				}
				if (grace[0].value1 >= hitAfter) {
					if (value <= freeze) {
						setFreezed(true);
					}
					counter6 = 0;
					grace[0].value1 = counter6;
				} else {
					counter6 = counter6 + 3;
					grace[0].value1 = counter6;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_23 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	setFreezed: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 23);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 23 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const immo = perk[1][key];
				const dmg = grace[0][key];
				const value = Math.floor(Math.random() * 100) + 1;
				if (immoTurns < durationImmo) {
					immoTurns += 1;
				} else {
					setFreezed(false);
					immoTurns = 0;
				}

				if (grace[0].value1 >= hitAfter) {
					if (value <= immo) {
						setFreezed(true);
						immoTurns = 0;
					}
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter7 = 0;
					grace[0].value1 = counter7;
				} else {
					counter7 = counter7 + 3;
					grace[0].value1 = counter7;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_24 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 24);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter8 = 0;
					grace[0].value1 = counter8;
				} else {
					counter8 = counter8 + 3;
					grace[0].value1 = counter8;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_25 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 25);
	const attackPerk = heroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("blackOrb")
	);
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("blackOrb")
	);
	if (heroPerks.length > 0 && grace.length > 0 && angel.length > 0 && enemy) {
		const bleedingRes = 1 - enemy.bleedingres / 100;
		const filterFirst = graces.filter((grace) => grace.blessing_id === 29);
		const bleedingPerk1 =
			filterFirst.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 29 &&
							perk.level === filterFirst[0].level
				  )
				: undefined;
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const bleedingDmg = grace[0][key];
			if (attackPerk.length > 0) {
				const value = Math.round(
					primaryAttackPerk[0].value * (1 + bleedingDmg / 100)
				);
				const res = Math.round(value * bleedingRes);
				attackPerk[0].value = res;
			}
			if (bleedingPerk1 != undefined) {
				if (key in bleedingPerk1[0]) {
					const attack = graces.filter(
						(grace) => grace.blessing_id === 29
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							bleedingPerk1[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * bleedingRes);
						attack[0][key] = res;
					}
				}
			}
		}
	}
};

const blessing_26 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 26);
	const attackPerk = heroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("purpleOrb")
	);
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) =>
			perk.perk_type === "attack" && perk.perk_req.includes("purpleOrb")
	);
	if (heroPerks.length > 0 && grace.length > 0 && angel.length > 0 && enemy) {
		const poisonRes = 1 - enemy.poisonres / 100;
		const filterFirst = graces.filter((grace) => grace.blessing_id === 30);
		const poisonPerk1 =
			filterFirst.length > 0
				? angel.filter(
						(perk) =>
							perk.blessing_id === 30 &&
							perk.level === filterFirst[0].level
				  )
				: undefined;
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const poisonDmg = grace[0][key];
			if (attackPerk.length > 0) {
				const value = Math.round(
					primaryAttackPerk[0].value * (1 + poisonDmg / 100)
				);
				const res = Math.round(value * poisonRes);
				attackPerk[0].value = res;
			}
			if (poisonPerk1 != undefined) {
				if (key in poisonPerk1[0]) {
					const attack = graces.filter(
						(grace) => grace.blessing_id === 30
					);
					if (attack.length > 0) {
						const value = grace[0][key];
						const calculate = Math.round(
							poisonPerk1[0][key] * (1 + value / 100)
						);
						const res = Math.round(calculate * poisonRes);
						attack[0][key] = res;
					}
				}
			}
		}
	}
};

const blessing_27 = (
	enemyPerks: EnemyPerksInterface[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 27);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reduceValue = grace[0][key];
			const reducedHitChance = Math.round(
				orginalAttack[0].hit_chance * (1 - reduceValue / 100)
			);
			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].hit_chance =
				reducedHitChance;
		}
	}
};

const blessing_28 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 28);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const regen = grace[0][key];
			if (updatedHeroStats[0].health > hero[0].health) {
				const value = Math.round(
					updatedHeroStats[0].health * (regen / 100)
				);
				hero[0].health += value;
			} else {
				hero[0].health = updatedHeroStats[0].health;
			}
		}
	}
};

const blessing_29 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	setFreezed: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 29);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 29 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const immo = perk[1][key];
				const dmg = grace[0][key];
				const value = Math.floor(Math.random() * 5) + 1;
				const enemyShield = Math.round(dmg / 2);
				if (immoTurns29 < durationImmo) {
					immoTurns29 += 1;
				} else {
					setFreezed(false);
					immoTurns29 = 0;
				}
				if (grace[0].value1 >= hitAfter) {
					if (value <= immo) {
						setFreezed(true);
						immoTurns29 = 0;
					}

					enemy.health -= dmg;
					enemy.shield -= enemyShield;

					counter9 = 0;
					grace[0].value1 = counter9;
				} else {
					counter9 = counter9 + 3;
					grace[0].value1 = counter9;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_30 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 30);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 30 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const immo = perk[1][key];
				const dmg = grace[0][key];
				const value = Math.round(dmg * 0.5);
				if (grace[0].value1 >= hitAfter) {
					enemy.health -= dmg;
					enemy.shield -= immo;
					setTimeout(() => {
						enemy.health -= value;
					}, 300);
					counter10 = 0;
					grace[0].value1 = counter10;
				} else {
					counter10 = counter10 + 3;
					grace[0].value1 = counter10;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_31 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	hero: Hero[],
	updatedHeroStats: Hero[],
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 31);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (grace.length > 0 && heroPerks.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 31 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const dodge = perk[1][key];
			const critDmg = grace[0][key];
			const value = Math.round(
				primaryAttackPerk[0].criticalDamage * (1 + critDmg / 100)
			);
			const dodgeValue = Math.round(
				updatedHeroStats[0].dodge * (1 - dodge / 100)
			);
			attackPerk[0].criticalDamage = value;
			hero[0].dodge = dodgeValue;
		}
	}
};

const blessing_32 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 32);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (grace.length > 0 && heroPerks.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const critDmg = grace[0][key];
			const value = Math.round(
				primaryAttackPerk[0].criticalDamage * (1 + critDmg / 100)
			);
			const value1 = Math.round(
				primaryAttackPerk[0].criticalChance * (1 + critDmg / 100)
			);
			const value2 = Math.round(
				primaryAttackPerk[0].hit_chance * (1 + critDmg / 100)
			);
			const value3 = Math.round(
				primaryAttackPerk[0].value * (1 + critDmg / 100)
			);
			attackPerk[0].criticalDamage = value;
			attackPerk[0].criticalChance = value1;
			attackPerk[0].hit_chance = value2;
			attackPerk[0].value = value3;
		}
	}
};

const blessing_33 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	heroPerks: MyPerksInterface[],
	updatedHeroPerks: MyPerksInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 33);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (collected) {
		if (grace.length > 0 && heroPerks.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 33 &&
					perk.level === grace[0].level &&
					perk.req !== null
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				const chance = perk[1][key];
				const value = Math.round(
					primaryAttackPerk[0].criticalChance * (1 + chance / 100)
				);

				attackPerk[0].criticalChance = value;

				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter11 = 0;
					grace[0].value1 = counter11;
				} else {
					counter11 = counter11 + 3;
					grace[0].value1 = counter11;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_34 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	heroPerks: MyPerksInterface[],
	updatedHeroPerks: MyPerksInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 34);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (collected) {
		if (grace.length > 0 && heroPerks.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 34 &&
					perk.level === grace[0].level &&
					perk.req !== null
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				const chance = perk[1][key];
				const value = Math.round(
					primaryAttackPerk[0].hit_chance * (1 + chance / 100)
				);

				attackPerk[0].hit_chance = value;

				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter12 = 0;
					grace[0].value1 = counter12;
				} else {
					counter12 = counter12 + 3;
					grace[0].value1 = counter12;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_35 = (
	enemyPerks: EnemyPerksInterface[],
	hero: Hero[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	updatedHeroStats: Hero[],
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 35);
	if (grace.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 34 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const regen = perk[1][key];
			const reduction = updatedHeroStats[0].dmg_reduction + grace[0][key];
			hero[0].dmg_reduction = reduction;
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reducedAttack = Math.round(
				orginalAttack[0].value * (1 - hero[0].dmg_reduction / 100)
			);

			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].value =
				reducedAttack;

			if (updatedHeroStats[0].health > hero[0].health) {
				const value = Math.round(
					updatedHeroStats[0].health * (regen / 100)
				);
				hero[0].health += value;
			} else {
				hero[0].health = updatedHeroStats[0].health;
			}
		}
	}
};

const blessing_36 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 36);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const res = grace[0][key];
			const value =
				updatedHeroStats[0].fireres + res > 80
					? 80
					: updatedHeroStats[0].fireres + res;
			const value1 =
				updatedHeroStats[0].poisonres + res > 80
					? 80
					: updatedHeroStats[0].poisonres + res;
			const value2 =
				updatedHeroStats[0].electricres + res > 80
					? 80
					: updatedHeroStats[0].electricres + res;
			const value3 =
				updatedHeroStats[0].iceres + res > 80
					? 80
					: updatedHeroStats[0].iceres + res;
			const value4 =
				updatedHeroStats[0].psychicres + res > 80
					? 80
					: updatedHeroStats[0].psychicres + res;
			hero[0].fireres = value;
			hero[0].poisonres = value1;
			hero[0].electricres = value2;
			hero[0].iceres = value3;
			hero[0].psychicres = value4;
		}
	}
};

const blessing_37 = (graces: AngelInterface[], durationImmo: number) => {
	const grace = graces.filter((grace) => grace.blessing_id === 37);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const duration = grace[0][key];
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			durationImmo += duration;
		}
	}
};

const blessing_38 = (
	graces: AngelInterface[],
	hero: Hero[],
	updatedHeroStats: Hero[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 38);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const charge = grace[0][key];
			const value = updatedHeroStats[0].bless_points - charge;
			hero[0].bless_points = value;
			console.log(charge, value);
		}
	}
};

const blessing_39 = (
	hero: Hero[],
	updatedHeroStats: Hero[],
	graces: AngelInterface[],
	hit: boolean,
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 39);
	if (grace.length > 0) {
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const steal = grace[0][key];
			if (updatedHeroStats[0].health > hero[0].health) {
				if (hit) {
					hero[0].health += steal;
					enemy.health -= steal;
				}
			} else {
				hero[0].health = updatedHeroStats[0].health;
			}
		}
	}
};

const blessing_40 = (
	graces: AngelInterface[],
	angel: AngelInterface[],
	hero: Hero[],
	updatedHeroStats: Hero[],
	enemy: EnemyInterface,
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 40);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 40 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const lose = perk[1][key];
				const kill = grace[0][key];

				if (grace[0].value1 >= hitAfter) {
					const randomNumber = Math.floor(Math.random() * 100) + 1;
					if (randomNumber <= kill) {
						enemy.health = 0;
					}
					if (randomNumber <= lose) {
						const value = Math.round(
							updatedHeroStats[0].health * (1 - lose / 100)
						);
						hero[0].health = value;
					}
					counter13 = 0;
					grace[0].value1 = counter13;
				} else {
					counter13 = counter13 + 3;
					grace[0].value1 = counter13;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_41 = (
	graces: AngelInterface[],
	angel: AngelInterface[],
	hero: Hero[],
	updatedHeroStats: Hero[],
	setRes: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 41);
	if (grace.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 41 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		setRes(true);
		if (key in grace[0]) {
			const restore = grace[0][key];
			const count = perk[1][key];

			if (ressurect < count) {
				if (hero[0].health <= 0) {
					const value = (updatedHeroStats[0].health * restore) / 100;
					hero[0].health = value;
					ressurect += 1;
				}
			} else {
				setRes(false);
			}
		}
	}
};

const blessing_42 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[],
	enemyPerks: EnemyPerksInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 42);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 42 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const enemyAttack = enemyPerks.filter(
					(perk) => perk.hit_min != null
				);
				const randomNumber = Math.floor(Math.random() * 100) + 1;
				const chance = perk[1][key];
				let dmg;
				if (randomNumber <= chance) {
					dmg = grace[0][key] + enemyAttack[0].value;
				} else {
					dmg = grace[0][key];
				}
				if (grace[0].value1 >= hitAfter) {
					if (enemy.shield > 0) {
						if (enemy.shield - dmg > 0) {
							enemy.shield = enemy.shield - dmg;
						} else {
							const minusValue = enemy.shield - dmg;
							enemy.shield = 0;
							enemy.health += minusValue;
						}
					} else {
						enemy.health -= dmg;
					}
					counter14 = 0;
					grace[0].value1 = counter14;
				} else {
					counter14 = counter14 + 3;
					grace[0].value1 = counter14;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_43 = (
	heroPerks: MyPerksInterface[],
	graces: AngelInterface[],
	updatedHeroPerks: MyPerksInterface[],
	enemy: EnemyInterface,
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 43);
	const attackPerk = heroPerks.filter((perk) => perk.perk_type === "attack");
	const primaryAttackPerk = updatedHeroPerks.filter(
		(perk) => perk.perk_type === "attack"
	);
	if (collected) {
		if (grace.length > 0 && heroPerks.length > 0) {
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const critChance = grace[0][key];
				if (counter15 < 3) {
					const value =
						attackPerk[0].criticalChance * (1 + critChance / 100);
					if (enemy.health <= 0) {
						attackPerk[0].criticalChance =
							primaryAttackPerk[0].criticalChance;
					} else {
						attackPerk[0].criticalChance = value;
					}
					counter15 = 0;
				} else {
					counter15 = counter15 + 3;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_44 = (
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 44);
	if (grace.length > 0 && enemy) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 44 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const res = grace[0][key];
			const enemyDodge = perk[1][key];

			const resValue = updatedEnemyValues!.enemy.psychicres - res;
			const value = Math.round(
				updatedEnemyValues!.enemy.dodge * (1 - enemyDodge / 100)
			);
			enemy.dodge = value;
			if (resValue < 0) {
				enemy.psychicres = 0;
			} else {
				enemy.psychicres = resValue;
			}
		}
	}
};

const blessing_45 = (
	enemyPerks: EnemyPerksInterface[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	angel: AngelInterface[],
	enemy: EnemyInterface
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 45);
	if (grace.length > 0 && enemy) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 45 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reduceValue = grace[0][key];
			const reducedHitChance = Math.round(
				orginalAttack[0].hit_chance * (1 - reduceValue / 100)
			);
			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].hit_chance =
				reducedHitChance;

			const enemyDodge = perk[1][key];
			const value = Math.round(
				updatedEnemyValues!.enemy.dodge * (1 - enemyDodge / 100)
			);
			enemy.dodge = value;
		}
	}
};

const blessing_46 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 46);
	if (collected) {
		if (grace.length > 0) {
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				if (grace[0].value1 >= hitAfter) {
					const physic = 1 - enemy.psychicres / 100;
					const value = dmg * physic;
					enemy.health -= value;
					counter16 = 0;
					grace[0].value1 = counter16;
				} else {
					counter16 = counter16 + 3;
					grace[0].value1 = counter16;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_47 = (
	enemy: EnemyInterface,
	graces: AngelInterface[],
	collected: boolean,
	setCollected: (value: React.SetStateAction<boolean>) => void,
	angel: AngelInterface[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 47);
	if (collected) {
		if (grace.length > 0) {
			const perk = angel.filter(
				(perk) =>
					perk.blessing_id === 47 && perk.level === grace[0].level
			);
			const hitAfter = grace[0].cost;
			const key = grace[0].rarity;
			if (key in grace[0]) {
				const dmg = grace[0][key];
				const maxDmg = perk[1][key];
				const randomNumber = Math.floor(Math.random() * 100) + 1;
				if (grace[0].value1 >= hitAfter) {
					const physic = 1 - enemy.psychicres / 100;
					if (randomNumber <= 50) {
						const value = dmg * physic;
						enemy.health -= value;
					} else {
						const value = maxDmg * physic;
						enemy.health -= value;
					}
					counter17 = 0;
					grace[0].value1 = counter17;
				} else {
					counter17 = counter17 + 3;
					grace[0].value1 = counter17;
				}
			}
		}
		setCollected(false);
	}
};

const blessing_48 = (
	enemyPerks: EnemyPerksInterface[],
	hero: Hero[],
	graces: AngelInterface[],
	updatedEnemyValues: {
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null,
	angel: AngelInterface[],
	updatedHeroStats: Hero[]
) => {
	const grace = graces.filter((grace) => grace.blessing_id === 48);
	if (grace.length > 0) {
		const perk = angel.filter(
			(perk) => perk.blessing_id === 48 && perk.level === grace[0].level
		);
		const key = grace[0].rarity;
		if (key in grace[0]) {
			const reduction = updatedHeroStats[0].dmg_reduction + grace[0][key];
			hero[0].dmg_reduction = reduction;
			const enemyAttack = enemyPerks.filter(
				(perk) => perk.hit_min != null
			);
			const orginalAttack = updatedEnemyValues!.perks.filter(
				(perk) =>
					perk.perk_id === enemyAttack[0].perk_id &&
					perk.hit_min != null
			);
			const reducedAttack = Math.round(
				orginalAttack[0].value * (1 - hero[0].dmg_reduction / 100)
			);

			enemyPerks[enemyPerks.indexOf(enemyAttack[0])].value =
				reducedAttack;

			const armor = updatedHeroStats[0].shield + perk[1][key];
			hero[0].shield = armor;
		}
	}
};
