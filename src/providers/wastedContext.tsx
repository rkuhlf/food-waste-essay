import { createContext, PropsWithChildren, useState } from "react";
import { Wastable, WastedName } from "../types/wastable";


export type WastedData = Map<WastedName, Wastable>;

type WastedContextData = {
  wasted: WastedData;
  refresh: boolean;
  skipEverything: boolean;
}

const initialData = {
  wasted: new Map(),
  refresh: true,
  skipEverything: false,
};

export const WastedContext = createContext<{
  data: WastedContextData,
  updateData: (d: Partial<WastedContextData>) => void,
  refreshState: Function,
  skipEverything: Function,
  reset: Function,
}>({
  data: initialData, 
  updateData: () => {},
  refreshState: () => {},
  skipEverything: () => {},
  reset: () => {},
});

// Create a provider component
export const WastedProvider = ({ children }: PropsWithChildren<{}>) => {
  // Shallow copy is good enough.
  const [data, setData] = useState<WastedContextData>({...initialData});

  const updateData = (newData: Partial<WastedContextData>) => {
    const overriden = {
        ...data,
        ...newData,
    };
    setData(overriden);
  };

  const refreshState = () => {
    updateData({
      refresh: !data.refresh
    })
  }

  const skipEverything = () => {
    updateData({
      skipEverything: true
    })
  }

  const reset = () => {
    console.log("resetting");
    setData({
      ...initialData
    })
  }

  console.log(reset);

  return (
    <WastedContext.Provider value={{data, updateData, refreshState, skipEverything, reset}}>
      {children}
    </WastedContext.Provider>
  );
};

