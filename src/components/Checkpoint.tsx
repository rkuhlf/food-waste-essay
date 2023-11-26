import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { WastedContext, WastedData } from "../providers/wastedContext";
import "./Checkpoint.css";

export default function Checkpoint({ children, label, progressFunction }: PropsWithChildren<{
    progressFunction: (wasted: WastedData) => number;
    label: string;
}>) {
    const { data, skipEverything } = useContext(WastedContext);
    const [progress, setProgress] = useState<number>(0);
    const [hasBeenCompleted, setHasBeenCompleted] = useState<boolean>(false);

    useEffect(() => {
        const newProgress = progressFunction(data.wasted);
        setProgress(newProgress);

        if (newProgress >= 1) {
            setHasBeenCompleted(true);
        }
    }, [data, progressFunction, setProgress]);

    if (hasBeenCompleted || data.skipEverything) {
        return <>
            {children}
        </>
    }

    return (
        <div className="unmet-checkpoint">
            <div className="checkpoint-progress" style={{width: progress * 100 + "%"}}></div>
            <div className="checkpoint-label">
                {label}
            </div>
            <div className="skip-everything" onClick={() => skipEverything()}>
                Skip to the end
            </div>
            <div className="hidden-content">
                {children}
            </div>
        </div>
    )
}