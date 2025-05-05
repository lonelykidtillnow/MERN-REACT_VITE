import { useState } from "react";
import ReactDOM from "react-dom/client";

const Display=()=>{
    //local state variable
    const [value,setvalue]=useState(0);
    return(
        <>
        <h1>{value}</h1>
        <button 
        onClick={()=>{
            setvalue(value+1);
        }}>+</button>

        <button onClick={()=>{
            setvalue(0)
        }}>0</button>

        <button
        onClick={()=>{
            setvalue(value-1);
        }}>-</button>
        </>
    )
}

const a=ReactDOM.createRoot(document.getElementById("root"));
a.render(<Display/>);