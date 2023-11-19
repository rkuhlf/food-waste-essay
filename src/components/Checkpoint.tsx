import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { WastedContext, WastedData } from "../providers/wastedContext";
import "./Checkpoint.css";

export default function Checkpoint({ children, progressFunction }: PropsWithChildren<{
    progressFunction: (wasted: WastedData) => number;
}>) {
    const { data } = useContext(WastedContext);
    const [progress, setProgress] = useState<number>(0);
    const [hasBeenCompleted, setHasBeenCompleted] = useState<boolean>(false);

    useEffect(() => {
        const newProgress = progressFunction(data.wasted);
        setProgress(newProgress);

        if (newProgress >= 1) {
            setHasBeenCompleted(true);
        }
    }, [data, progressFunction, setProgress]);

    if (hasBeenCompleted) {
        return <>
            {children}
        </>
    }

    return (
        <div className="unmet-checkpoint">
            <div className="checkpoint-progress" style={{width: progress * 100 + "%"}}></div>
            <div className="checkpoint-label">
                Waste three apples to continue.
            </div>
            <div className="hidden-content">
                {children}
            </div>
        </div>
    )
}