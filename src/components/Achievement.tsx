import "./Achievement.css"

import { WastedData } from "../providers/wastedContext";


export type AchievementData = {
    title: string;
    description: string;
    requirement: string;
    iconSrc: string;
    completionFunction: (wasted: WastedData) => boolean;
    completed: boolean;
}

export default function Achievement({
    achievement
}: {
    achievement: AchievementData
}) {
    return (
        <div className="achievement">
            <div className="achievement-icon">
                <img src={achievement.iconSrc} />
            </div>

            <div className="achievement-labels">
                <div className="achievement-title">
                    {achievement.title}
                </div>
                <div className="achievement-subtitle">Milestone reached</div>
            </div>
        </div>
    );
}