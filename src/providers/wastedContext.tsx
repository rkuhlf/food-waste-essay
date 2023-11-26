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
}>({
  data: initialData, 
  updateData: () => {},
  refreshState: () => {},
  skipEverything: () => {},
});

// Create a provider component
export const WastedProvider = ({ children }: PropsWithChildren<{}>) => {
  const [data, setData] = useState<WastedContextData>(initialData);

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

  return (
    <WastedContext.Provider value={{data, updateData, refreshState, skipEverything}}>
      {children}
    </WastedContext.Provider>
  );
};

