import { achievements } from "../data/achievements";
import AchievementItem from "./AchievementItem";
import "./AchievementsPopup.css";

export default function AchievementsPopup({closePopup}: {closePopup: Function}) {
    return (
        <div className="popup-backdrop" onClick={() => closePopup()}>
            <div className="achievements-popup" onClick={e => e.stopPropagation()}>
                <h2 className="achievements-title">Milestones</h2>

                <div className="achievements-list">
                    {
                        achievements.map(achievement => <AchievementItem achievement={achievement} key={achievement.title}/>)
                    }
                </div>
            </div>
        </div>
    )
}