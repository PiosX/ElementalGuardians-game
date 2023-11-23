import { useState, useEffect } from "react";
import { getData } from "./Request/getData";
import { Hero } from "./Interfaces/HeroInterface";
import Game from "./pages/Game";

const App = () => {
	const [hero, setHero] = useState<Hero[]>([]);

	useEffect(() => {
		getData("hero-stats", setHero);
	}, []);

	return (
		<>
			<Game />
			<div>Hello</div>
			{hero.length > 0 ? (
				<ul>
					{hero.map((user) => (
						<li key={user.hero_id}>
							<h3>ID: {user.hero_id} </h3>
							strength: {user.strength} <br />
							intelligence: {user.intelligence} <br />
							shield: {user.shield} <br />
						</li>
					))}
				</ul>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default App;
