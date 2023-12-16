// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeroBar from "../Hero/HeroBar";
import HeroNav from "../Hero/HeroNav";
import perk from "../../assets/perks/hero/attack/rank1/claw.svg";
import "@splidejs/react-splide/css";
import "./Inventory.scss";

const Inventory = () => {
	const divs = Array.from({ length: 20 }, (_, index) => (
		<div key={index} className="inventory__items-item">
			<div className="inventory__items-item-perk">
				<img src={perk} alt="idk" />
			</div>
		</div>
	));
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
				<SplideSlide className="inventory__items-box">
					{divs}
				</SplideSlide>
				<SplideSlide className="inventory__items-box">
					{divs}
				</SplideSlide>
			</Splide>
			<div className="inventory__actions">
				<div className="inventory__actions-sell">
					Sell&nbsp;&nbsp;
					<span className="inventory__actions-sell-price">
						123&nbsp;
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
