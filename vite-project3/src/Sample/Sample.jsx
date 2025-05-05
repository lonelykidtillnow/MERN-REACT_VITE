import React from "react";
import "../tailwind.css";
const Sample=(props)=>{
    return(
        <>
        <table className="border-black border-[2px]">
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.gender}</h2>
        </table>
        </>
    )
}
export default Sample