export const wastedNames = ["Apple", "Turkey", "Lettuce", "Bananas", "Loaf of Bread", "Cow", "Chicken", "Pig", "Egg", "Gallon of Milk", "Olympic Pool of Milk", "4-Year Meal Plan", "Acre of Wheat", "A Dozen Eggs", "Cheese Wedge", "Baby Carrots", "Pork", "Steak", "Chicken Thigh", "Cake", "Ice Cream", '10" Pizza'] as const;

export type WastedName = typeof wastedNames[number];

export type Wastable = {
    name: WastedName;
    
    calories: number;
    weight: number;
    kgCO2: number;
    price: number;

    count: number;
    image: string;
};
  