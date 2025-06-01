import { Children } from "react";

export default function Container({children}) {
    return <>
     <div className="md:w-[1140px] md:m-auto px-1 md:px-0">{children}</div>
    </>
}