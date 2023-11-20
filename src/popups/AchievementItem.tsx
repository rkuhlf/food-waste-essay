import { AchievementData } from "../components/Achievement";
import "./AchievementItem.css"


export default function AchievementItem({ achievement }: { achievement: AchievementData }) {
    // Show a check if it's completed.
    // Show the name of the achievement, what's required, then a description.
    return (
        <div className={`achievement-item ${achievement.completed ? "achievement-completed" : "achievement-uncompleted"}`}>
            <div className="achievement-title-section">
                <div className="achievement-title">
                    {achievement.title}
                </div>
            </div>
            
            <div className="achievement-description-section">
                <div className="achievement-description">
                    {achievement.description}
                </div>

                <div className="achievement-requirement">
                    {achievement.requirement}
                </div>
            </div>
        </div>
    )
}