import "./GameMain.scss";
import BlackOrb from "./orbs/BlackOrb";
import BlueOrb from "./orbs/BlueOrb";
import GreenOrb from "./orbs/GreenOrb";
import PurpleOrb from "./orbs/PurpleOrb";
import RedOrb from "./orbs/RedOrb";
import { useState, useEffect } from "react";

const GameMain = () => {
	const [divs, setDivs] = useState<React.ReactNode[]>([]);
	const [selectedOrbs, setSelectedOrbs] = useState<
		React.ReactNode | undefined
	>();

	useEffect(() => {
		const createBoard = () => {
			const orbs = [
				<GreenOrb />,
				<BlueOrb />,
				<RedOrb />,
				<PurpleOrb />,
				<BlackOrb />,
			];

			const newDivs = [];

			for (let i = 0; i < 64; i++) {
				const squareColor =
					Math.floor(i / 8) % 2 === i % 2
						? "game__main-board-pool"
						: "game__main-board-pool game__main-board-pool--darker";
				const randomIndex = Math.floor(Math.random() * orbs.length);

				newDivs.push(
					<div key={i} className={squareColor} data-orb={i}>
						{orbs[randomIndex]}
					</div>
				);
			}

			return newDivs;
		};

		const generatedDivs = createBoard();
		setDivs(generatedDivs);
	}, []);
	const selectOrbs = (e: any) => {
		const value = e.target.dataset.orb;
		const selectedOrb = divs[value];

		if (selectedOrbs) {
			const updatedItems = [...divs];
			const selectedIndex = updatedItems.findIndex(
				(orb) => orb === selectedOrbs
			);
			updatedItems[value] = selectedOrbs;
			updatedItems[selectedIndex] = selectedOrb;
			setDivs(updatedItems);
			setSelectedOrbs(undefined);
		} else {
			setSelectedOrbs(selectedOrb);
		}
	};
	console.log(selectedOrbs);
	return (
		<div className="game__main" onClick={selectOrbs}>
			<div className="game__main-board">{divs}</div>
		</div>
	);
};

export default GameMain;
