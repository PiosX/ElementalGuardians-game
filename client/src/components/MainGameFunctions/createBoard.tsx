export const createBoard = (
	width: number,
	orbColors: string[],
	setOrbsOnBoard: (value: React.SetStateAction<string[]>) => void,
	setSwapped: (value: React.SetStateAction<boolean>) => void
) => {
	const randomOrbs = [];
	for (let i = 0; i < width * width; i++) {
		const randomColor =
			orbColors[Math.floor(Math.random() * orbColors.length)];
		randomOrbs.push(randomColor);
	}
	setOrbsOnBoard(randomOrbs);
	setSwapped(true);
};
