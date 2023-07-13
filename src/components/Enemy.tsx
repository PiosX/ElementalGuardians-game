import heart from "../assets/game/heart.svg";
import shield from "../assets/game/shield.svg";
import power from "../assets/game/power.svg";
import bar from "../assets/game/bar.svg";
import purpleC from "../assets/game/purpleC.svg";
import ghoul from "../assets/enemies/ghoul.svg";
import "./Enemy.scss";

const Enemy = () => {
	return (
		<div className="game__enemy">
			<div className="game__enemy-stats">
				<p className="game__enemy-stats-name">Ghoul</p>
				<div className="game__enemy-stats-info">
					<div className="game__enemy-stats-info-hp">
						<p className="game__enemy-stats-info-hp-number">80</p>
						<div className="game__enemy-stats-info-hp-icon">
							<img src={heart} alt="Heart icon" />
						</div>
					</div>
					<div className="game__enemy-stats-info-shield">
						<p className="game__enemy-stats-info-shield-number">
							15
						</p>
						<div className="game__enemy-stats-info-shield-icon">
							<img src={shield} alt="Shield icon" />
						</div>
					</div>
				</div>
				<p className="game__enemy-stats-class">
					Class:
					<span className="game__enemy-stats-class-name">
						{" "}
						Normal
					</span>
				</p>
			</div>
			<div className="game__enemy-img">
				<img src={ghoul} alt="Enemy" className="game__enemy-img-data" />
			</div>
			<div className="game__enemy-powers">
				<div className="game__enemy-powers-ability"></div>
				<div className="game__enemy-powers-resistance"></div>
				<div className="game__enemy-powers-hr"></div>
				<div className="game__enemy-powers-power">
					<div className="game__enemy-powers-power-img">
						<img src={power} alt="Power icon" />
					</div>
					<div className="game__enemy-powers-power-number">
						<p className="game__enemy-powers-power-number-text">
							3
						</p>
					</div>
				</div>
			</div>
			<div className="game__enemy-bar">
				<div className="game__enemy-bar-counter">
					<p className="game__enemy-bar-counter-text">7/10</p>
				</div>
				<div className="game__enemy-bar-box">
					<img
						src={bar}
						alt="Attack bar borders"
						className="game__enemy-bar-box-borders"
					/>
					<div className="game__enemy-bar-box-fill"></div>
					<div className="game__enemy-bar-box-class">
						<img
							src={purpleC}
							alt="Enemy class icon"
							className="game__enemy-bar-box-class-icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Enemy;
