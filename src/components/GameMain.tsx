import { useState, useEffect } from "react";
import blackOrb from "../assets/orbs/blackOrb.svg";
import blueOrb from "../assets/orbs/blueOrb.svg";
import greenOrb from "../assets/orbs/greenOrb.svg";
import purpleOrb from "../assets/orbs/purpleOrb.svg";
import redOrb from "../assets/orbs/redOrb.svg";
import blank from "../assets/orbs/blank.svg";
import "./GameMain.scss";

const width = 8;
const orbColors = [blackOrb, blueOrb, greenOrb, purpleOrb, redOrb];

const GameMain = () => {
	const [orbsOnBoard, setOrbsOnBoard] = useState<string[]>([]);
	const [orbBeingDragged, setOrbBeingDragged] = useState<HTMLElement | null>(
		null
	);
	const [orbBeingReplaced, setOrbBeingReplaced] =
		useState<HTMLElement | null>(null);

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

	const dragStart = (e: React.DragEvent<HTMLElement>) => {
		setOrbBeingDragged(e.target as HTMLElement);
	};
	const dragDrop = (e: React.DragEvent<HTMLElement>) => {
		setOrbBeingReplaced(e.target as HTMLElement);
	};
	const dragEnd = () => {
		const orbBeingDraggedId = parseInt(
			orbBeingDragged?.getAttribute("data-id") ?? ""
		);
		const orbBeingReplacedId = parseInt(
			orbBeingReplaced?.getAttribute("data-id") ?? ""
		);

		orbsOnBoard[orbBeingReplacedId] = orbBeingDragged!.getAttribute(
			"src"
		) as string;
		orbsOnBoard[orbBeingDraggedId] = orbBeingReplaced!.getAttribute(
			"src"
		) as string;

		const validMoves = [
			orbBeingDraggedId - 1,
			orbBeingDraggedId - width,
			orbBeingDraggedId + 1,
			orbBeingDraggedId + width,
		];

		const validMove = validMoves.includes(orbBeingReplacedId);

		const columnOfFour = checkColumnMatchToFour();
		const rowOfFour = checkRowMatchToFour();
		const columnOfThree = checkColumnMatchToThree();
		const rowOfThree = checkRowMatchToThree();

		if (
			orbBeingReplacedId &&
			validMove &&
			(rowOfThree || rowOfFour || columnOfFour || columnOfThree)
		) {
			setOrbBeingDragged(null);
			setOrbBeingReplaced(null);
		} else {
			orbsOnBoard[orbBeingReplacedId] = orbBeingReplaced!.getAttribute(
				"src"
			) as string;
			orbsOnBoard[orbBeingDraggedId] = orbBeingDragged!.getAttribute(
				"src"
			) as string;
			setOrbsOnBoard([...orbsOnBoard]);
		}
	};

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
						draggable={true}
						onDragStart={dragStart}
						onDragOver={(e) => e.preventDefault()}
						onDragEnter={(e) => e.preventDefault()}
						onDragLeave={(e) => e.preventDefault()}
						onDrop={dragDrop}
						onDragEnd={dragEnd}
					/>
				))}
			</div>
		</div>
	);
};

export default GameMain;
