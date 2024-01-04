export interface AngelInterface {
	angel_id: number;
	angel_name: string;
	blessing_id: number;
	cost: number;
	desc: string;
	effect1: string;
	effect2: string;
	epic: number;
	img: string;
	legendary: number;
	level: number;
	name: string;
	normal: number;
	rare: number;
	req: string;
	src: string;
	text: string;
	type: string;
	value1: number;
	value_id: number;
	b_name: string;
	angel: object;
	rarity: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}
