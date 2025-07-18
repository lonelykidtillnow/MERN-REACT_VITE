import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css"

const Display=()=>{
    //Set Default as False
    const [open,setopen]=useState(false)

    return (
        <div className="2xl:container mx-auto py-[20px] bg-black">
            <div className="w-[80%] mx-auto grid sm:grid-cols-1">
                <div className="bg-red-500 flex flex-row justify-between">
                    <h1 className="text-white text-[32px] pl-[10px]">Zcarts</h1>
                    <div className="flex flex-row items-center gap-3 pr-[10px]">
                        {/* Large Screen Menu */}
                        <div className="hidden md:flex flex-row gap-3 px-[10px]">
                            <h1>Home</h1>
                            <h1>Product</h1>
                            <h1>Login</h1>
                            <h1>Register</h1>
                        </div>
                        {/* Small Screen Icons */}
                        <div className="flex flex-row gap-2 px-[10px] md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-icon lucide-text"
                                    //For Small Screen Menu Now True
                                    onClick={()=>{
                                        setopen(true)
                                    }}
                                    //For Icons Now False
                                    className={`${open ? 'hidden' : 'block'}`}>
                                {/* Three Lines */}
                                <path d="M15 18H3"/>
                                <path d="M17 6H3"/>
                                <path d="M21 12H3"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"
                                    //For Small Screen Menu Now False
                                    onClick={()=>{
                                        setopen(false)
                                    }}
                                    //For Icons Now False
                                    className={`${open ? 'block' : 'hidden'}`}>
                                {/* Two cross Lines */}
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Small Screen Menu */}
                <div className={`${open ? 'block' : 'hidden'} flex flex-col gap-3 px-[5px] py-[10px] text-white bg-yellow-500 md:hidden`}>
                    <h1>Home</h1>
                    <h1>Product</h1>
                    <h1>Login</h1>
                    <h1>Register</h1>
                </div>
            </div>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Display />)