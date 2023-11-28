import { Link } from "react-router-dom";
import "./Cite.css";

// We have an array of citations. The citation says what number it is, which tells you where to link to.
// Then there is a page where we have all of the citations.
export function Cite({ index }: { index: number }) {
    return (
        <sup className="citation">
            <Link to={`./notes?citation=${index}`}>{index}</Link>
        </sup>
    )
}