// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState, useRef } from "react";
import HeroBar from "../Hero/HeroBar";
import HeroNav from "../Hero/HeroNav";
import "@splidejs/react-splide/css";
import "./Inventory.scss";
import { getData } from "../../Request/getData";
import { deleteItemById } from "../../Request/deleteData";

interface Perk {
	perk1_id: number;
	name: string;
	src: string;
}

const Inventory = () => {
	const [perks, setPerks] = useState<Perk[]>([]);
	const [price, setPrice] = useState(0);
	const [selectedItem, setSelectedItem] = useState<HTMLElement | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const sellBtn = useRef<HTMLDivElement | null>(null);
	const sellPrice = { rank1: 100, rank2: 200, rank3: 500, rank4: 1000 };

	const selectedPerk = (e: React.MouseEvent, index: number) => {
		const targetElement = e.target as HTMLElement;
		const inventoryItem = targetElement.closest(".inventory__items-item");
		const perkId = perks[index - 1]?.perk1_id;
		if (perkId > 0) {
			setSelectedIndex(perkId);
		}

		const rank = perks[index - 1]?.src;
		if (rank && rank.includes("rank1")) {
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
	};

	const createDivs = (perksArray: Perk[]) => {
		return Array.from({ length: 20 }, (_, index) => (
			<div
				key={index}
				className="inventory__items-item"
				data-selected="0"
				onClick={(e) => selectedPerk(e, index + 1)}
			>
				<div className="inventory__items-item-perk">
					{perksArray[index] && (
						<img
							src={perksArray[index].src}
							alt={`${perksArray[index].name}`}
						/>
					)}
				</div>
			</div>
		));
	};

	const sellItem = () => {
		deleteItemById("equipped", selectedIndex);
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
				<div className="inventory__nav-btn" data-selected="1">
					<div className="inventory__nav-btn-text">Attack</div>
				</div>
				<div className="inventory__nav-btn" data-selected="0">
					<div className="inventory__nav-btn-text">Stance</div>
				</div>
				<div className="inventory__nav-btn" data-selected="0">
					<div className="inventory__nav-btn-text">Effect</div>
				</div>
				<div className="inventory__nav-btn" data-selected="0">
					<div className="inventory__nav-btn-text">Fusion</div>
				</div>
			</div>
			<Splide aria-label="Inventory Items" className="inventory__items">
				{chunks.map((chunk, index) => (
					<SplideSlide key={index} className="inventory__items-box">
						{createDivs(chunk)}
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
				<div className="inventory__actions-equip">Equipped</div>
			</div>
			<div className="inventory__bar">
				<HeroBar />
			</div>
		</div>
	);
};

export default Inventory;
