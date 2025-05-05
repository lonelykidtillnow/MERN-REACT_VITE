import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import Props from "./props";

const Display = () => {
    //access props drilling data
    const data = useContext(Props)
    return (
        <>
            <h1 className="text-red-600">Hello</h1>
            <h1>{data.name}</h1>
        </>
    )
}

const App = () => {
    return (
        //changing props drilling data
        <Props.Provider value={{name:"madesh"}}>
            <Display />
        </Props.Provider>
    )
}
const x = ReactDOM.createRoot(document.getElementById("root"));
x.render(<App />)