import { useContext, useEffect, useState } from "react";
import "./AchievementsMenu.css";

import { achievements } from "../data/achievements";
import { WastedContext } from "../providers/wastedContext";

function shouldGlow(beenOpened: boolean, atLeastOneAchievement: boolean) {
    return atLeastOneAchievement && !beenOpened;
}

export default function AchievementsMenu({openAchievements}: {openAchievements: Function}) {
    const { data } = useContext(WastedContext);
    const [beenOpened, setBeenOpened] = useState(false);
    const [atLeastOneAchievement, setAtLeastOneAchievement] = useState(false);

    useEffect(() => {
        for (const achievement of achievements) {
            if (achievement.completed) {
                setAtLeastOneAchievement(true);
            }
        }
    }, [data.refresh]);

    return (
        <div className={"achievements-menu " + (shouldGlow(beenOpened, atLeastOneAchievement) ? "achievements-glow" : "")} onClick={() => {
                openAchievements();
                setBeenOpened(true);
            }}>
            <img src="./assets/trophy.svg" alt="" />
        </div>
    )
}