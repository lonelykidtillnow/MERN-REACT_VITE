import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Api from "./api";
import Details from "./productdetails";

const Display=createBrowserRouter([
    {
        path:"/",
        element:<Api />
    },
    {   
            //Step 1.
        path:"/:id",
        element:<Details />
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Display} />)