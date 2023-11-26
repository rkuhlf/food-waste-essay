import "./WasteSection.css";

import WasteMetrics from "./WasteMetrics";
import { Wastable } from "../types/wastable";
import WasteButton from "./WasteButton";



/**
 * A grouping of buttons that let you waste food.
 */
export default function WasteSection({wastables}: {wastables?: Wastable[]}) {
    return (
        <div className="waste-section-wrapper">
            <div className="waste-section">
                {
                    wastables?.map(wastable => {
                        return <WasteButton toWaste={wastable} />
                    })
                }
            </div>
            <WasteMetrics />
        </div>
    );
}