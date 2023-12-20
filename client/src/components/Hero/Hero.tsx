import { useEffect, useState } from "react";
import "./Hero.scss";
import HeroNav from "./HeroNav";
import settings from "../../assets/settings/settings.svg";
import heroMainBg from "../../assets/hero/heroMainBg.svg";
import heroAvatarBg from "../../assets/hero/heroAvatarBg.svg";
import heroKnight from "../../assets/hero/knight-nav.png";
import emptyPerk from "../../assets/hero/blindPerk.svg";
// import attack1 from "../../assets/perks/hero/attack/attack1.svg";
// import special1 from "../../assets/perks/hero/special/special1.svg";
// import effect1 from "../../assets/perks/hero/effect/effect1.svg";
import HeroBar from "./HeroBar";
import { getData } from "../../Request/getData";

interface Equipped {
	name: string;
	src: string;
	perk_type: string;
}
interface CountPerksItem {
	stance_count?: string;
	attack_count?: string;
	effect_count?: string;
}

const Hero = () => {
	const [equipped, setEquipped] = useState<Equipped[]>([]);
	const [countPerks, setCountPerks] = useState<CountPerksItem[]>([]);
	const stance = equipped.find((perk) => perk.perk_type === "stance");
	const attack = equipped.find((perk) => perk.perk_type === "attack");
	const effect = equipped.find((perk) => perk.perk_type === "effect");

	useEffect(() => {
		getData("equipped", setEquipped);
		getData("equipped/count", setCountPerks);
	}, []);

	return (
		<div className="hero">
			<HeroNav />
			<div className="hero__settings">
				<img src={settings} alt="settings" />
			</div>
			<div className="hero__bg">
				<img src={heroMainBg} alt="background" />
			</div>
			<div className="hero__main">
				<div className="hero__main-name">
					<div className="hero__main-name-text">Dev_Pla1</div>
				</div>
				<div className="hero__main-avatar">
					<img
						src={heroAvatarBg}
						alt="background"
						className="hero__main-avatar-bg"
					/>
					<img
						src={heroKnight}
						alt="background"
						className="hero__main-avatar-class"
					/>
					<div className="hero__main-avatar-lvl">12</div>
				</div>
				<div className="hero__main-perks">
					<div className="hero__main-perks-special">
						{stance && stance != undefined ? (
							<img src={stance.src} alt={stance.name} />
						) : (
							<img src={emptyPerk} alt="empty slot" />
						)}
						<div className="hero__main-perks-special-num">
							{countPerks.length > 0
								? `${countPerks[0].stance_count}`
								: "0"}
						</div>
					</div>
					<div className="hero__main-perks-attack">
						{attack && attack != undefined ? (
							<img src={attack.src} alt={attack.name} />
						) : (
							<img src={emptyPerk} alt="empty slot" />
						)}
						<div className="hero__main-perks-attack-num">
							{countPerks.length > 0
								? `${countPerks[0].attack_count}`
								: "0"}
						</div>
					</div>
					<div className="hero__main-perks-effect">
						{effect && effect != undefined ? (
							<img src={effect.src} alt={effect.name} />
						) : (
							<img src={emptyPerk} alt="empty slot" />
						)}
						<div className="hero__main-perks-effect-num">
							{countPerks.length > 0
								? `${countPerks[0].effect_count}`
								: "0"}
						</div>
					</div>
				</div>
			</div>
			<div className="hero__stats">
				<div className="hero__stats-content">
					<div className="hero__stats-content-power">
						Power:&nbsp;
						<span className="hero__stats-content-power-text">
							67
						</span>
					</div>
					<div className="hero__stats-content-line"></div>
					<div className="hero__stats-content-class">
						Class:&nbsp;
						<span className="hero__stats-content-class-text">
							Knight
						</span>
					</div>
					<div className="hero__stats-content-levels">
						Completed levels:&nbsp;
						<span className="hero__stats-content-levels-text">
							12
						</span>
					</div>
					<div className="hero__stats-content-progress">
						Campaign progress:&nbsp;
						<span className="hero__stats-content-progress-text">
							12
						</span>
						/60
					</div>
					<div className="hero__stats-content-perks">
						Perks collected:&nbsp;
						<span className="hero__stats-content-perks-text">
							3
						</span>
						/45
					</div>
					<div className="hero__stats-content-loses">
						Lost battles:&nbsp;
						<span className="hero__stats-content-loses-text">
							2
						</span>
					</div>
				</div>
			</div>
			<HeroBar />
		</div>
	);
};

export default Hero;
