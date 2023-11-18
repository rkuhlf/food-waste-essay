import { useContext } from "react";
import { WastedContext } from "../providers/wastedContext";
import { Wastable, WastedName } from "../types/wastable";
import "./WasteMetrics.css";



function computeWastedWeight(wasted: Map<WastedName, Wastable>) {
    let total = 0;
    for (const wastable of wasted.values()) {
        total += wastable.count * wastable.weight;
    }

    return total;
}

function computeWastedDollars(wasted: Map<WastedName, Wastable>) {
    let total = 0;
    for (const wastable of wasted.values()) {
        total += wastable.count * wastable.price;
    }

    return total;
}


function computeWastedEmissions(wasted: Map<WastedName, Wastable>) {
    let total = 0;
    for (const wastable of wasted.values()) {
        total += wastable.count * wastable.kgCO2;
    }

    return total;
}


function WasteMetric({
    label,
    amount,
    name,
    precision
}: {
    label: string;
    amount: number;
    name: string;
    precision?: number;
}) {
    const precisionFactor = Math.pow(10, precision || 0);

    return (
        <div className={`waste-metric waste-metric-${name}`}>
            <span className="amount">{Math.round(amount * precisionFactor) / precisionFactor}</span>

            <span className="label">{label}</span>
        </div>
    )
}

export default function WasteMetrics() {
    const { data } = useContext(WastedContext);

    return (
        <div className="waste-metrics">
            <WasteMetric name="weight" amount={computeWastedWeight(data.wasted)} label="lbs wasted"/>
            <WasteMetric name="money" amount={computeWastedDollars(data.wasted)} label="$ lost"/>
            <WasteMetric name="emissions" amount={computeWastedEmissions(data.wasted)} label="kg CO2" precision={2}/>
        </div>
    )
}