import { useState, useEffect, useRef } from "react";
import blackOrb from "../assets/orbs/blackOrb.svg";
import blueOrb from "../assets/orbs/blueOrb.svg";
import greenOrb from "../assets/orbs/greenOrb.svg";
import purpleOrb from "../assets/orbs/purpleOrb.svg";
import redOrb from "../assets/orbs/redOrb.svg";
import blank from "../assets/orbs/blank.svg";
import gameFrame from "../assets/game/gameFrame.svg";
import "./GameMain.scss";
import Turns from "./Turns";
import Enemy from "./Enemy";
import HeroStat from "./HeroStat";
import { BotCombinations } from "../data/BotCombinations";

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
	const [swapped, setSwapped] = useState(false);
	const [botMove, setBotMove] = useState(false);
	const [botCanMove, setBotCanMove] = useState(false);
	const [turn, setTurn] = useState(1);
	const maskRef = useRef<HTMLDivElement>(null);

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

	const bot = () => {
		setOrbsOnBoard([...orbsOnBoard]);
		setSwapped(false);
		maskRef.current!.setAttribute("data-mymove", "0");
		setTimeout(() => {
			setTurn((prevTurn) => prevTurn + 1);
		}, 1200);

		// for (let i = 0; i < 64; i++) {
		// 	const checkSwapV1 = [i, i + 1, i + 2 + width];
		// 	const checkSwapV2 = [i, i + 1, i + 2 - width];
		// 	const checkSwapV3 = [i, i + 1, i - 1 - width];
		// 	const checkSwapV4 = [i, i + 1, i - 1 + width];
		// 	const checkSwapV5 = [i, i + width, i + 2 * width - 1];
		// 	const checkSwapV6 = [i, i + width, i + 2 * width + 1];
		// 	const checkSwapV7 = [i, i - width, i - 2 * width - 1];
		// 	const checkSwapV8 = [i, i - width, i - 2 * width + 1];
		// 	const checkSwapV9 = [i, i - width, i - 3 * width];
		// 	const checkSwapV10 = [i, i + width, i + 3 * width];
		// 	const checkSwapV11 = [i, i + 1, i + 3];
		// 	const checkSwapV12 = [i, i - 1, i - 3];

		// 	const orb1 = document.querySelector(`[data-id="${i}"]`);
		// 	const orb2 = document.querySelector(`[data-id="${i + 1}"]`);
		// 	const orb3 = document.querySelector(`[data-id="${i + 2 + width}"]`);
		// 	const orb4 = document.querySelector(`[data-id="${i + 2 - width}"]`);
		// 	const orb5 = document.querySelector(`[data-id="${i - 1 - width}"]`);
		// 	const orb6 = document.querySelector(`[data-id="${i - 1 + width}"]`);
		// 	const orb7 = document.querySelector(
		// 		`[data-id="${i + 2 * width - 1}"]`
		// 	);
		// 	const orb8 = document.querySelector(`[data-id="${i + width}"]`);
		// 	const orb9 = document.querySelector(
		// 		`[data-id="${i + 2 * width + 1}"]`
		// 	);
		// 	const orb10 = document.querySelector(
		// 		`[data-id="${i - 2 * width - 1}"]`
		// 	);
		// 	const orb11 = document.querySelector(`[data-id="${i - width}"]`);
		// 	const orb12 = document.querySelector(
		// 		`[data-id="${i - 2 * width + 1}"]`
		// 	);
		// 	const orb13 = document.querySelector(
		// 		`[data-id="${i - 3 * width}"]`
		// 	);
		// 	const orb14 = document.querySelector(
		// 		`[data-id="${i + 3 * width}"]`
		// 	);
		// 	const orb15 = document.querySelector(`[data-id="${i + 3}"]`);
		// 	const orb16 = document.querySelector(`[data-id="${i - 3}"]`);
		// 	const orb17 = document.querySelector(`[data-id="${i - 1}"]`);

		// 	//COMBINATIONS
		// 	const invalidCombinationV1 = [
		// 		6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 56, 57,
		// 		58, 59, 60, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV2 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47,
		// 		54, 55, 62, 63,
		// 	];
		// 	const invalidCombinationV3 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47,
		// 		48, 55, 56, 63,
		// 	];
		// 	const invalidCombinationV4 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47,
		// 		48, 55, 56, 57, 58, 59, 60, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV5 = [
		// 		0, 8, 16, 24, 32, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
		// 		58, 59, 60, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV6 = [
		// 		7, 15, 23, 31, 39, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
		// 		58, 59, 60, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV7 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24,
		// 		32, 40, 48, 56,
		// 	];
		// 	const invalidCombinationV8 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 23, 31,
		// 		39, 47, 55, 63,
		// 	];
		// 	const invalidCombinationV9 = [
		// 		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
		// 		18, 19, 20, 21, 22, 23,
		// 	];
		// 	const invalidCombinationV10 = [
		// 		40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
		// 		56, 57, 58, 59, 60, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV11 = [
		// 		5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46,
		// 		47, 53, 54, 55, 61, 62, 63,
		// 	];
		// 	const invalidCombinationV12 = [
		// 		0, 1, 2, 8, 9, 10, 16, 17, 18, 24, 25, 26, 32, 33, 34, 40, 41,
		// 		42, 48, 49, 50, 56, 57, 58,
		// 	];

		// 	const matchColor = orbsOnBoard[i];

		// 	//SAME VALUES
		// 	const hasSameValue1 = checkSwapV1.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue2 = checkSwapV2.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue3 = checkSwapV3.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue4 = checkSwapV4.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue5 = checkSwapV5.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue6 = checkSwapV6.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue7 = checkSwapV7.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue8 = checkSwapV8.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue9 = checkSwapV9.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue10 = checkSwapV10.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue11 = checkSwapV11.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});
		// 	const hasSameValue12 = checkSwapV12.every((number) => {
		// 		return orbsOnBoard[number] === matchColor;
		// 	});

		// 	const combinations = [
		// 		{
		// 			val: hasSameValue1 && !invalidCombinationV1.includes(i),
		// 			temp: i + 2,
		// 			swap: i + 2 + width,
		// 			orb1: orb1,
		// 			orb2: orb2,
		// 			orb3: orb3,
		// 		},
		// 		{
		// 			val: hasSameValue2 && !invalidCombinationV2.includes(i),
		// 			temp: i + 2,
		// 			swap: i + 2 - width,
		// 			orb1: orb1,
		// 			orb2: orb2,
		// 			orb3: orb4,
		// 		},
		// 		{
		// 			val: hasSameValue3 && !invalidCombinationV3.includes(i),
		// 			temp: i - 1,
		// 			swap: i - 1 - width,
		// 			orb1: orb1,
		// 			orb2: orb2,
		// 			orb3: orb5,
		// 		},
		// 		{
		// 			val: hasSameValue4 && !invalidCombinationV4.includes(i),
		// 			temp: i - 1,
		// 			swap: i - 1 + width,
		// 			orb1: orb1,
		// 			orb2: orb2,
		// 			orb3: orb6,
		// 		},
		// 		{
		// 			val: hasSameValue5 && !invalidCombinationV5.includes(i),
		// 			temp: i + 2 * width,
		// 			swap: i + 2 * width - 1,
		// 			orb1: orb1,
		// 			orb2: orb8,
		// 			orb3: orb7,
		// 		},
		// 		{
		// 			val: hasSameValue6 && !invalidCombinationV6.includes(i),
		// 			temp: i + 2 * width,
		// 			swap: i + 2 * width + 1,
		// 			orb1: orb1,
		// 			orb2: orb8,
		// 			orb3: orb9,
		// 		},
		// 		{
		// 			val: hasSameValue7 && !invalidCombinationV7.includes(i),
		// 			temp: i - 2 * width,
		// 			swap: i - 2 * width - 1,
		// 			orb1: orb1,
		// 			orb2: orb11,
		// 			orb3: orb10,
		// 		},
		// 		{
		// 			val: hasSameValue8 && !invalidCombinationV8.includes(i),
		// 			temp: i - 2 * width,
		// 			swap: i - 2 * width + 1,
		// 			orb1: orb1,
		// 			orb2: orb11,
		// 			orb3: orb12,
		// 		},
		// 		{
		// 			val: hasSameValue9 && !invalidCombinationV9.includes(i),
		// 			temp: i - 2 * width,
		// 			swap: i - 3 * width,
		// 			orb1: orb1,
		// 			orb2: orb11,
		// 			orb3: orb13,
		// 		},
		// 		{
		// 			val: hasSameValue10 && !invalidCombinationV10.includes(i),
		// 			temp: i + 2 * width,
		// 			swap: i + 3 * width,
		// 			orb1: orb1,
		// 			orb2: orb8,
		// 			orb3: orb14,
		// 		},
		// 		{
		// 			val: hasSameValue11 && !invalidCombinationV11.includes(i),
		// 			temp: i + 2,
		// 			swap: i + 3,
		// 			orb1: orb1,
		// 			orb2: orb2,
		// 			orb3: orb15,
		// 		},
		// 		{
		// 			val: hasSameValue12 && !invalidCombinationV12.includes(i),
		// 			temp: i - 2,
		// 			swap: i - 3,
		// 			orb1: orb1,
		// 			orb2: orb17,
		// 			orb3: orb16,
		// 		},
		// 	];
		// 	for (const combination of combinations) {
		// 		if (combination.val) {
		// 			combination.orb1!.setAttribute("data-select", "1");
		// 			combination.orb2!.setAttribute("data-select", "1");
		// 			combination.orb3!.setAttribute("data-select", "1");

		// 			setTimeout(() => {
		// 				const temp = orbsOnBoard[combination.temp];
		// 				const swapOrb = orbsOnBoard[combination.swap];
		// 				orbsOnBoard[combination.temp] = swapOrb;
		// 				orbsOnBoard[combination.swap] = temp;
		// 				setOrbsOnBoard([...orbsOnBoard]);
		// 				setSwapped(true);
		// 			}, 1000);

		// 			setTimeout(() => {
		// 				combination.orb1!.setAttribute("data-select", "0");
		// 				combination.orb2!.setAttribute("data-select", "0");
		// 				combination.orb3!.setAttribute("data-select", "0");
		// 			}, 800);
		// 			setOrbsOnBoard([...orbsOnBoard]);
		// 			setBotMove(false);
		// 			return false;
		// 		}
		// 	}

		// 	if (orbsOnBoard[i + width] === blank) {
		// 		orbsOnBoard[i + width] = orbsOnBoard[i];
		// 		orbsOnBoard[i] = blank;
		// 	}
		// }
		BotCombinations(
			width,
			orbsOnBoard,
			setOrbsOnBoard,
			setSwapped,
			setBotMove,
			blank
		);
		setOrbsOnBoard([...orbsOnBoard]);
		setBotCanMove(false);
		return false;
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
			} else {
				setTimeout(() => {
					setBotCanMove(true);
				}, 300);
			}

			if (orbsOnBoard[i + width] === blank) {
				orbsOnBoard[i + width] = orbsOnBoard[i];
				orbsOnBoard[i] = blank;
			}
		}
	};

	const selectOrbs = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const selectedOrb = e.target as HTMLElement;

		if (orbBeingFirst == null) {
			setOrbBeingFirst(e.target as HTMLElement);
			selectedOrb.setAttribute("data-select", "1");
		} else {
			const secondOrbId = e.target as HTMLElement;
			const validFirst = parseInt(
				orbBeingFirst?.getAttribute("data-id") ?? ""
			);
			const validSecond = parseInt(
				secondOrbId.getAttribute("data-id") ?? ""
			);
			if (
				validFirst - validSecond === 1 ||
				validSecond - validFirst === 1 ||
				validFirst - validSecond === 8 ||
				validSecond - validFirst === 8
			) {
				setSwapped(false);
				setOrbBeingSecond(e.target as HTMLElement);
				selectedOrb.setAttribute("data-select", "1");
			}
			if (validFirst === validSecond) {
				selectedOrb.setAttribute("data-select", "0");
				setOrbBeingFirst(null);
				setOrbBeingSecond(null);
			}
		}
	};

	useEffect(() => {
		if (swapped) {
			maskRef.current!.setAttribute("data-mymove", "1");
		} else {
			maskRef.current?.setAttribute("data-mymove", "0");
		}
		if (orbBeingFirst != null && orbBeingSecond != null) {
			if (orbBeingFirst != null && orbBeingFirst == orbBeingSecond) {
				orbBeingFirst!.setAttribute("data-select", "0");
				orbBeingSecond!.setAttribute("data-select", "0");
				setOrbBeingFirst(null);
				setOrbBeingSecond(null);
			} else {
				setOrbBeingFirst(null);
				setOrbBeingSecond(null);
			}
		}
		if (orbBeingSecond != null) {
			const orbBeingFirstId = parseInt(
				orbBeingFirst?.getAttribute("data-id") ?? ""
			);
			const orbBeingSecondId = parseInt(
				orbBeingSecond?.getAttribute("data-id") ?? ""
			);
			if (
				orbBeingFirstId - orbBeingSecondId === 1 ||
				orbBeingSecondId - orbBeingFirstId === 1 ||
				orbBeingFirstId - orbBeingSecondId === 8 ||
				orbBeingSecondId - orbBeingFirstId === 8
			) {
				const firstChecker = orbBeingFirst?.getAttribute("src");
				const secondChecker = orbBeingSecond?.getAttribute("src");
				setTimeout(() => {
					orbBeingFirst?.setAttribute("data-select", "0");
					orbBeingSecond?.setAttribute("data-select", "0");
					while (
						firstChecker === orbsOnBoard[orbBeingFirstId] &&
						secondChecker === orbsOnBoard[orbBeingSecondId]
					) {
						orbsOnBoard[orbBeingSecondId] =
							orbBeingFirst!.getAttribute("src") as string;
						orbsOnBoard[orbBeingFirstId] =
							orbBeingSecond!.getAttribute("src") as string;
						setOrbsOnBoard([...orbsOnBoard]);
						console.log("done");
					}
					setBotMove(true);
				}, 300);
			}
		}
	}, [orbBeingSecond, orbBeingFirst, orbsOnBoard, swapped]);

	const createBoard = () => {
		const randomOrbs = [];
		for (let i = 0; i < width * width; i++) {
			const randomColor =
				orbColors[Math.floor(Math.random() * orbColors.length)];
			randomOrbs.push(randomColor);
		}
		setOrbsOnBoard(randomOrbs);
		setSwapped(true);
	};

	useEffect(() => {
		createBoard();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			const columnMatchToFour = checkColumnMatchToFour();
			const rowMatchToFour = checkRowMatchToFour();
			const columnMatchToThree = checkColumnMatchToThree();
			const rowMatchToThree = checkRowMatchToThree();
			moveOrbsBelow();
			setOrbsOnBoard([...orbsOnBoard]);

			if (
				!columnMatchToFour &&
				!rowMatchToFour &&
				!columnMatchToThree &&
				!rowMatchToThree &&
				botMove &&
				botCanMove == true
			) {
				clearInterval(timer);
				bot();
			}
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
		<>
			<Enemy />
			<Turns turn={turn} />
			<div className="game__main">
				<div
					className="game__main-mask"
					data-mymove={1}
					ref={maskRef}
				></div>
				<div className="game__main-board">
					{orbsOnBoard.map((orbColor, index) => (
						<img
							key={index}
							src={orbColor}
							alt={orbColor}
							data-id={index}
							data-select={0}
							onClick={selectOrbs}
							draggable="false"
						/>
					))}
				</div>
				<div className="game__main-frame">
					<img src={gameFrame} alt="Board Frame" />
				</div>
			</div>
			<HeroStat />
		</>
	);
};

export default GameMain;
