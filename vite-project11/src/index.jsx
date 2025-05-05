import React from "react";
import ReactDOM from "react-dom/client";

import "./tailwind.css"

import Cart from './cart';
import Overview from './details';
//3.custom hooks
import useFetchProducts from './hooks/useFetchProducts';
import useFetchDetails from './hooks/useFetchDetails';

import {useParams} from "react-router-dom";
import {createBrowserRouter,RouterProvider} from "react-router-dom"


//dynamic routing
const Display1=()=>{
    //3.custom hooks
    const value=useFetchProducts();

    return(
        <>
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    value.map((items)=>{
                        const total=(items.price-(items.price*items.discountPercentage/100)).toFixed(2);
                        return(
                            <Cart
                            key={items.id}
                            id={items.id}
                            src={items.thumbnail}
                            name={items.title}
                            price={items.price}
                            quantity={items.stock}
                            discount={items.discountPercentage}
                            total={total}
                            />
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
const Display2=()=>{
    //custom hook
    const {value,id}=useFetchDetails()
    return(
        <>
            <Overview
                key={value.id}
                src={value.thumbnail}
                name={value.title}
                price={value.price}
                rating={value.rating}
                description={value.description}
            />
        </>
    )
}

//1.component composition
const Type1=createBrowserRouter([
    {
        path:"/",
        element:<Display1 />
    },
    {
        path:"/productdetails/:id",
        element:<Display2 />
    }
])
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<RouterProvider router={Type1} />)
