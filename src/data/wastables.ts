import { Wastable, WastedName } from "../types/wastable";

export const apple: Wastable = {
    name: "Apple",
    image: "./assets/apple.svg",
    calories: 95,
    kgCO2: 0.12, // https://impactful.ninja/what-is-the-carbon-footprint-of-apples/
    price: 1, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 0.5, // https://ryansjuice.com/blog/how-many-apples-in-a-pound#:~:text=The%20average%20apple%20is%20between,3%20apples%20in%20a%20pound.

    count: 1,
}

export const gallonOfMilk: Wastable = {
    name: "Gallon of Milk",
    image: "./assets/milk.svg", // TODO
    calories: 2305, // USDA
    kgCO2: 8, // Milk means more
    price: 4.36, // USDA
    weight: 8.6,

    count: 1,
}

export const bread: Wastable = {
    name: "Loaf of Bread",
    image: "./assets/bread.svg",
    calories: 1239, // 219 calories per 100g https://www.fob.uk.com/wp-content/uploads/2020/02/FS-20-Calories-in-Bread.pdf
    kgCO2: 0.5, // https://www.treehugger.com/whats-environmental-impact-loaf-bread-4858589#:~:text=In%20their%20life%20cycle%20analysis,fertilizers%20used%20to%20grow%20wheat.
    price: 3.50, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 1.25, // https://theshortordercook.com/how-many-slices-in-a-loaf-of-bread/

    count: 1,
}

// Assuming 6 bananas in the bunch.
export const bananas: Wastable = {
    name: "Bananas",
    image: "./assets/banana.svg",
    calories: 105 * 6, // https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-many-calories-in-a-banana#:~:text=A%20medium%20banana%20contains%20105,large%20banana%20contains%20121%20calories.
    kgCO2: 0.11 * 6, // https://www.co2everything.com/co2e-of/banana
    price: 2, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 0.260145469 * 6, // https://fruitsandveggies.org/expert-advice/many-pounds-bananas-need-approximately-800-runners/

    count: 1,
}

// Assuming one cup shredded.
export const lettuce: Wastable = {
    name: "Lettuce",
    image: "./assets/lettuce.svg",
    calories: 5, // USDA
    kgCO2: 0.26 * 0.079366, // https://impactful.ninja/what-is-the-carbon-footprint-of-lettuce/#:~:text=Lettuce%20has%20a%20carbon%20footprint,sustainable%20way%20to%20purchase%20lettuce.
    price: 0.91, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 0.0793664144, // USDA

    count: 1,
}

export const cheese: Wastable = {
    name: "Cheese Wedge",
    image: "./assets/cheese-wedge.svg",
    calories: 1578.04786,
    kgCO2: 12.2597513, // https://www.co2everything.com/co2e-of/cheese
    price: 7.49, // https://www.northcountrycheese.com/products/4-oz-parmesan-wedge
    weight: 0.96875, // https://www.northcountrycheese.com/products/4-oz-parmesan-wedge

    count: 1,
}

export const carrots: Wastable = {
    name: "Baby Carrots",
    image: "./assets/carrot.svg",
    calories: 35 * 5,
    kgCO2: 0.18, // https://impactful.ninja/what-is-the-carbon-footprint-of-apples/
    price: 0.92, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 1, // https://www.heb.com/product-detail/h-e-b-mini-cut-carrots/4833574

    count: 1,
}

export const chickenThigh: Wastable = {
    name: "Chicken Thigh",
    image: "./assets/chicken-thigh.svg",
    calories: 206, // USDA
    kgCO2: 0.4756, // https://apps.carboncloud.com/climatehub/product-reports/id/82432573466
    price: 0.255736224 * 2, // Target
    weight: 0.255736224, // USDA

    count: 1,
}

export const steak: Wastable = {
    name: "Steak",
    image: "./assets/steak.svg",
    calories: 679, // USDA
    kgCO2: 38.9049999941, // https://www.co2everything.com/co2e-of/beef
    price: 6.97, // https://www.target.com/p/usda-choice-angus-beef-new-york-strip-steak-value-pack-1-59-3-80-lbs-price-per-lb-good-38-gather-8482/-/A-14911566
    weight: 0.553360278, // USDA

    count: 1,
}

// Assuming 3 pork chops.
export const pork: Wastable = {
    name: "Pork",
    image: "./assets/pork.svg",
    calories: 211 * 3, // USDA.
    kgCO2: 6.26400, // https://impactful.ninja/what-is-the-carbon-footprint-of-apples/
    price: 3.44, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 0.575406504, // USDA

    count: 1,
}

export const pizza: Wastable = {
    name: '10" Pizza',
    image: "./assets/pizza.svg",
    calories: 240 * 4, // https://www.dominos.com/en/pages/content/nutritional/cal-o-meter
    kgCO2: 2.96, // https://biz.dominos.com/assets/js/pizza-footprint/index.html
    price: 12,
    weight: 0.5, // https://www.pizzabien.com/blogs/news/how-much-does-pizza-weigh-3-factors-will-decide-it

    count: 1,
}

export const iceCream: Wastable = {
    name: 'Ice Cream',
    image: "./assets/ice-cream.svg",
    calories: 970,
    kgCO2: 3.4, // https://www.benjerry.com/values/issues-we-care-about/our-climate-impact
    price: 5,
    weight: 1, // https://www.target.com/c/ice-cream-frozen-foods-grocery/ben-jerry-s/-/N-5xsz2Z56ghc

    count: 1,
}

export const cake: Wastable = {
    name: 'Cake',
    image: "./assets/cake.svg",
    calories: 3100,
    kgCO2: 2.7640785, // https://foodfootprint.nl/en/foodprintfinder/cake/
    price: 15, // https://www.target.com/p/double-cookies-n-39-cream-cake-7-34-favorite-day-8482/-/A-81450391#lnk=sametab
    weight: 30 / 16,

    count: 1,
}

export const happyMeal: Wastable = {
    name: 'Happy Meal',
    image: "./assets/mcdonalds.svg",
    calories: 685,
    kgCO2: 2.35, // https://plantbasednews.org/news/environment/big-mac-carbon-footprint/
    price: 4,
    weight: 0.251326979 + 0.196211413 + 0.156528206 + 0.440924524,

    count: 1,
}

export const cheetos: Wastable = {
    name: 'Chips',
    image: "./assets/chips.svg",
    calories: 15 * 170,
    kgCO2: 0.066 * 15, // https://www.greenchoicenow.com/p/cheetos-puffs-flavored-snacks
    price: 5.7, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 15/16, // https://ryansjuice.com/blog/how-many-apples-in-a-pound#:~:text=The%20average%20apple%20is%20between,3%20apples%20in%20a%20pound.

    count: 1,
}

export const kfcBucket: Wastable = {
    name: 'KFC Bucket',
    image: "./assets/kfc-bucket.svg",
    calories: 1860,
    kgCO2: 1.39479654, // https://impactful.ninja/what-is-the-carbon-footprint-of-apples/
    price: 18, // https://www.selinawamucii.com/insights/prices/united-states-of-america/apples/
    weight: 0.75, // My Mom.

    count: 1,
}

export const cow: Wastable = {
    name: "Cow",
    image: "./assets/cow.svg",
    calories: 852750, // 1,137 calories per pound.
    kgCO2: 10979.203, // https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/carbon-footprint-chicken/#:~:text=The%20carbon%20footprint%20of%20chicken%20per%20kg%20is%3A%2012.27kg,emissions%20per%20kilogram%20of%20chicken.
    price: 3750, // https://www.bls.gov/regions/mid-atlantic/data/averageretailfoodandenergyprices_usandmidwest_table.htm
    weight: 750, // https://beef2live.com/story-amount-freezer-beef-expected-carcass-0-111639

    count: 1,
}

export const pig: Wastable = {
    name: "Pig",
    image: "./assets/pig.svg",
    calories: 118692,
    kgCO2: 448.3, // https://www.ccacoalition.org/resources/review-greenhouse-gas-emissions-pig-houses-production-carbon-dioxide-methane-and-nitrous#:~:text=Taking%20into%20account%20the%20results,4.87%20kg%20CO%202equiv.
    price: 1480, // https://www.google.com/search?q=how+much+is+the+hanging+carcass+of+a+pig&rlz=1C1RXQR_enUS1039US1039&oq=how+much+is+the+hanging+carcass+of+a+pig&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHtIBCDU3NTVqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8
    weight: 108,

    count: 1,
}

export const egg: Wastable = {
    name: "Egg",
    image: "./assets/egg.svg",
    calories: 78,
    kgCO2: 0.225, // https://www.poultryworld.net/poultry/environmental-footprint-of-the-egg-industry-revealed/#:~:text=The%20scientists%20obtained%20a%20carbon,veal%2C%20pork%20or%20lamb.%E2%80%9D
    price: 0.4525, // https://www.sofi.com/learn/content/average-cost-of-a-dozen-eggs/
    weight: 0.110231131,

    count: 1,
}

export const chicken: Wastable = {
    name: "Chicken",
    image: "./assets/chicken.svg",
    calories: 64530, // 2.7 kg and 239 calories per 100 grams
    kgCO2: 11.7934, // https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/carbon-footprint-chicken/#:~:text=The%20carbon%20footprint%20of%20chicken%20per%20kg%20is%3A%2012.27kg,emissions%20per%20kilogram%20of%20chicken.; 
    price: 21, // https://www.thepricer.org/how-much-do-live-chickens-cost/
    weight: 6, // lbs

    count: 1,
}




export const swimmingPoolOfMilk: Wastable = multiplyWastable(gallonOfMilk, "Olympic Pool of Milk", "./assets/swimming-milk.svg", 490000);
export const dozenEggs: Wastable = multiplyWastable(egg, "A Dozen Eggs", "./assets/egg.svg", 12);

// Lake michigan of orange juice.


// (2.3 bushels of wheat (138 pounds) to produce 100 pounds of white flour) https://www.owgl.org/p/resources/education/wheat-facts
// An acre of wheat. 46.5 bushels in an acre (https://www.statista.com/statistics/190356/wheat-yield-per-harvested-acre-in-the-us-from-2000/);
// 2021.74 pounds of wheat per acre
// 1551 calories per pound https://www.fatsecret.com/calories-nutrition/usda/hard-white-wheat?portionid=48584&portionamount=1.000
export const acreOfWheat: Wastable = {
    name: "Acre of Wheat",
    image: "./assets/wheat.svg",
    calories: 1551 * 2021.74, // https://fdc.nal.usda.gov/fdc-app.html#/food-details/1470524/nutrients
    kgCO2: 11.7934, // https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/carbon-footprint-chicken/#:~:text=The%20carbon%20footprint%20of%20chicken%20per%20kg%20is%3A%2012.27kg,emissions%20per%20kilogram%20of%20chicken.; 
    price: 7 * 2021.74, // https://www.macrotrends.net/2534/wheat-prices-historical-chart-data
    weight: 2021.74, // lbs

    count: 1,
}

// An acre of soybeans.

// The world's biggest onion.

// All of the hotdogs eaten by Jimmy Chestnut.

// Throw away a blue whale.

// Broccoli cruise ship.

// The production output of a cheese factory for a year.

// Throw away 100 blue whales

const CO2_EMISSIONS_PER_POUND = 2.36443884; // From REFED; divide emissions by pounds of waste.

// A full rice meal plan for four years 375 * 8. 3000 meals; 5000 lbs.
export const mealPlan: Wastable = {
    name: "4-Year Meal Plan",
    image: "./assets/pot-of-food.svg",
    calories: 3000 * 800, // probably around 800 calories per meal.
    kgCO2: 5000 * CO2_EMISSIONS_PER_POUND,
    price: 3000 * 10, // https://www.thepricer.org/how-much-do-live-chickens-cost/
    weight: 5000, // lbs

    count: 1,
}


// The daily catch of a commercial fishing boat in Alaska: https://sierraseafood.co/its-a-nautical-life-commercial-fishing-in-alaska/ 55,000 lbs

// The amount that a fishing boat catches over a lifetime. 5 * 50 * 40 = 10,000 days of fishing.


function multiplyWastable(wastable: Wastable, newName: WastedName, newImage: string, times: number): Wastable {
    return {
        name: newName,
        image: newImage,
        calories: wastable.calories * times,
        kgCO2: wastable.kgCO2 * times,
        price: wastable.kgCO2 * times,
        weight: wastable.weight * times,

        count: 1,
    }
}