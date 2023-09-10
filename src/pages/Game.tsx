import Enemy from "../components/Enemy";
import GameMain from "../components/GameMain";
import settings from "../assets/settings/settings.svg";
import bgcBorder from "../assets/game/bgcBorder.svg";
import "./game.scss";
import HeroStat from "../components/HeroStat";

const Game = () => {
	return (
		<div className="game">
			<img src={bgcBorder} alt="Background frame" className="game__bgc" />
			<div className="game__settings">
				<img
					src={settings}
					alt="Setting icon"
					className="game__settings-icon"
				/>
			</div>
			<Enemy />
			<GameMain />
			<HeroStat />
		</div>
	);
};

export default Game;
