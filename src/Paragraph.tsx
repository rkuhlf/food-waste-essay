import { PropsWithChildren } from "react";

export default function Paragraph({children}: PropsWithChildren<{}>) {
    return <div className="article">
        {children}
    </div>
}
