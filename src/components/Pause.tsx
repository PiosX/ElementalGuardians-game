import pauseBgc from "../assets/game/pause/pauseBgc.svg";
import "./Pause.scss";

const Pause = () => {
	const closePausePanel = () => {
		const pausePanel = document.querySelector(".game__pause");
		pausePanel!.setAttribute("data-show", "0");
	};
	return (
		<div className="game__pause" data-show="0">
			<div className="game__pause-mask" onClick={closePausePanel}></div>
			<div className="game__pause-panel">
				<div className="game__pause-panel-img">
					<img src={pauseBgc} alt="pause panel background" />
				</div>
				<div className="game__pause-panel-content">
					<div className="game__pause-panel-content-text">PAUSE</div>
					<div className="game__pause-panel-content-box">
						<div
							className="game__pause-panel-content-box-btn btn-continue"
							onClick={closePausePanel}
						>
							CONTINUE
						</div>
						<div className="game__pause-panel-content-box-btn btn-settings">
							SETTINGS
						</div>
						<div className="game__pause-panel-content-box-btn btn-abort">
							ABORT
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pause;
