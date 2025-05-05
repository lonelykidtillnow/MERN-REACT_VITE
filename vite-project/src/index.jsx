import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";

//old function
function Section(){
    return(  
        <>
            <h1>hello</h1>
        </>
    )
}

//single line return & new (or) arrow function
const Header=()=>{
    //tailwind css
    return <p className="text-purple-500">Hello</p>
}

//multiline return
const Footer=()=>{
    return(
        <div>
            <p>Bye</p>
            {/* tailwind css */}
            <p className="text-[brown]">Come again</p>
        </div>
    )
}

const a=ReactDOM.createRoot(document.getElementById("root1"));
a.render(<Header/>);

//react-parcel code
const b=React.createElement("h1",null,"Welcome buddy");
const c=ReactDOM.createRoot(document.getElementById("root2"))
c.render(b);

const d=ReactDOM.createRoot(document.getElementById("root3"));
d.render(Footer())

const e=ReactDOM.createRoot(document.getElementById("root4"))
e.render(<Section />)