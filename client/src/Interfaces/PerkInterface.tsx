export interface PerkInterface {
	perk1_id: number;
	name: string;
	src: string;
	description: string;
	perk_type: string;
	equipped: boolean;
	cost: number;
	perk_req: string;
	effect: string;
	base_value: number;
	min: number;
	max: number;
	rare_bonus_desc: string;
	rare_bonus_min: number;
	rare_bonus_max: number;
	rare_bonus_value: number;
	epic_bonus_desc: string;
	epic_bonus_min: number;
	epic_bonus_max: number;
	epic_bonus_value: number;
	legendary_bonus_desc: string;
	legendary_bonus_min: number;
	legendary_bonus_max: number;
	legendary_bonus_value: number;
	hit_chance: number;
	hit_min: number;
	hit_max: number;
	criticalChance: number;
	min_chance: number;
	max_chance: number;
	criticalDamage: number;
	min_critical: number;
	max_critical: number;
}
