import { AchievementData } from "../components/Achievement";
import { WastedData } from "../providers/wastedContext";

export const achievements: AchievementData[] = [
    {
        title: "Waste a Meal",
        description: "Throw away the average meal.",
        iconSrc: "./assets/trash.svg",
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                if (totalWeight > 1.2) {
                    return true;
                }
            }

            return false;
        },
        requirement: "Waste 1.2 pounds.",
        completed: false,
    },
    {
        title: "The Average American",
        description: "Throw away the amount of food wasted by the average American each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 470) {
                    return true;
                }    
            }

            return false;
        },
        requirement: "Waste 470 pounds.",
        completed: false,
    },
    {
        title: "African Eating",
        description: "Throw away the amount of food eaten by the average African each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1192) {
                    return true;
                }    
            }

            return false;
        },
        requirement: "Waste 1192 pounds.",
        completed: false,
    },
    {
        title: "Average Eating",
        description: "Throw away the amount of food eaten by an average person worldwide each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1488) {
                    return true;
                }    
            }

            return false;
        },
        requirement: "Waste 1488 pounds.",
        completed: false,
    },
    {
        title: "American Eating",
        description: "Throw away the amount of food eaten by the average American each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
            
                if (totalWeight > 1996) {
                    return true;
                }    
            }

            return false;
        },
        requirement: "Waste 1996 pounds.",
        completed: false,
    },
    {
        title: "Got Milk?",
        description: "Throw away the amount of milk that's wasted in America each year.",
        iconSrc: "./assets/trash.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                if (value.name == "Gallon of Milk" || value.name == "Olympic Pool of Milk") {
                    totalWeight += value.weight * value.count;
                
                    // 378 million pounds.
                    if (totalWeight > 378 * Math.pow(10, 6)) {
                        return true;
                    }    
                }
            }

            return false;
        },
        requirement: "Waste 378 million pounds of milk.",
        completed: false,
    },
    {
        title: "Leftovers for the Less Fortunate",
        description: "Throw away the amount of food that was donated to the Houston Food Bank in 2020.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalPrice = 0;
            for (const value of wasted.values()) {
                totalPrice += value.price * value.count;
                
                // This is probably somewhat more than 22 million meals.
                if (totalPrice > 224806244) {
                    return true;
                }
            }

            return false;
        },
        requirement: "Waste 224,806,244 dollars.",
        completed: false,
    },
    {
        title: "The Smallest State",
        description: "Throw away the amount of food that is wasted in Rhode Island each day.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                // This is about 1,008,219 pounds.
                if (totalWeight > 184000 * 2000 / 365) {
                    return true;
                }
            }

            return false;
        },
        requirement: "Waste 1,008,219 pounds.",
        completed: false,
    },
    {
        title: "All in a Day's Work",
        description: "Throw away the amount of food that is wasted in America each day.",
        iconSrc: "./assets/us-map.svg", // TODO
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                // 438,356,164.
                if (totalWeight > 160 * Math.pow(10, 9) / 365) {
                    return true;
                }
            }

            return false;
        },
        requirement: "Waste 438,356,164 pounds.",
        completed: false,
    },
    {
        title: "Waste Across America",
        description: "Throw away the amount of food that is wasted in America each year.",
        iconSrc: "./assets/us-map.svg",
        completionFunction: (wasted: WastedData) => {
            let totalWeight = 0;
            for (const value of wasted.values()) {
                totalWeight += value.weight * value.count;
                
                if (totalWeight > 160 * Math.pow(10, 9)) {
                    return true;
                }
            }

            return false;
        },
        requirement: "Waste 160 billion pounds.",
        completed: false,
    }
]

// Add some more for CO2 to give a better picture.

// 4 miles is 0.133333333 gallons, which is 2.66666666 lbs of CO2
// https://www.nasdaq.com/articles/the-average-american-spends-this-much-driving-to-the-grocery-store#:~:text=The%20average%20shopper%20drives%20four,miles%20per%20gallon%20of%20gas.


// Average vehicle is 6-9 tons each year. https://www.c2es.org/content/reducing-your-transportation-footprint/#:~:text=Burning%20one%20gallon%20of%20gasoline,tons%20of%20CO2%20each%20year.

// Fly from NY to LA
// 133,250 lbs
// https://terrapass.com/blog/airline-carbon-offsets-air-travel-green/#:~:text=According%20to%20BlueSkyModel%2C%20the%20average,tonnes)%20of%20carbon%20dioxide%20emissions.



// Add some more for CO2 to give a better picture.
