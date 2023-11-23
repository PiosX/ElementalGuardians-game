// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import druid from "../../assets/selectHero/druid.png";
import mage from "../../assets/selectHero/mage.png";
import archer from "../../assets/selectHero/archer.png";
import knight from "../../assets/selectHero/knight.png";
import "@splidejs/react-splide/css";
import "./HeroSelect.scss";

const HeroSelect = () => {
	return (
		<div className="hero-select">
			<div className="hero-select__path">Choose Your Path</div>
			<Splide
				aria-label="Choose Your Path"
				className="hero-select__slider"
			>
				<SplideSlide className="hero-select__slider-img">
					<img src={druid} alt="druid class" />
					<div className="hero-select__slider-name">Druid</div>
					<div className="hero-select__slider-text">
						'Excellent healer who understand the language of
						nature.'
					</div>
				</SplideSlide>
				<SplideSlide className="hero-select__slider-img">
					<img src={mage} alt="fire mage class" />
					<div className="hero-select__slider-name">Fire Mage</div>
					<div className="hero-select__slider-text">
						'Expert in casting powerful, offensive fire spells.'
					</div>
				</SplideSlide>
				<SplideSlide className="hero-select__slider-img">
					<img src={archer} alt="archer class" />
					<div className="hero-select__slider-name">Archer</div>
					<div className="hero-select__slider-text">
						'His incredible precision prevents him from ever missing
						a shot.'
					</div>
				</SplideSlide>
				<SplideSlide className="hero-select__slider-img">
					<img src={knight} alt="knight class" />
					<div className="hero-select__slider-name">Knight</div>
					<div className="hero-select__slider-text">
						'Heavy shields and discipline make him a very
						challenging target to defeat.'
					</div>
				</SplideSlide>
			</Splide>
			<div className="hero-select__btn">Select</div>
		</div>
	);
};

export default HeroSelect;
