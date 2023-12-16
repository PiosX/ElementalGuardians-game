import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaign from "./components/Campaign/Campaign";
import Game from "./pages/Game";
import bgcBorder from "./assets/game/bgcBorder.svg";
import "./pages/game.scss";
import Select from "./components/Campaign/Select";
import Inventory from "./components/Inventory/Inventory";
import Hero from "./components/Hero/Hero";

const App = () => {
	return (
		<div className="game">
			<img src={bgcBorder} alt="Background frame" className="game__bgc" />
			<Router>
				<Routes>
					<Route path="/game/:index" element={<Game />} />
					<Route path="/campaign" element={<Campaign />} />
					<Route path="/select" element={<Select />} />
					<Route path="/hero" element={<Hero />} />
					<Route path="/inventory" element={<Inventory />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
