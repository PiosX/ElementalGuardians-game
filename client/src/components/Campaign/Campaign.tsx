// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import ebonwood from "../../assets/campaign/Ebonwood.png";
import sands from "../../assets/campaign/Sands.png";
import "@splidejs/react-splide/css";
import "./Campaign.scss";
import HeroBar from "../Hero/HeroBar";

const Campaign = () => {
	const navigate = useNavigate();
	return (
		<div className="campaign">
			<div className="campaign__select">Select Level</div>
			<Splide aria-label="Campaign Levels" className="campaign__slider">
				<SplideSlide className="campaign__slider-img">
					<img src={ebonwood} alt="Ebonwood Enclave" />
					<div className="campaign__slider-text">
						Ebonwood Enclave
					</div>
				</SplideSlide>
				<SplideSlide className="campaign__slider-img">
					<img src={sands} alt="Sands of Solitude" />
					<div className="campaign__slider-text">
						Sands of Solitude
					</div>
				</SplideSlide>
				<SplideSlide className="campaign__slider-img">
					<img
						src={sands}
						alt="Sands of Solitude"
						className="campaign__slider-img-soon"
					/>
					<div className="campaign__slider-text">???</div>
				</SplideSlide>
			</Splide>
			<div className="campaign__progress">
				Progress: <span className="campaign__progress-num">0</span>/30
			</div>
			<div
				className="campaign__btn"
				onClick={() => {
					navigate("/select");
				}}
			>
				Select
			</div>
			<div className="campaign__bar">
				<HeroBar />
			</div>
		</div>
	);
};

export default Campaign;
