import { MyPerksInterface } from "../../Interfaces/MyPerksInterface";

export const collectPoints = (
	heroPerks: MyPerksInterface[],
	heroCollected: number,
	setHeroCollected: (value: React.SetStateAction<number>) => void
) => {
	const heroColl = heroCollected + 3;
	if (heroPerks[0].cost > heroCollected) {
		setHeroCollected((points: number) =>
			Math.min(points + 3, heroPerks[0].cost)
		);
	}
	if (heroPerks[0].cost <= heroColl) {
		setTimeout(() => {
			setHeroCollected(0);
		}, 300);
	}
};
