import { use, useState } from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css"

//Integer,String,Boolean - useState()
const Display=()=>{
    const[int,setint]=useState(1);
    const[string,setstring]=useState("sam");
    const[bool,setbool]=useState(true);
    
    return(
        <div className="flex flex-col gap-5">
        <div>
            <h1>{int}</h1>
            <button className="border-[1px] border-[black] px-[10px]"
                onClick={()=>{
                    setint(10)
                }}
            >Change number</button>
        </div>
        <div>
            <h1>{string}</h1>
            <button className="border-[1px] border-[black] px-[10px]"
                onClick={()=>{
                    setstring("ram")
                }}
            >Change name</button>
        </div>
            {/* condtional rendering */}
            <h1>{bool ? "✅" : "❌"}</h1>
            <button className="border-[1px] border-[black] px-[10px] w-fit"
                onClick={()=>{
                    setbool(true)
                }}
            >True</button>
            <button className="border-[1px] border-[black] px-[10px] w-fit"
                onClick={()=>{
                    setbool(false)
                }}
            >False</button>
        </div>
    )
}
//<Input> to get data
const Display1=()=>{
    const[name,setname]=useState();
    const[comment,setcomment]=useState();
    return(
        <>
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <div>
                <label>Name:</label><br></br>
                <input type="text" className="border-[1px] border-[black] w-[200px]"
                    onChange={(e)=>{    //e is for accessing Event in DOM tree
                        console.log(e.target.value)
                        setname(e.target.value)
                    }}
                ></input>
            </div>
            <div>
                <label>Comment:</label><br></br>
                <textarea className="border-[1px] border-[black] w-[200px]"
                    onChange={(e)=>{
                        console.log(e.target.value)
                        setcomment(e.target.value);
                    }}
                ></textarea>
            </div>
            <button className="border-[1px] border-[black] px-[10px]">Submit</button>
        </div>
        </>
    )
}
//Object - useState({})      Reducing or optimizing the field and Usestate()
const Display2=()=>{
    //direct value
    const[dir,setdir]=useState({name:"",comment:""})
    //callback function
    const[value,setvalue]=useState({name:"",comment:""});
    return(
        <>
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <div>
                <label>Name:</label><br></br>
                <input type="text" className="border-[1px] border-[black] w-[200px]"
                onChange={(e)=>{
                    //direct value
                    setdir({name:e.target.value});
                    //callback function
                    setvalue((x)=>{
                        return(
                            {...x,name:e.target.value}
                        )
                    })
                }}
                ></input>
            </div>
            <div>
                <label>Comment:</label><br></br>
                <textarea className="border-[1px] border-[black] w-[200px]"
                onChange={(e)=>{
                    //direct value
                    setdir({comment:e.target.value})
                    //callback function
                    setvalue((y)=>{
                        return(
                            {...y,comment:e.target.value}
                        )
                    })
                }}
                ></textarea>
            </div>
            <h1 id="a"></h1>
            <h1 id="b"></h1>
            <button className="border-[1px] border-[black] px-[10px]"
                onClick={()=>{
                    //display direct value
                    document.getElementById("a").textContent=JSON.stringify(dir);
                    //display callback function
                    document.getElementById("b").textContent=JSON.stringify(value);
                }}
            >Submit</button>
        </div>
        </>
    )
}
//Array inside object - useState([{}])  to store multiple object in array [{},{},{}]
const Display3=()=>{
    //object
    const[obj,setobj]=useState({name:"",comment:""});
    //array
    const[arr,setarr]=useState([])
    const[arr1,setarr1]=useState([])
    return(
        <>
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <div>
                <label>Name:</label><br></br>
                <input type="text" className="border-[1px] border-[black] w-[200px]"
                onChange={(e)=>{
                    //object callback function
                    setobj((x)=>{
                        return(
                            {...x,name:e.target.value}
                        )
                    })
                }}
                ></input>
            </div>
            <div>
                <label>Comment:</label><br></br>
                <textarea className="border-[1px] border-[black] w-[200px]"
                onChange={(e)=>{
                    setobj((x)=>{
                        return(
                            {...x,comment:e.target.value}
                        )
                    })
                }}
                ></textarea>
            </div>
            {JSON.stringify(obj)}<br></br>
            {JSON.stringify(arr)}<br></br>
            {JSON.stringify(arr1)}
            <button className="border-[1px] border-[black] px-[10px]" 
            onClick={()=>{
                //array direct value
                setarr([obj]);
                //array callback function
                setarr1((x)=>{
                    return(
                        [...x,obj]
                    )
                })
            }}
            >Submit</button>
        </div>
        </>
    )
}
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<Display3 />)