// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Campaign/backArrow.svg";
import "@splidejs/react-splide/css";
import "./Select.scss";
import HeroBar from "../Hero/HeroBar";
import HeroNav from "../Hero/HeroNav";

const Select = () => {
	const navigate = useNavigate();

	const numberOfFirstPage = 15;
	const numberOfSecondPage = 15;
	const data = Array.from(
		{ length: numberOfFirstPage },
		(_, index) => index + 1
	);
	const dataSecond = Array.from(
		{ length: numberOfSecondPage },
		(_, index) => index + 16
	);

	const handleSlideClick = (index: number) => {
		// Navigate to the Game component with the index as a parameter
		navigate(`/game/${index}`);
	};

	return (
		<div className="select">
			<HeroNav />
			<div
				className="select__back"
				onClick={() => {
					navigate("/campaign");
				}}
			>
				<div className="select__back-icon">
					<img src={backArrow} alt="Back arrow" />
				</div>
				<div className="select__back-text">BACK</div>
			</div>
			<div className="select__bg" data-camp="1"></div>
			<Splide
				aria-label="Select Campaign Levels"
				className="select__slider"
			>
				<SplideSlide className="select__slider-level">
					{data.map((item, index) => (
						<div
							key={index}
							className="select__slider-level-info"
							onClick={() => handleSlideClick(item)}
						>
							<div className="select__slider-level-info-num">
								{item}
							</div>
						</div>
					))}
				</SplideSlide>
				<SplideSlide className="select__slider-level">
					{dataSecond.map((item, index) => (
						<div
							key={index}
							className="select__slider-level-info"
							onClick={() => handleSlideClick(item)}
						>
							<div className="select__slider-level-info-num">
								{item}
							</div>
						</div>
					))}
				</SplideSlide>
			</Splide>
			<div className="select__bar">
				<HeroBar />
			</div>
		</div>
	);
};

export default Select;
