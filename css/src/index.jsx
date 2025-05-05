import React from "react";
import ReactDOM from "react-dom/client";
import "./normalcss.css"
import "./tailwind.css"

const Display=()=>{
    return(
        <>
        {/* normal css */}
        <p className="a">Hello</p>

        {/* tailwind css 4.0 */}
        <p className="text-[25px] bg-green-700">Hi</p>
        </>
    )
}
const a=ReactDOM.createRoot(document.getElementById("root"));
a.render(<Display />)