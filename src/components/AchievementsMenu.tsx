import "./AchievementsMenu.css";


export default function AchievementsMenu({openAchievements}: {openAchievements: Function}) {
    return (
        <div className="achievements-menu" onClick={() => openAchievements()}>
            <img src="./assets/trophy.svg" alt="" />
        </div>
    )
}