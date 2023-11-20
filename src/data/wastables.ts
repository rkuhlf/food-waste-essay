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
    calories: 100,
    kgCO2: 0.01,
    price: 1,
    weight: 8.6,

    count: 1,
}

// Loaf of bread.
// 10" pizza.


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






export const swimmingPoolOfMilk: Wastable = multiplyWastable(gallonOfMilk);

// Lake michigan of orange juice.

// An acre of wheat.

// An acre of soybeans.

// The world's biggest onion.

// All of the hotdogs eaten by Jimmy Chestnut.

// Throw away a blue whale.

// Broccoli cruise ship.

// The production output of a cheese factory for a year.

// Throw away 100 blue whales

// A full rice meal plan for four years 375 * 8. 3000 meals; 5000 lbs.

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