import { PropsWithChildren, useState } from 'react';
import './App.css';
import Achievements from './components/Achievements';
import AchievementsMenu from './components/AchievementsMenu';
import CarbonIntensityChart from './components/CarbonIntensityChart';
import Checkpoint from './components/Checkpoint';
import { Cite } from './components/Cite';
import ResidentialWastePieChart from './components/ResidentialWastePieChart';
import WasteSection from './components/WasteSection';
import { apple, bananas, bread, cake, carrots, cheese, chicken, chickenThigh, cow, dozenEggs, egg, gallonOfMilk, iceCream, lettuce, mealPlan, pork, pig, pizza, steak, swimmingPoolOfMilk, acreOfWheat, happyMeal, cheetos, kfcBucket } from './data/wastables';
import Paragraph from './Paragraph';
import AchievementsPopup from './popups/AchievementsPopup';
import { WastedData, WastedProvider } from './providers/wastedContext';

function threeApplesProgress(wasted: WastedData) {
  let apple = wasted.get("Apple");

  if (!apple) {
    return 0;
  }

  return apple.count / 3;
}

function junkFood(wasted: WastedData) {
  const kfc = wasted.get("KFC Bucket")?.count || 0;
  const happyMeal = wasted.get("Happy Meal")?.count || 0;
  const chips = wasted.get("Chips")?.count || 0;

  const total = kfc + happyMeal + chips;

  // Assuming each of these is one meal, that's three meals a day for seven days.
  return total / 21;
}

// 4 miles is 0.133333333 gallons, which is 2.66666666 lbs of CO2
// https://www.nasdaq.com/articles/the-average-american-spends-this-much-driving-to-the-grocery-store#:~:text=The%20average%20shopper%20drives%20four,miles%20per%20gallon%20of%20gas.
function co2GroceryStore(wasted: WastedData) {
  let totalCO2 = 0;
  for (const value of wasted.values()) {
    totalCO2 += value.kgCO2 * value.count;
  }

  return totalCO2 / (1.20957663 * 20);
}

function americaFoodWaste(wasted: WastedData) {
  let totalWeight = 0;
  for (const value of wasted.values()) {
      totalWeight += value.weight * value.count;
  }

  return totalWeight / (160 * Math.pow(10, 9));
}

function wasteAmericanCo2(wasted: WastedData) {
  let totalCo2 = 0;
  for (const value of wasted.values()) {
    totalCo2 += value.kgCO2 * value.count;
  }

  // 16 tons of Co2
  return totalCo2 / (14514.9558 * 4);
}

function americanMeatEating(wasted: WastedData) {
  let count = 0;
  for (const value of wasted.values()) {
    if (value.name == "Pork" || value.name == "Steak" || value.name == "Chicken Thigh") {
      count += value.weight * value.count;
    }
  }

  // https://sentientmedia.org/meat-consumption-in-the-us/
  // https://farmdocdaily.illinois.edu/2021/05/an-overview-of-meat-consumption-in-the-united-states.html
  return count / (250 / 12);
}

function yearOfOvereating(wasted: WastedData) {
  let calorieCount = 0;
  for (const value of wasted.values()) {
    calorieCount += value.calories * value.count;
  }

  // Eating 3500 calories for 365 days.
  return calorieCount / (1350 * 365);
}

function averageAmericanMonth(wasted: WastedData) {
  let totalWeight = 0;
  for (const value of wasted.values()) {
      totalWeight += value.weight * value.count;
  }

  // 470 pounds divided by the number of months.
  return totalWeight / (470 / 12);
}

function Article() {
  const [achievementsIsOpen, setAchievementsIsOpen] = useState<boolean>(false);

  let citationIndex = 1;
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
          <Paragraph>
            Americans waste 80 million tons of food each year<Cite index={citationIndex++}/>, 40% of all of the food that we produce<Cite index={citationIndex++}/>. For every person, 470 pounds of food<Cite index={citationIndex++}/> is going down the drain. That's 438,000 calories<Cite index={citationIndex++}/>, 1,300 dollars<Cite index={citationIndex++}/>, and 2400 pounds of CO2<Cite index={citationIndex++}/>. The average American wastes 390 meals, or enough to feed a family of four for a month! With numbers this big, it can be hard to keep your intuition for just how much food is going nowhere. Waste a couple of apples to remind yourself of what it's like.
          </Paragraph>

          <WasteSection wastables={[apple]}></WasteSection>

          <Checkpoint label="Waste three apples to continue." progressFunction={threeApplesProgress}>

          <Paragraph>Before we get too far ahead of ourselves, let's turn back to the root of the problem and ask why it even matters in the first place. There are three main reasons: hungry people, lost money, and environmental damage.</Paragraph>
          
          <Paragraph>One in seven Americans is food insecure, including one in five children<Cite index={citationIndex++}/>. Wasted food is therefore evidence of a failure to distribute food to those who need it, even when it is available. The fact that there are people starving doesn't mean that we should make more food: We produce far more food that would be required to feed our population<Cite index={citationIndex++}/>. So, even if we did distribute it properly, we would still be wasting money growing food, processing it, and transporting it, only so it can be thrown away before it's eaten. Last, that surplus food is responsible for a significant amount of carbon dioxide. Food that is never eaten accounts for 8% of the total greenhouse emissions in the US<Cite index={citationIndex++}/>. If food waste were a country, it would have the third highest emissions, behind China and the US.<Cite index={citationIndex++}/></Paragraph>

          <WasteSection wastables={[dozenEggs, cheese, carrots]}></WasteSection>

          <Checkpoint label="Throw out the CO2 equivalent of driving to the grocery store twenty times." progressFunction={co2GroceryStore}>

          <Paragraph>But who is wasting all of this food? It turns out that it's you and me. Households are the biggest contributors to food waste. In 2021, residential food waste accounted for 48% of total surplus food, much more than farms, manufacturers, and the foodservice industry, each of which contributed about a sixth of the waste.<Cite index={citationIndex++}/></Paragraph>

          <Paragraph>Before we dive into why we are wasting so much, it's important to point out what food waste actually refers to: It is every pound of biological matter that the food system produces that ends up uneaten. This includes things that you might not necessarily consider wasted, like inedible parts cut away at a packinghouse or food that spoils in storage. However, most of it is waste that is salvageable - everything from the unwanted leftovers to crops left unharvested in the field because of contracts gone bad.</Paragraph>

          <ResidentialWastePieChart />

          <Paragraph>Looking for ways to reduce our waste, one of the first problems that pops up is the issue of food spoilage. On the residential side, 25% of wasted food is spoiled and 7.5% is because of concerns with “best by” or “use by” data according to ReFed<Cite index={citationIndex++}/>. A 2019 FDA report put the number even higher, with consumer uncertainty on date labels contributing about 20% of the food waste in the home<Cite index={citationIndex++}/>. Legislation for standardizing these labels shows promise, with estimates of a 12% reduction in food wasted because of confusion over dates<Cite index={citationIndex++}/>. However, many of the most wasted food items (lettuce, bananas, apples, and bread for example<Cite index={citationIndex++}/>) don't even have date labels - they are wasted because of poor planning, improper storage, or plain laziness. While improved food date labels is would be helpful, it's only a stepping stone on a longer path to a better relationship with food.</Paragraph>

          <WasteSection wastables={[lettuce, bananas, apple, bread, gallonOfMilk]}></WasteSection>

          <Checkpoint label='Throw out the food wasted by an average American in a month.' progressFunction={averageAmericanMonth}>

          <Paragraph>With food waste increasing and climate crisis becoming more threatening day by day, we must do our part as consumers to reduce waste. Small changes in our habits, from storing bread in the freezer to keeping a paper towel with your leftover lettuce to absorb excess moisture can have a relatively large effect in the aggregate (and it will save you money!). Tips and tricks for saving food are widely available (try <a href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/10-ways-to-cut-your-food-waste">here</a>, <a href="https://newsletters.wbur.org/?view_newsletter=859f940010f1d13ca2a78975875220b8&id=4004&utm_source=WBUR+Editorial+Newsletters&utm_campaign=671201ddbf-Cooked_6&utm_medium=email&utm_term=0_d0781a0a0c-671201ddbf-136910351">here</a>, or <a href="https://www.nytimes.com/wirecutter/guides/how-to-reduce-food-waste/">here</a>), the missing piece is a culture shift towards being cognizant of the impact we have on the Earth, and of doing more with less.</Paragraph>


          <Paragraph>Part of that shift is to reduce overeating. Americans currently consume around 3,540 calories per day<a href="https://www.nytimes.com/wirecutter/guides/how-to-reduce-food-waste/">here</a>, more than 50% higher than the recommended 2000-2300. Counting those excess calories as waste on top of the 1200 calories explicitly thrown out, our daily food waste more than doubles, reaching 2590 calories - more than we were even supposed to eat in the first place!</Paragraph>

          <WasteSection wastables={[pizza, iceCream, cake]} />

          <Checkpoint label="Waste a year's worth of overeating" progressFunction={yearOfOvereating}>

          <Paragraph>This massive overconsumption is a primary reason why approximately 40% of the US is obese<Cite index={citationIndex++}/>. Unless we are able to change our eating habits, we will continue to waste our own money, the Earth's resources, our health, and the health of those who cannot afford enough to eat. However, it's worth pointing out that the blame for overeating should not rest solely on the consumer. Driven by capitalism, our culture compels us to consume as much as we can afford - as a show of wealth and status, but also as a way to pass the time, a kind of entertainment. On top of that, many people live in food deserts, where access to nutritious food is sparse. Unless alternative food options are available, they are forced to eat calorie-dense, addictive foods that promote overeating. So, while overconsumption hurts the consumer and is partially our own fault, it's so deeply ingrained in our society that regulation, policy, and large-scale cultural shifts will likely have to work in tandem if significant progress is to be made on the issue.</Paragraph>

          <WasteSection wastables={[happyMeal, cheetos, kfcBucket]}/>

          <Checkpoint label={"Waste a week of junk food."} progressFunction={junkFood}>

          <CarbonIntensityChart />

          <Paragraph>Although we've mostly considered food waste in terms of raw mass up to this point, that's really a mischaracterization of the waste created by animals. Because animals lose energy digesting the plants that they eat, they are an inefficient food source. We would often be better off eating plant-based protein rather than converting it into a smaller amount of animal protein, then eating that. However, this isn't always the case. Animals often get energy from protein sources that humans could never consume, like grass or hay, which means that figuring out how much human-edible protein you are using to produce a gram of animal protein is highly dependent on the way that the animal is raised. For pasture-raised dairy cattle, you typically see 30 grams of protein from milk output for every gram of human-edible protein that's expended. For beef cattle raised on cereal grains, it takes three grams of plant protein to produce just one gram of protein from beef.<Cite index={citationIndex++}/></Paragraph>

          <WasteSection wastables={[chickenThigh, pork, steak]} />

          <Checkpoint label="Waste the amount of meat eaten by an American in a month." progressFunction={americanMeatEating}>

          <Paragraph>There is a catch though: Pasture-raised animals require a <i>massive</i> amount of land. On one acre of land, you can raise about one cow, which gives you about 88,000 grams of protein after two years (cattle actually grow slower on grass compared to grain). Or, you could grow 513,000 grams of protein on the same area of land from soybeans, eleven times as much protein. Although it varies widely from case to case, animals typically represent either an inefficient energy source, a substantial land investment, or both.</Paragraph>

          <Paragraph>Aside from the destruction of habitat that is required to produce animals, the animals themselves also cause a large amount of damage to the environment because of the greenhouse gasses that their production emits. Cows famously produce a large amount of methane, but these emissions end up being negligible relative to the additional emissions required to process and transport the animals. All totaled, beef and lamb emit the equivalent of ~247 grams of CO2 for every calorie produced. Chickens, fish, and pork are much less destructive, but they are still more damaging to the environment than something like tofu (which is produced from soybeans, which are a cereal crop).</Paragraph>

          <Paragraph>In spite of the inefficiencies associated with beef, and to a lesser degree, chicken consumption, large quantities of these meats are still consumed annually. The average American eats around 57 lbs of beef each year{/*(https://extension.psu.edu/feeding-beef-cattle)*/} and 98 pounds of chicken {/*(https://www.statista.com/statistics/1108994/us-total-chicken-production/)*/}, resulting in almost double the meat intake compared to the 1940s{/* (https://www.earth-policy.org/data_highlights/2012/highlights25)*/} and destroying the planet along the way. If every single American were to go vegan, the amount of CO2 emitted by the average diet annually would decrease by more than a ton, decreasing the emissions of the entire country by 7%. The power to improve the health of the planet is in the hands of the everyday person - it just seems that we haven't had the collective willpower to make that choice yet. We are the ones who have to change in order to prevent global catastrophe.</Paragraph>

          <WasteSection wastables={[chicken, pig, cow]} />
          <Checkpoint label="Waste the CO2 emitted by the average American family of four each year." progressFunction={wasteAmericanCo2}>

          <Paragraph>Of course, it would be remiss to fail to mention the reasons for waste that are out of our control. Restaurants serve portions that are too large, which promotes overeating. In American capitalism, it favors companies to advertise and encourage us to buy as much as we can, because it makes them more money. Grocery stores have not done enough to reduce waste, with the notable exception of Tesco, which has reduced food waste to less than 1% for in-store products. Hopefully, their success will shame others into following.</Paragraph>


          <Paragraph>Ultimately, we should vote with our forks and with our ballots for policies that reduce food waste and propose solutions to climate change. On top of that, we must examine our own behaviors. There is no policy that causes 2.5% of all food produced to spoil in our refrigerators, 1% of food to go to waste because we don't want leftovers, or 0.5% of food to be thrown out because it doesn't taste good. Further, there is no policy forcing us to eat 19 billion pounds of beef, causing 5% of all US emissions. There is no policy forcing us to eat nearly twice the number of calories that we need. We waste food on an unbelievably massive scale. What can <i>you</i> do to fix that?</Paragraph>

          <WasteSection wastables={[apple, gallonOfMilk, bread, bananas, lettuce, cheese, carrots, dozenEggs, chickenThigh, steak, pork, pizza, iceCream, cake, cow, pig, egg, chicken, acreOfWheat, mealPlan, swimmingPoolOfMilk]}></WasteSection>

          <Checkpoint label="Waste the amount of food wasted by the US population every year." progressFunction={americaFoodWaste}>
            
          <Paragraph>Thank you for reading.</Paragraph>

          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
          </Checkpoint>
        </main>
      </WastedProvider>
    </>
  )
}

export default Article;
