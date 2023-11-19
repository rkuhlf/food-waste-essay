import { AchievementData } from "../components/Achievement";
import "./AchievementItem.css"


export default function AchievementItem({ achievement }: { achievement: AchievementData }) {
    const imgSrc = achievement.completed ? "./assets/check.svg" : "./assets/circle.svg"

    // Show a check if it's completed.
    // Show the name of the achievement, what's required, then a description.
    return (
        <div className="achievement-item">
            <div className="achievement-title-section">
                <img src={achievement.iconSrc} />
                <div className="achievement-title">
                    {achievement.title}
                </div>
                <img src={achievement.iconSrc} />
            </div>
            
            <div className="achievement-description-section">
                <div className="achievement-description">
                    {achievement.description}
                </div>
            </div>
        </div>
    )
}