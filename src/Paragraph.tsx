import { PropsWithChildren } from "react";

export default function Paragraph({children}: PropsWithChildren<{}>) {
    return <p className="article">
        {children}
    </p>
}
