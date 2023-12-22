import "./Perk.scss";
import border from "../../assets/game/bgcBorder.svg";
import lCorner from "../../assets/game/leftCorner.svg";
import rCorner from "../../assets/game/rightCorner.svg";

const Perk = ({
	perk_type,
	perk_src,
	name,
	desc,
	cost,
	req,
	effect,
	base_value,
	min,
	max,
	rare_bonus_desc,
	rare_bonus_min,
	rare_bonus_max,
	rare_bonus_value,
	epic_bonus_desc,
	epic_bonus_min,
	epic_bonus_max,
	epic_bonus_value,
	legendary_bonus_desc,
	legendary_bonus_min,
	legendary_bonus_max,
	legendary_bonus_value,
	hit,
	hit_min,
	hit_max,
	crit_chance,
	min_crit_chance,
	max_crit_chance,
	crit_dmg,
	min_crit_dmg,
	max_crit_dmg,
	onClose,
}: {
	perk_type: string;
	perk_src: string;
	name: string;
	desc: string;
	cost: number;
	req: string;
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
	hit: number;
	hit_min: number;
	hit_max: number;
	crit_chance: number;
	min_crit_chance: number;
	max_crit_chance: number;
	crit_dmg: number;
	min_crit_dmg: number;
	max_crit_dmg: number;
	onClose: () => void;
}) => {
	const whatRank = () => {
		const rank = perk_src;
		let finalRank;
		for (let i = 1; i < 5; i++) {
			if (rank.includes(`rank${i}`)) {
				finalRank = i;
			}
		}
		switch (finalRank) {
			case 1:
				return <span>Normal</span>;
			case 2:
				return <span>Rare</span>;
			case 3:
				return <span>Epic</span>;
			case 4:
				return <span>Legendary</span>;
		}
	};

	return (
		<div className="perk" onClick={onClose}>
			<img src={border} alt="border" />
			<div className="perk__type">
				{perk_type} [{whatRank()}]
			</div>
			<div className="perk__img">
				<img src={perk_src} alt={name} />
			</div>
			<div className="perk__name">{name}</div>
			<div className="perk__desc">{desc}</div>
			{cost > 1 ? (
				<div className="perk__cost">
					Cost: {cost}&nbsp;
					<div className="perk__cost-req">
						<img src={req} alt="orb" />
					</div>
				</div>
			) : (
				""
			)}
			<div className="perk__corner-l">
				<img src={lCorner} alt="left corner" />
			</div>
			<div className="perk__bonuses">
				<div className="perk__bonuses-main">
					{effect}&nbsp;&nbsp;{base_value}
					<span>
						[{min}-{max}]
					</span>
				</div>
				<div className="perk__bonuses-rare">
					{rare_bonus_value > 0 ? (
						<div className="perk__bonuses-rare-yes">
							{rare_bonus_desc}&nbsp;&nbsp;{rare_bonus_value}
							<span>
								[{rare_bonus_min}-{rare_bonus_max}]
							</span>
						</div>
					) : (
						<div className="perk__bonuses-rare-no">
							+Empty Slot[<span>Rare Perks Only</span>]
						</div>
					)}
				</div>
				<div className="perk__bonuses-epic">
					{epic_bonus_value > 0 ? (
						<div className="perk__bonuses-epic-yes">
							{epic_bonus_desc}&nbsp;&nbsp;{epic_bonus_value}
							<span>
								[{epic_bonus_min}-{epic_bonus_max}]
							</span>
						</div>
					) : (
						<div className="perk__bonuses-epic-no">
							+Empty Slot[<span>Epic Perks Only</span>]
						</div>
					)}
				</div>
				<div className="perk__bonuses-legendary">
					{legendary_bonus_value > 0 ? (
						<div className="perk__bonuses-legendary-yes">
							{legendary_bonus_desc}&nbsp;&nbsp;
							{legendary_bonus_value}
							<span>
								[{legendary_bonus_min}-{legendary_bonus_max}]
							</span>
						</div>
					) : (
						<div className="perk__bonuses-legendary-no">
							+Empty Slot[<span>Epic Perks Only</span>]
						</div>
					)}
				</div>
			</div>
			{hit !== null ? (
				<div className="perk__info">
					<div className="perk__info-hit">
						Chance to hit:&nbsp;&nbsp;{hit}%
						<span>
							[{hit_min}-{hit_max}]
						</span>
					</div>
					<div className="perk__info-crit-chance">
						Critical chance:&nbsp;&nbsp;{crit_chance}%
						<span>
							[{min_crit_chance}-{max_crit_chance}]
						</span>
					</div>
					<div className="perk__info-crit-dmg">
						Critical damage:&nbsp;&nbsp;{crit_dmg}%
						<span>
							[{min_crit_dmg}-{max_crit_dmg}]
						</span>
					</div>
				</div>
			) : (
				""
			)}

			<div className="perk__corner-r">
				<img src={rCorner} alt="left corner" />
			</div>
		</div>
	);
};

export default Perk;
