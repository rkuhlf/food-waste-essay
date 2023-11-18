import { useContext } from "react";
import "./WasteButton.css";
import { WastedContext } from "../providers/wastedContext";
import { Wastable } from "../types/wastable";


export default function WasteButton({
    toWaste
}: {
    toWaste : Wastable;
}) {
    const { data, refreshState } = useContext(WastedContext);

    const getWastedCount = () => {
        const wastable = data.wasted.get(toWaste.name);
        if (!wastable) {
            return 0;
        }

        return wastable.count;
    };

    const getWastedString = (count: number) => {
        return `Wasted ${count}`;
    }

    const wasteItem = () => {
        const wastable = data.wasted.get(toWaste.name);
        if (wastable) {
            wastable.count++;
        } else {
            data.wasted.set(toWaste.name, toWaste);
        }
        
        refreshState();
    }

    return <div className="waste-button" onClick={() => wasteItem()}>
        <div className="labels">
            <span className="card-title">{toWaste.name}</span>
            <span className="wasted-amount">
                {getWastedString(getWastedCount())}
            </span>
        </div>

        <img src={toWaste.image} />
    </div>;
}