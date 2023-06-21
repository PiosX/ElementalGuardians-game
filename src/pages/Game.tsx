import GameMain from "../components/GameMain";
import "./game.scss";

const Game = () => {
	return (
		<div className="game">
			<div className="game__level">
				<div className="game__level-bgc"></div>
				<p>Level 2</p>
			</div>
			<div className="game__enemy"></div>
			<GameMain />
			<div className="game__hero"></div>
		</div>
	);
};

export default Game;
