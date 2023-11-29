import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaign from "./components/Campaign/Campaign";
import Game from "./pages/Game";
import bgcBorder from "./assets/game/bgcBorder.svg";
import "./pages/game.scss";

const App = () => {
	return (
		<div className="game">
			<img src={bgcBorder} alt="Background frame" className="game__bgc" />
			<Router>
				<Routes>
					<Route path="/" element={<Game />} />
					<Route path="/campaign" element={<Campaign />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
