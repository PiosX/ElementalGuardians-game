import Enemy from "../components/Enemy";
import GameMain from "../components/GameMain";
import settings from "../assets/settings/settings.svg";
import bgcBorder from "../assets/game/bgcBorder.svg";
import "./game.scss";
import HeroStat from "../components/HeroStat";
import Pause from "../components/Pause";
import Hero from "../components/Hero/Hero";
import Select from "../components/Campaign/Select";
import Splash from "../components/SplashScene/Splash";
import HeroSelect from "../components/HeroSelect/HeroSelect";

const Game = () => {
	const openPausePanel = () => {
		const pausePanel = document.querySelector(".game__pause");
		pausePanel!.setAttribute("data-show", "1");
	};
	return (
		<>
			<div className="game__settings" onClick={openPausePanel}>
				<img
					src={settings}
					alt="Setting icon"
					className="game__settings-icon"
				/>
			</div>
			{/* <Enemy /> */}
			<GameMain />
			{/* <HeroStat /> */}
			<Pause />
			{/* <Hero /> */}
			{/* <Select /> */}
			{/* <Splash /> */}
			{/* <HeroSelect /> */}
		</>
	);
};

export default Game;
