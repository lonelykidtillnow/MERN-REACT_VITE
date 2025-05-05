import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./error";
import Hero from "./herosection";


const Home=()=>{
    return(
        <>
        <h1>Hello</h1>
        <Error />
        </>
    )
}
//Link to
const Type3=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/herosection",
        element:<Hero />
    }
])
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<RouterProvider router={Type3}/>)