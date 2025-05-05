import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Cart from "./productcart";
import "./tailwind.css"

const Display=()=>{
    const [value,setvalue]=useState([]);

    useEffect(()=>{
        api();
    },[])

    async function api(){
        try{
            const req=await fetch("https://dummyjson.com/carts");
            const res=await req.json();
            const allproduct=res.carts.flatMap(fuck=>fuck.products)
            setvalue(allproduct);
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        value.map((items)=>{
                            return(
                                <Cart 
                                    key={items.id}
                                    src={items.thumbnail}
                                    name={items.title}
                                    price={items.price}
                                    quantity={items.quantity}
                                    discount={items.discountPercentage}
                                    total={items.discountedTotal}
                                />
                            )
                        })
                    }
            </div>
        </div>
    )
}
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<Display />)