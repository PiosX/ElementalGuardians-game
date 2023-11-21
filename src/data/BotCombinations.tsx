export const BotCombinations = (
	width: number,
	orbsOnBoard: string[],
	setOrbsOnBoard: (value: React.SetStateAction<string[]>) => void,
	setSwapped: (value: React.SetStateAction<boolean>) => void,
	setBotMove: (value: React.SetStateAction<boolean>) => void,
	blank: string
) => {
	for (let i = 0; i < 64; i++) {
		const checkSwapV1 = [i, i + 1, i + 2 + width];
		const checkSwapV2 = [i, i + 1, i + 2 - width];
		const checkSwapV3 = [i, i + 1, i - 1 - width];
		const checkSwapV4 = [i, i + 1, i - 1 + width];
		const checkSwapV5 = [i, i + width, i + 2 * width - 1];
		const checkSwapV6 = [i, i + width, i + 2 * width + 1];
		const checkSwapV7 = [i, i - width, i - 2 * width - 1];
		const checkSwapV8 = [i, i - width, i - 2 * width + 1];
		const checkSwapV9 = [i, i - width, i - 3 * width];
		const checkSwapV10 = [i, i + width, i + 3 * width];
		const checkSwapV11 = [i, i + 1, i + 3];
		const checkSwapV12 = [i, i - 1, i - 3];

		const orb1 = document.querySelector(`[data-id="${i}"]`);
		const orb2 = document.querySelector(`[data-id="${i + 1}"]`);
		const orb3 = document.querySelector(`[data-id="${i + 2 + width}"]`);
		const orb4 = document.querySelector(`[data-id="${i + 2 - width}"]`);
		const orb5 = document.querySelector(`[data-id="${i - 1 - width}"]`);
		const orb6 = document.querySelector(`[data-id="${i - 1 + width}"]`);
		const orb7 = document.querySelector(`[data-id="${i + 2 * width - 1}"]`);
		const orb8 = document.querySelector(`[data-id="${i + width}"]`);
		const orb9 = document.querySelector(`[data-id="${i + 2 * width + 1}"]`);
		const orb10 = document.querySelector(
			`[data-id="${i - 2 * width - 1}"]`
		);
		const orb11 = document.querySelector(`[data-id="${i - width}"]`);
		const orb12 = document.querySelector(
			`[data-id="${i - 2 * width + 1}"]`
		);
		const orb13 = document.querySelector(`[data-id="${i - 3 * width}"]`);
		const orb14 = document.querySelector(`[data-id="${i + 3 * width}"]`);
		const orb15 = document.querySelector(`[data-id="${i + 3}"]`);
		const orb16 = document.querySelector(`[data-id="${i - 3}"]`);
		const orb17 = document.querySelector(`[data-id="${i - 1}"]`);

		//COMBINATIONS
		const invalidCombinationV1 = [
			6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 56, 57, 58,
			59, 60, 61, 62, 63,
		];
		const invalidCombinationV2 = [
			0, 1, 2, 3, 4, 5, 6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54,
			55, 62, 63,
		];
		const invalidCombinationV3 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48,
			55, 56, 63,
		];
		const invalidCombinationV4 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48,
			55, 56, 57, 58, 59, 60, 61, 62, 63,
		];
		const invalidCombinationV5 = [
			0, 8, 16, 24, 32, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
			59, 60, 61, 62, 63,
		];
		const invalidCombinationV6 = [
			7, 15, 23, 31, 39, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
			59, 60, 61, 62, 63,
		];
		const invalidCombinationV7 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24, 32,
			40, 48, 56,
		];
		const invalidCombinationV8 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 23, 31, 39,
			47, 55, 63,
		];
		const invalidCombinationV9 = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23,
		];
		const invalidCombinationV10 = [
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
			57, 58, 59, 60, 61, 62, 63,
		];
		const invalidCombinationV11 = [
			5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47,
			53, 54, 55, 61, 62, 63,
		];
		const invalidCombinationV12 = [
			0, 1, 2, 8, 9, 10, 16, 17, 18, 24, 25, 26, 32, 33, 34, 40, 41, 42,
			48, 49, 50, 56, 57, 58,
		];

		const matchColor = orbsOnBoard[i];

		//SAME VALUES
		const hasSameValue1 = checkSwapV1.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue2 = checkSwapV2.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue3 = checkSwapV3.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue4 = checkSwapV4.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue5 = checkSwapV5.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue6 = checkSwapV6.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue7 = checkSwapV7.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue8 = checkSwapV8.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue9 = checkSwapV9.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue10 = checkSwapV10.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue11 = checkSwapV11.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});
		const hasSameValue12 = checkSwapV12.every((number) => {
			return orbsOnBoard[number] === matchColor;
		});

		const combinations = [
			{
				val: hasSameValue1 && !invalidCombinationV1.includes(i),
				temp: i + 2,
				swap: i + 2 + width,
				orb1: orb1,
				orb2: orb2,
				orb3: orb3,
			},
			{
				val: hasSameValue2 && !invalidCombinationV2.includes(i),
				temp: i + 2,
				swap: i + 2 - width,
				orb1: orb1,
				orb2: orb2,
				orb3: orb4,
			},
			{
				val: hasSameValue3 && !invalidCombinationV3.includes(i),
				temp: i - 1,
				swap: i - 1 - width,
				orb1: orb1,
				orb2: orb2,
				orb3: orb5,
			},
			{
				val: hasSameValue4 && !invalidCombinationV4.includes(i),
				temp: i - 1,
				swap: i - 1 + width,
				orb1: orb1,
				orb2: orb2,
				orb3: orb6,
			},
			{
				val: hasSameValue5 && !invalidCombinationV5.includes(i),
				temp: i + 2 * width,
				swap: i + 2 * width - 1,
				orb1: orb1,
				orb2: orb8,
				orb3: orb7,
			},
			{
				val: hasSameValue6 && !invalidCombinationV6.includes(i),
				temp: i + 2 * width,
				swap: i + 2 * width + 1,
				orb1: orb1,
				orb2: orb8,
				orb3: orb9,
			},
			{
				val: hasSameValue7 && !invalidCombinationV7.includes(i),
				temp: i - 2 * width,
				swap: i - 2 * width - 1,
				orb1: orb1,
				orb2: orb11,
				orb3: orb10,
			},
			{
				val: hasSameValue8 && !invalidCombinationV8.includes(i),
				temp: i - 2 * width,
				swap: i - 2 * width + 1,
				orb1: orb1,
				orb2: orb11,
				orb3: orb12,
			},
			{
				val: hasSameValue9 && !invalidCombinationV9.includes(i),
				temp: i - 2 * width,
				swap: i - 3 * width,
				orb1: orb1,
				orb2: orb11,
				orb3: orb13,
			},
			{
				val: hasSameValue10 && !invalidCombinationV10.includes(i),
				temp: i + 2 * width,
				swap: i + 3 * width,
				orb1: orb1,
				orb2: orb8,
				orb3: orb14,
			},
			{
				val: hasSameValue11 && !invalidCombinationV11.includes(i),
				temp: i + 2,
				swap: i + 3,
				orb1: orb1,
				orb2: orb2,
				orb3: orb15,
			},
			{
				val: hasSameValue12 && !invalidCombinationV12.includes(i),
				temp: i - 2,
				swap: i - 3,
				orb1: orb1,
				orb2: orb17,
				orb3: orb16,
			},
		];
		for (const combination of combinations) {
			if (combination.val) {
				combination.orb1!.setAttribute("data-select", "1");
				combination.orb2!.setAttribute("data-select", "1");
				combination.orb3!.setAttribute("data-select", "1");

				setTimeout(() => {
					const temp = orbsOnBoard[combination.temp];
					const swapOrb = orbsOnBoard[combination.swap];
					orbsOnBoard[combination.temp] = swapOrb;
					orbsOnBoard[combination.swap] = temp;
					setOrbsOnBoard([...orbsOnBoard]);
					setSwapped(true);
				}, 1000);
				setTimeout(() => {
					combination.orb1!.setAttribute("data-select", "0");
					combination.orb2!.setAttribute("data-select", "0");
					combination.orb3!.setAttribute("data-select", "0");
				}, 800);
				setOrbsOnBoard([...orbsOnBoard]);
				setBotMove(false);
				return false;
			}
		}

		// if (orbsOnBoard[i + width] === blank) {
		// 	orbsOnBoard[i + width] = orbsOnBoard[i];
		// 	orbsOnBoard[i] = blank;
		// }
	}
};
