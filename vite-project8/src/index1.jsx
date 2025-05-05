import React from "react";
import ReactDOM from "react-dom/client"
//import Functional Components
import Hero from "./herosection";
import Cart from "./cartsection";
import Footer from "./footer";
import Header from "./header";
import Error from "./error";
//import react-router-dom
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

//home page
const Home=()=>{
    return(
        <>
        <Header />
        <h1>Home</h1>
        <Footer />
        </>
    )
}
//header-footer are common
const HeaderFooter=()=>{
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
//Nested routes
const Type2=createBrowserRouter([
    {
        path:"/",
        element:<HeaderFooter />,
        children:[
            {
                path:"home",
                element:<Home />
            },
            {
                path:"herosection",
                element:<Hero />
            },
            {
                path:"cartsection",
                element:<Cart />
            }
        ],
        //error showing routes
        errorElement:<Error />
    }
])
const a=ReactDOM.createRoot(document.getElementById("root"));
a.render(<RouterProvider router={Type2}/>)