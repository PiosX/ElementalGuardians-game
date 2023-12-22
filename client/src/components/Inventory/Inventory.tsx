// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState, useRef } from "react";
import HeroBar from "../Hero/HeroBar";
import HeroNav from "../Hero/HeroNav";
import checkIcon from "../../assets/hero/equipped.svg";
import "@splidejs/react-splide/css";
import "./Inventory.scss";
import { getData } from "../../Request/getData";
import { deleteItemById } from "../../Request/deleteData";
import { updateValue } from "../../Request/updateValue";
import { updateEq } from "../../Request/updateEq";
import Perk from "../PerkStats/Perk";
import { PerkInterface } from "../../Interfaces/PerkInterface";

const Inventory = () => {
	const [perks, setPerks] = useState<PerkInterface[]>([]);
	const [price, setPrice] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState<HTMLElement | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [invTab, setInvTab] = useState("attack");
	const sellBtn = useRef<HTMLDivElement | null>(null);
	const eqBtn = useRef<HTMLDivElement | null>(null);
	const sellPrice = { rank1: 100, rank2: 200, rank3: 500, rank4: 1000 };

	const selectedPerk = (e: React.MouseEvent, index: number) => {
		const targetElement = e.target as HTMLElement;
		const inventoryItem = targetElement.closest(".inventory__items-item");
		const inventoryEquipped = (targetElement.parentNode as HTMLElement)
			?.childElementCount;
		const isShown = targetElement.closest(".inventory__items-item-perk");
		const filteredPerks = perks.filter((perk) => perk.perk_type === invTab);
		const perkId =
			filteredPerks.length > index - 1
				? filteredPerks[index - 1].perk1_id
				: 0;
		if (perkId && perkId > 0) {
			setSelectedIndex(perkId);
		} else {
			setSelectedIndex(0);
		}
		const rank = perks[index - 1]?.src;

		if (rank && rank.includes("rank1") && isShown != null) {
			setPrice(sellPrice.rank1);
			sellBtn.current!.setAttribute("data-price", "1");
		} else {
			setPrice(0);
			sellBtn.current!.setAttribute("data-price", "0");
		}

		if (inventoryItem) {
			if (selectedItem) {
				selectedItem.setAttribute("data-selected", "0");
			}

			inventoryItem.setAttribute("data-selected", "1");
			setSelectedItem(inventoryItem as HTMLElement);
		}
		if (inventoryEquipped === 1) {
			eqBtn.current!.setAttribute("data-equipped", "1");
		} else {
			eqBtn.current!.setAttribute("data-equipped", "0");
		}
	};

	const createDivs = (perksArray: PerkInterface[]) => {
		return Array.from({ length: 20 }, (_, index) => (
			<div
				key={index}
				className="inventory__items-item"
				data-selected="0"
				onClick={(e) => selectedPerk(e, index + 1)}
				onDoubleClick={() => {
					setIsVisible(!isVisible);
				}}
			>
				<div className="inventory__items-item-perk">
					{perksArray[index] && (
						<img
							src={perksArray[index].src}
							alt={`${perksArray[index].name}`}
						/>
					)}
					{perksArray[index] && perksArray[index].equipped && (
						<img
							src={checkIcon}
							alt="check icon"
							className="inventory__items-item-perk-eq"
						/>
					)}
				</div>
			</div>
		));
	};
	const sellItem = () => {
		deleteItemById("equipped", selectedIndex);
		const dataToUpdate = { essence: price };
		updateValue("equipped/update-essence", dataToUpdate);
	};

	const changeTab = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		const targetContent = target.textContent as string;
		const inventoryItem = target.closest(".inventory__items-item");
		setSelectedIndex(0);
		setInvTab(targetContent);
		setPrice(0);
		sellBtn.current!.setAttribute("data-price", "0");
		inventoryItem?.setAttribute("data-selected", "0");
		eqBtn.current!.setAttribute("data-equipped", "0");
		selectedItem?.setAttribute("data-selected", "0");
	};

	const equipPerk = () => {
		const data = { perkId: selectedIndex, perkType: invTab };
		updateEq("equipped/update-equipped", data);
	};

	const checkPerk = (visible: boolean, onClose: () => void) => {
		if (visible) {
			const perk = perks.find((perk) => perk.perk1_id === selectedIndex);
			if (perk) {
				return (
					<Perk
						perk_type={perk.perk_type}
						perk_src={perk.src}
						name={perk.name}
						desc={perk.description}
						cost={perk.cost}
						req={perk.perk_req}
						effect={perk.effect}
						base_value={perk.base_value}
						min={perk.min}
						max={perk.max}
						rare_bonus_desc={perk.rare_bonus_desc}
						rare_bonus_min={perk.rare_bonus_min}
						rare_bonus_max={perk.rare_bonus_max}
						rare_bonus_value={perk.rare_bonus_value}
						epic_bonus_desc={perk.epic_bonus_desc}
						epic_bonus_min={perk.epic_bonus_min}
						epic_bonus_max={perk.epic_bonus_max}
						epic_bonus_value={perk.epic_bonus_value}
						legendary_bonus_desc={perk.legendary_bonus_desc}
						legendary_bonus_min={perk.legendary_bonus_min}
						legendary_bonus_max={perk.legendary_bonus_max}
						legendary_bonus_value={perk.legendary_bonus_value}
						hit={perk.hit_chance}
						hit_min={perk.hit_min}
						hit_max={perk.hit_max}
						crit_chance={perk.criticalChance}
						min_crit_chance={perk.min_chance}
						max_crit_chance={perk.max_chance}
						crit_dmg={perk.criticalDamage}
						min_crit_dmg={perk.min_critical}
						max_crit_dmg={perk.max_critical}
						onClose={onClose}
					/>
				);
			}
		}
		return null;
	};
	const closePerk = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		getData("equipped/inv", setPerks);
	}, [sellItem]);

	const chunks = [];
	const chunkSize = 20;

	for (let i = 0; i < perks.length; i += chunkSize) {
		chunks.push(perks.slice(i, i + chunkSize));
	}

	return (
		<div className="inventory">
			<HeroNav />
			<div className="inventory__nav">
				<div
					className="inventory__nav-btn"
					data-selected="1"
					onClick={changeTab}
				>
					<div className="inventory__nav-btn-text">attack</div>
				</div>
				<div
					className="inventory__nav-btn"
					data-selected="0"
					onClick={changeTab}
				>
					<div className="inventory__nav-btn-text">stance</div>
				</div>
				<div
					className="inventory__nav-btn"
					data-selected="0"
					onClick={changeTab}
				>
					<div className="inventory__nav-btn-text">effect</div>
				</div>
				<div
					className="inventory__nav-btn"
					data-selected="0"
					onClick={changeTab}
				>
					<div className="inventory__nav-btn-text">Fusion</div>
				</div>
			</div>
			<Splide aria-label="Inventory Items" className="inventory__items">
				{chunks.map((chunk, index) => (
					<SplideSlide key={index} className="inventory__items-box">
						{createDivs(
							chunk.filter((perk) => perk.perk_type === invTab)
						)}
					</SplideSlide>
				))}
			</Splide>
			<div className="inventory__actions">
				<div
					className="inventory__actions-sell"
					data-price="0"
					ref={sellBtn}
					onClick={sellItem}
				>
					Sell&nbsp;&nbsp;
					<span className="inventory__actions-sell-price">
						{price}&nbsp;
					</span>
					<span className="inventory__actions-sell-icon"></span>
				</div>
				<div
					className="inventory__actions-equip"
					data-equipped="0"
					ref={eqBtn}
					onClick={equipPerk}
				>
					Equipped
				</div>
			</div>
			<div className="inventory__bar">
				<HeroBar />
			</div>
			{checkPerk(isVisible, closePerk)}
		</div>
	);
};

export default Inventory;
