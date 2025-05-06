import {useState} from "react";
import ReactDOM from "react-dom/client";
import Cart from "./productcart";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Overview from "./productoverview";

//Dynamic routing
const Display1=()=>{
    const[value,setvalue]=useState([])

    useEffect(()=>{
        api()
    },[])
    async function api(){
        try{
            const req=await fetch("https://dummyjson.com/products");
            const res=await req.json();
            setvalue(res.products)
        }
        catch(error){
            console.log(error)
        }
    }
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
                            src={items.thumbnail}
                            name={items.title}
                            price={items.price}
                            quantity={items.stock}
                            discount={items.discountPercentage}
                            total={total}
                            //2.step
                            id={items.id}
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
    const[value,setvalue]=useState([])
    //3.step
    const {id}=useParams()
    console.log(id);

    useEffect(()=>{
        api()
    },[id])
    async function api(){
        try{                                                    //4.step
            const req=await fetch(`https://dummyjson.com/products/${id}`);
            const res=await req.json();
            setvalue(res)
        }
        catch(error){
            console.log(error)
        }
    }
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
const Type1=createBrowserRouter([
    {
        path:"/",
        element:<Display1 />
    },
    {                     //5.step
        path:"/productdetails/:id",
        element:<Display2 />
    }
])
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<RouterProvider router={Type1} />)