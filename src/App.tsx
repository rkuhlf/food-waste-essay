// TODO: add achievements.

import './App.css';
import Checkpoint from './components/Checkpoint';
import WasteButton from './components/WasteButton';
import WasteSection from './components/WasteSection';
import { apple, chicken, cow, egg, pig } from './data/wastables';
import { WastedData, WastedProvider } from './providers/wastedContext';

function threeApplesProgress(wasted: WastedData) {
  let apple = wasted.get("Apple");

  if (!apple) {
    return 0;
  }
  console.log("compouewt")
  return apple.count / 3;
}

function App() {
  return (
    <>
      <WastedProvider>
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

            <WasteSection>
              <WasteButton toWaste={cow} />
              <WasteButton toWaste={pig} />
              <WasteButton toWaste={chicken} />
              <WasteButton toWaste={egg} />
            </WasteSection>

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
          </Checkpoint>
        </main>
      </WastedProvider>
    </>
  )
}

export default App
