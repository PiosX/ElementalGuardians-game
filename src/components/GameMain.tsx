import { useState, useEffect } from "react";
import blackOrb from "../assets/orbs/blackOrb.svg";
import blueOrb from "../assets/orbs/blueOrb.svg";
import greenOrb from "../assets/orbs/greenOrb.svg";
import purpleOrb from "../assets/orbs/purpleOrb.svg";
import redOrb from "../assets/orbs/redOrb.svg";
import blank from "../assets/orbs/blank.svg";
import "./GameMain.scss";

const width = 8;
const orbColors = [
	blackOrb,
	blackOrb,
	blueOrb,
	greenOrb,
	purpleOrb,
	redOrb,
	blueOrb,
	greenOrb,
	purpleOrb,
	redOrb,
];

const GameMain = () => {
	const [orbsOnBoard, setOrbsOnBoard] = useState<string[]>([]);
	const [orbBeingFirst, setOrbBeingFirst] = useState<HTMLElement | null>(
		null
	);
	const [orbBeingSecond, setOrbBeingSecond] = useState<HTMLElement | null>(
		null
	);

	const checkColumnMatchToFour = () => {
		for (let i = 0; i <= 39; i++) {
			const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
			const matchColor = orbsOnBoard[i];

			if (
				columnOfFour.every(
					(number) => orbsOnBoard[number] === matchColor
				)
			) {
				columnOfFour.forEach((number) => (orbsOnBoard[number] = blank));
				return true;
			}
		}
	};

	const checkColumnMatchToThree = () => {
		for (let i = 0; i <= 47; i++) {
			const columnOfThree = [i, i + width, i + width * 2];
			const matchColor = orbsOnBoard[i];

			if (
				columnOfThree.every(
					(number) => orbsOnBoard[number] === matchColor
				)
			) {
				columnOfThree.forEach(
					(number) => (orbsOnBoard[number] = blank)
				);
				return true;
			}
		}
	};

	// const bot = () => {
	// 	for (let i = 0; i < 64; i++) {
	// 		const checkSwapV1 = [i, i + 1, i + 2 - width];
	// 		const checkSwapV2 = [i, i + 1, i + 2 + width];
	// 		const checkSwapV3 = [i, i + 1, i - 1 - width];
	// 		const checkSwapV4 = [i, i + 1, i - 1 + width];

	// 		const matchColor = orbsOnBoard[i];
	// 		if (
	// 			checkSwapV1.every(
	// 				(number) => orbsOnBoard[number] === matchColor
	// 			)
	// 		) {
	// 			const temp = orbsOnBoard[i + 2];
	// 			const swapOrb = orbsOnBoard[i + 2 - width];
	// 			orbsOnBoard[i + 2] = swapOrb;
	// 			orbsOnBoard[i + 2 - width] = temp;
	// 			setOrbsOnBoard([...orbsOnBoard]);
	// 		} else if (
	// 			checkSwapV2.every(
	// 				(number) => orbsOnBoard[number] === matchColor
	// 			)
	// 		) {
	// 			const temp = orbsOnBoard[i + 2];
	// 			const swapOrb = orbsOnBoard[i + 2 + width];
	// 			orbsOnBoard[i + 2] = swapOrb;
	// 			orbsOnBoard[i + 2 + width] = temp;
	// 			setOrbsOnBoard([...orbsOnBoard]);
	// 		} else if (
	// 			checkSwapV3.every(
	// 				(number) => orbsOnBoard[number] === matchColor
	// 			)
	// 		) {
	// 			const temp = orbsOnBoard[i - 1];
	// 			const swapOrb = orbsOnBoard[i - 1 - width];
	// 			orbsOnBoard[i - 1] = swapOrb;
	// 			orbsOnBoard[i - 1 - width] = temp;
	// 			setOrbsOnBoard([...orbsOnBoard]);
	// 		} else if (
	// 			checkSwapV4.every(
	// 				(number) => orbsOnBoard[number] === matchColor
	// 			)
	// 		) {
	// 			const temp = orbsOnBoard[i - 1];
	// 			const swapOrb = orbsOnBoard[i - 1 + width];
	// 			orbsOnBoard[i - 1] = swapOrb;
	// 			orbsOnBoard[i - 1 + width] = temp;
	// 			setOrbsOnBoard([...orbsOnBoard]);
	// 		}

	// 		if (orbsOnBoard[i + width] === blank) {
	// 			orbsOnBoard[i + width] = orbsOnBoard[i];
	// 			orbsOnBoard[i] = blank;
	// 		}
	// 	}
	// 	console.log("changed");
	// };

	const checkRowMatchToFour = () => {
		for (let i = 0; i < 64; i++) {
			const rowOfFour = [i, i + 1, i + 2, i + 3];
			const matchColor = orbsOnBoard[i];
			const notValid = [
				5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46,
				47, 53, 54, 55, 62, 63, 64,
			];

			if (notValid.includes(i)) continue;

			if (
				rowOfFour.every((number) => orbsOnBoard[number] === matchColor)
			) {
				rowOfFour.forEach((number) => (orbsOnBoard[number] = blank));
				return true;
			}
		}
	};

	const checkRowMatchToThree = () => {
		for (let i = 0; i < 64; i++) {
			const rowOfThree = [i, i + 1, i + 2];
			const matchColor = orbsOnBoard[i];
			const notValid = [
				6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
			];

			if (notValid.includes(i)) continue;

			if (
				rowOfThree.every((number) => orbsOnBoard[number] === matchColor)
			) {
				rowOfThree.forEach((number) => (orbsOnBoard[number] = blank));
				return true;
			}
		}
	};

	const moveOrbsBelow = () => {
		for (let i = 0; i <= 55; i++) {
			const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
			const isFirstRow = firstRow.includes(i);

			if (isFirstRow && orbsOnBoard[i] === blank) {
				const randomNumber = Math.floor(
					Math.random() * orbColors.length
				);
				orbsOnBoard[i] = orbColors[randomNumber];
			}

			if (orbsOnBoard[i + width] === blank) {
				orbsOnBoard[i + width] = orbsOnBoard[i];
				orbsOnBoard[i] = blank;
			}
		}
	};

	const selectOrbs = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		if (orbBeingFirst == null) {
			setOrbBeingFirst(e.target as HTMLElement);
		} else {
			setOrbBeingSecond(e.target as HTMLElement);
		}
	};

	useEffect(() => {
		if (orbBeingFirst != null && orbBeingSecond != null) {
			setOrbBeingFirst(null);
			setOrbBeingSecond(null);
		}
		if (orbBeingSecond != null) {
			const orbBeingFirstId = parseInt(
				orbBeingFirst?.getAttribute("data-id") ?? ""
			);
			const orbBeingSecondId = parseInt(
				orbBeingSecond?.getAttribute("data-id") ?? ""
			);

			setTimeout(() => {
				orbsOnBoard[orbBeingSecondId] = orbBeingFirst!.getAttribute(
					"src"
				) as string;
				orbsOnBoard[orbBeingFirstId] = orbBeingSecond!.getAttribute(
					"src"
				) as string;
				setOrbsOnBoard([...orbsOnBoard]);
			}, 300);
		}
	}, [orbBeingSecond, orbBeingFirst, orbsOnBoard]);
	const createBoard = () => {
		const randomOrbs = [];
		for (let i = 0; i < width * width; i++) {
			const randomColor =
				orbColors[Math.floor(Math.random() * orbColors.length)];
			randomOrbs.push(randomColor);
		}
		setOrbsOnBoard(randomOrbs);
	};

	useEffect(() => {
		createBoard();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			checkColumnMatchToFour();
			checkRowMatchToFour();
			checkColumnMatchToThree();
			checkRowMatchToThree();
			moveOrbsBelow();
			setOrbsOnBoard([...orbsOnBoard]);
		}, 100);
		return () => clearInterval(timer);
	}, [
		checkColumnMatchToFour,
		checkRowMatchToFour,
		checkColumnMatchToThree,
		checkRowMatchToThree,
		moveOrbsBelow,
		orbsOnBoard,
	]);

	return (
		<div className="game__main">
			<div className="game__main-board">
				{orbsOnBoard.map((orbColor, index) => (
					<img
						key={index}
						src={orbColor}
						alt={orbColor}
						data-id={index}
						onClick={selectOrbs}
						draggable="false"
					/>
				))}
			</div>
		</div>
	);
};

export default GameMain;
