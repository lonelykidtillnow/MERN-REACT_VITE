import React from "react";
import ReactDOM from "react-dom/client";
import ab from "./hoc";

const Display=()=>{
    return(
        <h1>Hello</h1>
    )
}

const Highordercomponent=ab(Display)

const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<Highordercomponent />)