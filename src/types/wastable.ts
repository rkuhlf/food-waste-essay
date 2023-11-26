export type WastedName = "Apple" | "Turkey" | "slice of bread" | "Cow" | "Chicken" | "Pig" | "Egg" | "Gallon of Milk" | "Olympic Pool of Milk" | "4-Year Meal Plan" | "Acre of Wheat";

export type Wastable = {
    name: WastedName;
    
    calories: number;
    weight: number;
    kgCO2: number;
    price: number;

    count: number;
    image: string;
};
  