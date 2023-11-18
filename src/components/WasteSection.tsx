import "./WasteSection.css";

import { PropsWithChildren } from "react";
import WasteMetrics from "./WasteMetrics";



/**
 * A grouping of buttons that let you waste food.
 */
export default function WasteSection({children}: PropsWithChildren<{}>) {
    return (
        <div className="waste-section-wrapper">
            <div className="waste-section">
                {children}
            </div>
            <WasteMetrics />
        </div>
    );
}