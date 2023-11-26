// TODO: add achievements.

import { useState } from 'react';
import './App.css';
import Achievements from './components/Achievements';
import AchievementsMenu from './components/AchievementsMenu';
import Checkpoint from './components/Checkpoint';
import ResidentialWastePieChart from './components/ResidentialWastePieChart';
import WasteButton from './components/WasteButton';
import WasteSection from './components/WasteSection';
import { apple, chicken, cow, egg, gallonOfMilk, mealPlan, pig, swimmingPoolOfMilk } from './data/wastables';
import AchievementsPopup from './popups/AchievementsPopup';
import { WastedData, WastedProvider } from './providers/wastedContext';

function threeApplesProgress(wasted: WastedData) {
  let apple = wasted.get("Apple");

  if (!apple) {
    return 0;
  }

  return apple.count / 3;
}

function App() {
  const [achievementsIsOpen, setAchievementsIsOpen] = useState<boolean>(false);

  return (
    <>
      <WastedProvider>
        {
          achievementsIsOpen ?
          <AchievementsPopup closePopup={() => setAchievementsIsOpen(false)} />
          : <></>
        }
        <AchievementsMenu openAchievements={() => setAchievementsIsOpen(true)} />
        <Achievements />
        <div className='title-container'>
          <h1>From Data to Dumpsters</h1>
          <h3 className='subtitle'>Food Waste Metrics</h3>
        </div>
        
        <main>
          <p className='article'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
          </p>

          <WasteSection>
            <WasteButton toWaste={apple} />
          </WasteSection>

          <Checkpoint progressFunction={threeApplesProgress}>
            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <ResidentialWastePieChart />

            {/* Section for things people throw out because they're expired. */}
            <WasteSection>
              <WasteButton toWaste={gallonOfMilk} />
            </WasteSection>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            {/* Section for overeating. */}
            <WasteSection>

            </WasteSection>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            {/* Section for animal waste. */}
            <WasteSection>
              <WasteButton toWaste={pig} />
              <WasteButton toWaste={chicken} />
              <WasteButton toWaste={egg} />
            </WasteSection>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <p className='article'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quia possimus consequuntur explicabo. Unde nihil quam quasi dignissimos perferendis cupiditate atque modi dolor. Laudantium, libero perferendis ipsam enim deleniti consectetur.
            </p>

            <WasteSection>
              <WasteButton toWaste={swimmingPoolOfMilk} />
              <WasteButton toWaste={mealPlan} />
            </WasteSection>
          </Checkpoint>
        </main>
      </WastedProvider>
    </>
  )
}

export default App
