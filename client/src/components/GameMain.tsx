import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Request/getData";
import { Hero } from "../Interfaces/HeroInterface";
import { MyPerksInterface } from "../Interfaces/MyPerksInterface";
import { EnemyInterface } from "../Interfaces/EnemyInterface";
import { EnemyPerksInterface } from "../Interfaces/EnemyPerksInterface";
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
import { collectPoints } from "./MainGameFunctions/collectPoints";
import { createBoard } from "./MainGameFunctions/createBoard";
import Lose from "./AfterMatch/Lose";
import Win from "./AfterMatch/Win";
import { updateData } from "../Request/updateData";
import { getEnemyById } from "../Request/getEnemyById";
import Angel from "./Angel";
import { AngelInterface } from "../Interfaces/AngelInterface";
import { getDataById } from "../Request/getDataById";
import {
	getRandomNumber,
	getRandomPerk,
} from "./MainGameFunctions/getRandomNumber";

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
	const [canPlay, setCanPlay] = useState(false);
	const [swapped, setSwapped] = useState(false);
	const [botMove, setBotMove] = useState(false);
	const [botCanMove, setBotCanMove] = useState(false);
	const [turn, setTurn] = useState(1);
	const [enemyCollected, setEnemyCollected] = useState(0);
	const [heroCollected, setHeroCollected] = useState(0);
	const [isMatching, setIsMatching] = useState(false);
	const [isMatchingEnemy, setIsMatchingEnemy] = useState(false);
	const [heroWon, setHeroWon] = useState<null | boolean>(null);
	const [angel, setAngel] = useState<AngelInterface[]>([]);
	const [angelPerks, setAngelPerks] = useState<AngelInterface[]>([]);
	const [graces, setGraces] = useState<AngelInterface[]>([]);
	const [heroStats, setHeroStats] = useState<Hero[]>([]);
	const [heroPerks, setHeroPerks] = useState<MyPerksInterface[]>([]);
	const [enemy, setEnemy] = useState<{
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null>(null);
	const [angelId, setAngelId] = useState(getRandomNumber(1, 8));
	const [showAngel, setShowAngel] = useState(false);
	const gracesSize = new Set(graces.map((item) => item.blessing_id));

	const { index } = useParams();
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
				if (canPlay && enemy) {
					if (
						matchColor === heroPerks[0].perk_req &&
						botMove &&
						heroPerks.length > 0
					) {
						setIsMatching(true);
					}
					if (
						matchColor === enemy.perks[0].perk_req &&
						botCanMove &&
						botMove === false &&
						enemy.perks.length > 0
					) {
						setIsMatchingEnemy(true);
					}
				}

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
				if (canPlay && enemy) {
					if (
						matchColor === heroPerks[0].perk_req &&
						botMove &&
						heroPerks.length > 0
					) {
						setIsMatching(true);
					}
					if (
						matchColor === enemy.perks[0].perk_req &&
						botCanMove &&
						botMove === false &&
						enemy.perks.length > 0
					) {
						console.log("match");
						setIsMatchingEnemy(true);
					}
				}

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

		BotCombinations(
			width,
			orbsOnBoard,
			setOrbsOnBoard,
			setSwapped,
			setBotMove
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
				if (canPlay && enemy) {
					if (
						matchColor === heroPerks[0].perk_req &&
						botMove &&
						heroPerks.length > 0
					) {
						setIsMatching(true);
					}
					if (
						matchColor === enemy.perks[0].perk_req &&
						botCanMove &&
						botMove === false &&
						enemy.perks.length > 0
					) {
						setIsMatchingEnemy(true);
					}
				}

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
				if (canPlay && enemy) {
					if (
						matchColor === heroPerks[0].perk_req &&
						botMove &&
						heroPerks.length > 0
					) {
						setIsMatching(true);
					}
					if (
						matchColor === enemy.perks[0].perk_req &&
						botCanMove &&
						botMove === false &&
						enemy.perks.length > 0
					) {
						setIsMatchingEnemy(true);
					}
				}

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
			setCanPlay(true);
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
					}
					setBotMove(true);
				}, 300);
			}
		}
	}, [orbBeingSecond, orbBeingFirst, orbsOnBoard, swapped]);

	const checkWinner = () => {
		if (enemy) {
			if (heroStats.length > 0 && enemy.enemy != null) {
				if (heroStats[0].health <= 0) {
					setHeroWon(false);
				}
				if (enemy.enemy.health <= 0) {
					setHeroWon(true);
				}
			}
		}
	};

	const addExp = () => {
		if (enemy != null) {
			const data = {
				enemyId: enemy.enemy.enemy_id,
			};
			if (heroWon) {
				updateData("hero-stats/add-exp", data);
			}
		}
	};

	const getRandomRarity = () => {
		const randomNumber = Math.floor(Math.random() * 1000) + 1;
		if (randomNumber <= 650) return "normal";
		if (randomNumber <= 850) return "rare";
		if (randomNumber <= 950) return "epic";
		return "legendary";
	};

	const addRarityColumn = (array: AngelInterface[]) => {
		return array.map((obj) => {
			const rarity = getRandomRarity();
			return { ...obj, rarity };
		});
	};

	const drawBls = () => {
		const perks = addRarityColumn(angel);

		const filterPerks = perks.filter((obj) => obj.level === 1);
		let chosenPerks = [];
		const minId = filterPerks.reduce(
			(min, obj) => (obj.blessing_id < min ? obj.blessing_id : min),
			filterPerks[0]?.blessing_id
		);
		const maxId = filterPerks.reduce(
			(max, obj) => (obj.blessing_id > max ? obj.blessing_id : max),
			filterPerks[0]?.blessing_id
		);
		if (angelPerks.length === 0) {
			const firstPerk = getRandomPerk(minId, maxId);
			let secondPerk: number, thirdPerk: number;
			do {
				secondPerk = getRandomPerk(minId, maxId);
				thirdPerk = getRandomPerk(minId, maxId);
			} while (
				firstPerk === secondPerk ||
				firstPerk === thirdPerk ||
				secondPerk === thirdPerk
			);
			chosenPerks = filterPerks.filter(
				(perk) =>
					perk.blessing_id === firstPerk ||
					perk.blessing_id === secondPerk ||
					perk.blessing_id === thirdPerk
			);
			setAngelPerks(chosenPerks);
		}
	};

	useEffect(() => {
		if (heroCollected >= 3 && angelPerks.length === 0) {
			drawBls();
		}
	}, [heroCollected]);

	useEffect(() => {
		addExp();
	}, [heroWon]);

	useEffect(() => {
		createBoard(width, orbColors, setOrbsOnBoard, setSwapped);
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

	useEffect(() => {
		if (enemy) {
			collectPoints(
				heroCollected,
				enemyCollected,
				isMatching,
				isMatchingEnemy,
				heroPerks,
				enemy.perks,
				setHeroCollected,
				setEnemyCollected,
				setIsMatching,
				setIsMatchingEnemy,
				heroStats,
				enemy.enemy ? [enemy.enemy] : [],
				setAngelId,
				setShowAngel
			);
		}

		checkWinner();
	}, [botMove, isMatching, isMatchingEnemy, swapped]);

	useEffect(() => {
		const randomAngel = getRandomNumber(1, 8);
		setAngelId(randomAngel);
		getData("hero-stats", setHeroStats);
		getData("my-perks", setHeroPerks);
		// getData("enemy-stats", setEnemy);
		getEnemyById(`enemy-stats/${index}`, setEnemy, { enemyId: index });
		getDataById(`angels/${angelId}`, setAngel, { enemyId: angelId });
		// getEnemyById(`enemy-stats/${perkId}`, (data) => {
		// 	if (Array.isArray(data)) {
		// 		const reversedPerks = [...data].reverse();
		// 		setEnemyPerks(reversedPerks as EnemyPerksInterface[]);
		// 	}
		// });
	}, []);
	return (
		<>
			{angel && showAngel && (
				<Angel
					angel={angelPerks}
					setGraces={setGraces}
					setHeroCollected={setHeroCollected}
				/>
			)}
			{heroWon === null ? (
				""
			) : heroWon ? (
				<Win exp={heroStats[0].exp} exp_req={heroStats[0].exp_req} />
			) : (
				<Lose />
			)}
			{enemy && (
				<Enemy
					collected={enemyCollected}
					enemy={enemy.enemy}
					enemyPerks={enemy.perks}
				/>
			)}

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
			<HeroStat
				collected={heroCollected}
				heroStats={heroStats}
				heroPerks={heroPerks}
				graceNumber={gracesSize.size}
			/>
		</>
	);
};

export default GameMain;
