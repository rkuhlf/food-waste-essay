import { useContext, useEffect, useState } from "react";
import { WastedContext, WastedData } from "../providers/wastedContext";
import Achievement, { AchievementData } from "./Achievement";

const achievements: AchievementData[] = [
    {
        title: "Waste a Meal",
        description: "Throw away the average meal.",
        iconSrc: "./assets/trash.svg",
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                if (totalWeight > 1.2) {
                    return true;
                }
            }

            return false;
        },
        completed: false,
    },
    {
        title: "The Average American",
        description: "Throw away the amount of food wasted by the average American each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 470) {
                    return true;
                }    
            }

            return false;
        },
        completed: false,
    },
    {
        title: "The African Average",
        description: "Throw away the amount of food eaten by the average African each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1192) {
                    return true;
                }    
            }

            return false;
        },
        completed: false,
    },
    {
        title: "The Average",
        description: "Throw away the amount of food eaten by an average person worldwide each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1488) {
                    return true;
                }    
            }

            return false;
        },
        completed: false,
    },
    {
        title: "The Average American",
        description: "Throw away the amount of food eaten by the average American each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1996) {
                    return true;
                }    
            }

            return false;
        },
        completed: false,
    },
    {
        title: "Got Milk?",
        description: "Throw away the amount of milk that's wasted in America each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                if (value.name == "Gallon of Milk") {
                    totalWeight += value.weight * value.count;
                
                    // 378 million pounds.
                    if (totalWeight > 378 * Math.pow(10, 6)) {
                        return true;
                    }    
                }
            }

            return false;
        },
        completed: false,
    },
    {
        title: "Leftovers for the Less Fortunate",
        description: "Throw away the amount of food that was donated to the Houston Food Bank in 2020.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.price * value.count;
                
                // This is probably somewhat more than 22 million meals.
                if (totalWeight > 224806244) {
                    return true;
                }
            }

            return false;
        },
        completed: false,
    },
    {
        title: "The Smallest State",
        description: "Throw away the amount of food that is wasted in Rhode Island each day.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                // This is about 1,008,219 pounds.
                if (totalWeight > 184000 * 2000 / 365) {
                    return true;
                }
            }

            return false;
        },
        completed: false,
    },
    {
        title: "All in a Day's Work",
        description: "Throw away the amount of food that is wasted in America each day.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                // 438,356,164.
                if (totalWeight > 160 * Math.pow(10, 9) / 365) {
                    return true;
                }
            }

            return false;
        },
        completed: false,
    },
    {
        title: "Waste Across America",
        description: "Throw away the amount of food that is wasted in America each year.",
        iconSrc: "./assets/us-map.svg",
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                if (totalWeight > 160 * Math.pow(10, 9)) {
                    return true;
                }
            }

            return false;
        },
        completed: false,
    }
]

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