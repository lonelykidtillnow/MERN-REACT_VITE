import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
//step 1.
import {useForm} from "react-hook-form"
//step 6.
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'

const Display = () => {
    //step 7.
    const schema = z.object({
        name: z.string().min(1, { message: "Name is Required" }).regex(/^[A-Za-z ]{1,}$/,{message:"Name Should only in Letter"}),
        email: z.string().min(1, { message: "Email is Required" }).email({message:"Invalid email address"}),
        password: z.string().min(1,{message:"Password is Required"}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{message:"Password should like Abc@1234:"}),
        phoneno: z.string().min(1,{ message: "Phone number is Required" }).regex(/^[0-9]{10}$/,{message:"Phone number must be at least 10 digits"}),
        message: z.string().optional(),
      });

    //step 2.                     step 8.                           step 8.
    const {register,handleSubmit,formState: { errors },}=useForm({resolver:zodResolver(schema)});

    //step 4.
    const accesing=(data)=>{
        console.log(data)
    }
    return (
        <>                  {/* step 5. */}
            <form onSubmit={handleSubmit(accesing)}>
                <div className="flex flex-col gap-4 h-[100vh] justify-center items-center">
                    <div className="flex flex-col">
                        <p>Name:</p>                                         {/* step 3.*/}
                        <input className="border-[black] border-[1px]" {...register("name")}></input>
                        {errors.name?.message && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <p>Email:</p>                                       {/* step 3. */}
                        <input className="border-[black] border-[1px]" {...register("email")}></input>
                        {/* step 9. */}
                        {errors.email?.message && <p>{errors.email?.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <p>Password:</p>
                        <input className="border-[black] border-[1px]" {...register("password")}></input>
                        {/* step 9. */}
                        {errors.password?.message && <p>{errors.password?.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <p>Phone no:</p>
                        <input className="border-[black] border-[1px]" {...register("phoneno")}></input>
                        {/* step 9. */}
                        {errors.phoneno?.message && <p>{errors.phoneno?.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <p>Message:</p>
                        <textarea className="border-[black] border-[1px]" {...register("message")}></textarea>
                        {/* step 9. */}
                        {errors.message?.message && <p>{errors.message?.message}</p>}
                    </div>
                    <button className="bg-black text-white w-[200px] rounded-lg">Submit</button>
                </div>
            </form>
        </>
    )
}
const x = ReactDOM.createRoot(document.getElementById("root"));
x.render(<Display />)