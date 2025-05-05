import React from "react";
import ReactDOM from "react-dom/client"
//import Functional Components
import Header from "./header";
import Footer from "./footer";
import Hero from "./herosection";
import Cart from "./cartsection";
//import react-router-dom
import {createBrowserRouter,RouterProvider} from "react-router-dom"

//home page
const Home=()=>{
    return(
        <>
        <h1>Home</h1>
        <Header />
        <Hero />
        <Cart />
        <Footer />
        </>
    )
}
//Basic routes
const Type1=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/header",
        element:<Header />
    },
    {
        path:"/herosection",
        element:<Hero />
    },
    {
        path:"/cartsection",
        element:<Cart />
    },
    {
        path:"/footer",
        element:<Footer />
    }
])
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<RouterProvider router={Type1} />);