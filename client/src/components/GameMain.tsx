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
import { getRandomNumber } from "./MainGameFunctions/getRandomNumber";
import { getInfo } from "./MainGameFunctions/blessingsActions";

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
	const [collected, setCollected] = useState(false);
	const [botMove, setBotMove] = useState(false);
	const [botCanMove, setBotCanMove] = useState(false);
	const [freezed, setFreezed] = useState(false);
	const [turn, setTurn] = useState(1);
	const [enemyCollected, setEnemyCollected] = useState(0);
	const [heroCollected, setHeroCollected] = useState(0);
	const [isMatching, setIsMatching] = useState(false);
	const [isMatchingEnemy, setIsMatchingEnemy] = useState(false);
	const [hit, setHit] = useState(false);
	const [res, setRes] = useState(false);
	const [heroWon, setHeroWon] = useState<null | boolean>(null);
	const [diedOnce, setDiedOnce] = useState(false);
	const [angel, setAngel] = useState<AngelInterface[]>([]);
	const [angelPerks, setAngelPerks] = useState<AngelInterface[]>([]);
	const [graces, setGraces] = useState<AngelInterface[]>([]);
	const [heroStats, setHeroStats] = useState<Hero[]>([]);
	const [updatedHeroStats, setUpdatedHeroStats] = useState<Hero[]>([]);
	const [heroPerks, setHeroPerks] = useState<MyPerksInterface[]>([]);
	const [updatedHeroPerks, setUpdatedHeroPerks] = useState<
		MyPerksInterface[]
	>([]);
	const [enemy, setEnemy] = useState<{
		enemy: EnemyInterface;
		perks: EnemyPerksInterface[];
	} | null>(null);
	const [updatedEnemyValues, setUpdatedEnemyValues] = useState<{
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
				setCollected(true);
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
				if (heroStats[0].health <= 0 && !res) {
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
		if (randomNumber <= 700) return "normal";
		if (randomNumber <= 900) return "rare";
		if (randomNumber <= 970) return "epic";
		return "legendary";
	};

	const addRarityColumn = (array: AngelInterface[]) => {
		return array.map((obj) => {
			const rarity = getRandomRarity();
			return { ...obj, rarity };
		});
	};

	const drawBls = () => {
		const maxedBls = graces.filter(
			(perk) => perk.level === 5 && perk.rarity === "legendary"
		);

		const perks = addRarityColumn(angel);
		let filteredPerks = [...perks];

		maxedBls.forEach((maxedBl) => {
			filteredPerks = filteredPerks.filter(
				(perk) => perk.blessing_id !== maxedBl.blessing_id
			);
		});
		if (diedOnce) {
			const checkPerk = graces.filter((perk) => perk.blessing_id === 10);
			if (checkPerk.length > 0) {
				filteredPerks = filteredPerks.filter(
					(perk) => perk.blessing_id !== 10
				);
			}
		}

		const levelOnePerks = filteredPerks.filter((perk) => perk.level === 1);

		const chosenPerks = [];
		let firstPerk, secondPerk, thirdPerk;

		do {
			firstPerk = getRandomFromList(levelOnePerks);
			secondPerk = getRandomFromList(levelOnePerks);
			thirdPerk = getRandomFromList(levelOnePerks);
		} while (
			firstPerk.blessing_id === secondPerk.blessing_id ||
			firstPerk.blessing_id === thirdPerk.blessing_id ||
			secondPerk.blessing_id === thirdPerk.blessing_id
		);

		chosenPerks.push(getBestPerk(firstPerk, graces, filteredPerks));
		chosenPerks.push(getBestPerk(secondPerk, graces, filteredPerks));
		chosenPerks.push(getBestPerk(thirdPerk, graces, filteredPerks));

		setAngelPerks(chosenPerks);
	};
	const getRandomFromList = (list: AngelInterface[]): AngelInterface => {
		const randomIndex = Math.floor(Math.random() * list.length);
		return list[randomIndex];
	};

	const getBestPerk = (
		perk: AngelInterface,
		graces: AngelInterface[],
		allPerks: AngelInterface[]
	) => {
		const existingPerk = graces.find(
			(g) => g.blessing_id === perk.blessing_id
		);

		if (existingPerk) {
			const higherRarity = getRandomHigherRarity(existingPerk);
			const updatedPerks = allPerks.map((p) => {
				if (p.blessing_id === perk.blessing_id) {
					return {
						...p,
						rarity: higherRarity.rarity,
					};
				}
				return p;
			});

			const filtered = updatedPerks.filter(
				(p) =>
					p.blessing_id === existingPerk.blessing_id &&
					p[p.rarity] >= existingPerk[existingPerk.rarity]
			);

			const chosenOne = filtered.reduce(
				(prev, current) => {
					if (
						current.blessing_id === perk.blessing_id &&
						current[current.rarity] >
							existingPerk[existingPerk.rarity] &&
						current.level < prev.level
					) {
						return current;
					} else if (
						current.blessing_id === perk.blessing_id &&
						current[current.rarity] ===
							existingPerk[existingPerk.rarity] &&
						current.level > prev.level
					) {
						return current;
					}
					return prev;
				},
				{ level: Infinity } as AngelInterface
			);
			return chosenOne;
		}

		return perk;
	};

	const getRandomHigherRarity = (perk: AngelInterface) => {
		const rarities = ["normal", "rare", "epic", "legendary"];
		const currentRarity = perk.rarity;
		const currentIndex = rarities.indexOf(currentRarity);

		let newRarity;
		do {
			const randomNumber = Math.floor(Math.random() * 1000) + 1;

			if (randomNumber <= 700) {
				newRarity = "normal";
			} else if (randomNumber <= 900) {
				newRarity = "rare";
			} else if (randomNumber <= 970) {
				newRarity = "epic";
			} else {
				newRarity = "legendary";
			}
		} while (rarities.indexOf(newRarity) < currentIndex);
		return { rarity: newRarity };
	};

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
				botCanMove == true &&
				!freezed
			) {
				clearInterval(timer);
				bot();
			}
			if (freezed) {
				setSwapped(true);
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
		freezed,
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
				setShowAngel,
				drawBls,
				setHit
			);
		}
		checkWinner();
	}, [botMove, isMatching, isMatchingEnemy, swapped]);

	useEffect(() => {
		if (heroPerks && enemy) {
			getInfo(
				heroPerks,
				enemy!.perks,
				heroStats,
				enemy!.enemy,
				graces,
				updatedEnemyValues,
				collected,
				setCollected,
				updatedHeroPerks,
				angel,
				updatedHeroStats,
				setHeroWon,
				setDiedOnce,
				setFreezed,
				hit,
				setRes
			);
		}
	}, [collected === true, swapped === true]);

	useEffect(() => {
		const randomAngel = getRandomNumber(1, 8);
		setAngelId(randomAngel);
		getDataById(`angels/${1}`, setAngel, { enemyId: 1 });
	}, [showAngel]);

	useEffect(() => {
		getData("hero-stats", setHeroStats);
		getData("hero-stats", setUpdatedHeroStats);
		getData("my-perks", setHeroPerks);
		getData("my-perks", setUpdatedHeroPerks);
		// getData("enemy-stats", setEnemy);
		getEnemyById(`enemy-stats/${index}`, setEnemy, { enemyId: index });
		getEnemyById(`enemy-stats/${index}`, setUpdatedEnemyValues, {
			enemyId: index,
		});

		// getEnemyById(`enemy-stats/${perkId}`, (data) => {
		// 	if (Array.isArray(data)) {
		// 		const reversedPerks = [...data].reverse();
		// 		setEnemyPerks(reversedPerks as EnemyPerksInterface[]);
		// 	}
		// });
	}, []);

	return (
		<>
			{showAngel && (
				<Angel
					angel={angelPerks}
					allGraces={angel}
					setGraces={setGraces}
					setHeroCollected={setHeroCollected}
					setShowAngel={setShowAngel}
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
			{heroStats.length > 0 ? (
				<HeroStat
					collected={heroCollected}
					heroStats={heroStats}
					heroPerks={heroPerks}
					graceNumber={gracesSize.size}
					hero_req={heroStats[0].bless_points}
				/>
			) : (
				""
			)}
		</>
	);
};

export default GameMain;
