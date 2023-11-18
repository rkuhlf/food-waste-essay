import { createContext, PropsWithChildren, useState } from "react";
import { Wastable, WastedName } from "../types/wastable";


export type WastedData = Map<WastedName, Wastable>;

type WastedContextData = {
    wasted: WastedData;
    refresh: boolean;
}

const initialData = {
    wasted: new Map(),
    refresh: true,
};

export const WastedContext = createContext<{
  data: WastedContextData,
  updateData: (d: Partial<WastedContextData>) => void,
  refreshState: Function,
}>({
  data: initialData, 
  updateData: () => {},
  refreshState: () => {},
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

  return (
    <WastedContext.Provider value={{data, updateData, refreshState}}>
      {children}
    </WastedContext.Provider>
  );
};

