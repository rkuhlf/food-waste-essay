import { useContext, useEffect, useState } from "react";
import { achievements } from "../data/achievements";
import { WastedContext } from "../providers/wastedContext";
import Achievement, { AchievementData } from "./Achievement";

const achievementClearTime = 3 * 1000;

export default function Achievements() {
    const { data } = useContext(WastedContext);
    const [activeAchivements, setActiveAchievements] = useState<AchievementData[]>([]);

    function clearAchievement() {
        activeAchivements.splice(0, 1);
        setActiveAchievements([...activeAchivements]);

        if (activeAchivements.length != 0) {
            setTimeout(clearAchievement, achievementClearTime);
        }
    }

    function addAchievement(achievement: AchievementData) {
        if (activeAchivements.length == 0) {
            setTimeout(clearAchievement, achievementClearTime);
        }
        setActiveAchievements([...activeAchivements, achievement]);
    }

    useEffect(() => {
        for (const achievement of achievements) {
            if (achievement.completed) {
                continue;
            }

            console.log(achievement.completionFunction);
            if (achievement.completionFunction(data.wasted)) {
                achievement.completed = true;
                addAchievement(achievement);
            }
        }
    }, [data]);


    if (activeAchivements.length == 0) {
        return <></>;
    }
    
    return (<>
        <Achievement achievement={activeAchivements[0]} />
    </>);
}