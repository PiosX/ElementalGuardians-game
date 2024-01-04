// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import { AngelInterface } from "../Interfaces/AngelInterface";
import "@splidejs/react-splide/css";
import "./Angel.scss";

interface BlessingsInterface {
	[key: number]: AngelInterface[];
}

const Angel: React.FC<{
	angel: AngelInterface[];
	setGraces: (value: React.SetStateAction<AngelInterface[]>) => void;
	setHeroCollected: (value: React.SetStateAction<number>) => void;
}> = ({ angel, setGraces, setHeroCollected }) => {
	const mainRef = useRef<HTMLDivElement>(null);
	const angelRef = useRef<HTMLDivElement>(null);
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);
	const thirdRef = useRef<HTMLDivElement>(null);
	const [firstBls, setFirstBls] = useState<AngelInterface[]>([]);
	const [secondBls, setSecondBls] = useState<AngelInterface[]>([]);
	const [thirdBls, setThirdtBls] = useState<AngelInterface[]>([]);

	const randomBlessing = () => {
		const uniqueBlessingIds = [
			...new Set(angel.map((obj) => obj.blessing_id)),
		];

		const blessingById: BlessingsInterface = {};

		uniqueBlessingIds.forEach((blessingId) => {
			blessingById[blessingId] = angel.filter(
				(obj) => obj.blessing_id === blessingId
			);
		});
		const firstKey = parseInt(Object.keys(blessingById)[0], 10);
		const secondKey = parseInt(Object.keys(blessingById)[1], 10);
		const thirdKey = parseInt(Object.keys(blessingById)[2], 10);
		setFirstBls(blessingById[firstKey]);
		setSecondBls(blessingById[secondKey]);
		setThirdtBls(blessingById[thirdKey]);
	};
	useEffect(() => {
		randomBlessing();
	}, []);

	const closeTalk = () => {
		angelRef.current!.setAttribute("data-open", "0");
	};
	const selectBlessing = () => {
		const first =
			firstRef.current?.parentElement?.classList.contains("is-active");
		const second =
			secondRef.current?.parentElement?.classList.contains("is-active");
		const third =
			thirdRef.current?.parentElement?.classList.contains("is-active");
		if (first) {
			setGraces((prevItems) => [...prevItems, firstBls[0]]);
			if (firstBls.length > 1) {
				setGraces((prevItems) => [...prevItems, firstBls[1]]);
			}
		} else if (second) {
			setGraces((prevItems) => [...prevItems, secondBls[0]]);
			if (secondBls.length > 1) {
				setGraces((prevItems) => [...prevItems, secondBls[1]]);
			}
		} else if (third) {
			setGraces((prevItems) => [...prevItems, thirdBls[0]]);
			if (thirdBls.length > 1) {
				setGraces((prevItems) => [...prevItems, thirdBls[1]]);
			}
		}
		setHeroCollected(0);
		mainRef.current!.setAttribute("data-open", "0");
	};

	return (
		<div className="angel-wrapper" ref={mainRef} data-open="1">
			{firstBls.length > 0 && angel && angel.length > 0 ? (
				<div className="angel-wrapper-bgc">
					<div
						className="angel"
						ref={angelRef}
						onClick={closeTalk}
						data-open="1"
					>
						<div className="angel__name">{angel[0].angel_name}</div>
						<div className="angel__img">
							<img src={angel[0].img} alt={angel[0].name} />
						</div>
						<div className="angel__desc">{angel[0].name}</div>
						<div className="angel__text">
							<div className="angel__text-sp">
								{angel[0].text}
							</div>
						</div>
					</div>
					<div className="angel-bls">
						<div className="angel-bls__choose">
							Choose a Blessing
						</div>
						<Splide
							aria-label="Choose Blessing"
							className="angel-bls__slider"
						>
							<SplideSlide className="angel-bls__slide-main">
								<div className="angel-bls__main" ref={firstRef}>
									<div className="angel-bls__bgc"></div>
									<div className="angel-bls__img">
										<img
											src={firstBls[0].src}
											alt={firstBls[0].b_name}
										/>
									</div>
									<div className="angel-bls__main-name">
										{firstBls[0].b_name}
									</div>
									<div className="angel-bls__main-lvl">
										Lvl. {firstBls[0].level}
									</div>
									<div className="angel-bls__main-dif">
										{firstBls[0].rarity}
									</div>
									<div className="angel-bls__main-type">
										{firstBls[0].type}
									</div>
									<div className="angel-bls__main-desc">
										{firstBls[0].desc}
									</div>
									<div className="angel-bls__main-hr"></div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{firstBls[0].effect1}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{
												firstBls[0][
													firstBls[0]
														.rarity as keyof (typeof firstBls)[0]
												]
											}{" "}
											%
										</div>
									</div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{firstBls[1] != null &&
												firstBls[1].effect2}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{firstBls[1] != null &&
												firstBls[1][
													firstBls[1]
														.rarity as keyof (typeof firstBls)[0]
												]}{" "}
										</div>
									</div>
								</div>
							</SplideSlide>
							<SplideSlide className="angel-bls__slide-main">
								<div
									className="angel-bls__main"
									ref={secondRef}
								>
									<div className="angel-bls__bgc"></div>
									<div className="angel-bls__img">
										<img
											src={secondBls[0].src}
											alt={secondBls[0].b_name}
										/>
									</div>
									<div className="angel-bls__main-name">
										{secondBls[0].b_name}
									</div>
									<div className="angel-bls__main-lvl">
										Lvl. {secondBls[0].level}
									</div>
									<div className="angel-bls__main-dif">
										{secondBls[0].rarity}
									</div>
									<div className="angel-bls__main-type">
										{secondBls[0].type}
									</div>
									<div className="angel-bls__main-desc">
										{secondBls[0].desc}
									</div>
									<div className="angel-bls__main-hr"></div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{secondBls[0].effect1}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{
												secondBls[0][
													secondBls[0]
														.rarity as keyof (typeof secondBls)[0]
												]
											}{" "}
											%
										</div>
									</div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{secondBls[1] != null &&
												secondBls[1].effect2}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{secondBls[1] != null &&
												secondBls[1][
													secondBls[1]
														.rarity as keyof (typeof secondBls)[0]
												]}{" "}
										</div>
									</div>
								</div>
							</SplideSlide>
							<SplideSlide className="angel-bls__slide-main">
								<div className="angel-bls__main" ref={thirdRef}>
									<div className="angel-bls__bgc"></div>
									<div className="angel-bls__img">
										<img
											src={thirdBls[0].src}
											alt={thirdBls[0].b_name}
										/>
									</div>
									<div className="angel-bls__main-name">
										{thirdBls[0].b_name}
									</div>
									<div className="angel-bls__main-lvl">
										Lvl. {thirdBls[0].level}
									</div>
									<div className="angel-bls__main-dif">
										{thirdBls[0].rarity}
									</div>
									<div className="angel-bls__main-type">
										{thirdBls[0].type}
									</div>
									<div className="angel-bls__main-desc">
										{thirdBls[0].desc}
									</div>
									<div className="angel-bls__main-hr"></div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{thirdBls[0].effect1}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{
												thirdBls[0][
													thirdBls[0]
														.rarity as keyof (typeof thirdBls)[0]
												]
											}{" "}
											%
										</div>
									</div>
									<div className="angel-bls__main-ef">
										<div className="angel-bls__main-ef-text">
											{thirdBls[1] != null &&
												thirdBls[1].effect2}
										</div>
										<div className="angel-bls__main-ef-value">
											&nbsp;&nbsp;
											{thirdBls[1] != null &&
												thirdBls[1][
													thirdBls[1]
														.rarity as keyof (typeof thirdBls)[0]
												]}{" "}
										</div>
									</div>
								</div>
							</SplideSlide>
						</Splide>
						<div
							className="angel-bls__select"
							onClick={selectBlessing}
						>
							Select
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Angel;
