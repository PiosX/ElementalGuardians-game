const Turns: React.FC<{ turn: number }> = (props) => {
	return <div className="game__main-turn">Turn {props.turn}</div>;
};
export default Turns;
