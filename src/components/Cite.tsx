import "./Cite.css";

// We have an array of citations. The citation says what number it is, which tells you where to link to.
// Then there is a page where we have all of the citations.
export function Cite({ index }: { index: number }) {
    return (
        <sup className="citation">
            <a href={`./notes#citation-${index}`} target="_blank">{index}</a>
        </sup>
    )
}