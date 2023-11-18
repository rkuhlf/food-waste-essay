export type WastedName = "Apple" | "Turkey" | "slice of bread" | "Cow" | "Chicken" | "Pig" | "Egg";

export type Wastable = {
    name: WastedName;
    
    calories: number;
    weight: number;
    kgCO2: number;
    price: number;

    count: number;
    image: string;
};
  