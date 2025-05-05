import React from "react";
import ReactDOM from "react-dom/client";
import Userdetails from "./userdetails/Userdetails";
import { v4 as uuidv4 } from 'uuid';

let people = [
    {
      name: "Rajesh",
      age: 21,
      gender: "male",
      phoneno: 9443686944,
      salary: "5Lpa",
      company: "TCS"
    },
    {
      name: "Madesh",
      age: 21,
      gender: "male",
      phoneno: 6381851571,
      salary: "9Lpa",
      company: "Infosys"
    },
    {
      name: "Priya",
      age: 23,
      gender: "female",
      phoneno: 9876543210,
      salary: "7Lpa",
      company: "Wipro"
    },
    {
      name: "Kiran",
      age: 24,
      gender: "male",
      phoneno: 9123456789,
      salary: "6Lpa",
      company: "Accenture"
    },
    {
      name: "Divya",
      age: 22,
      gender: "female",
      phoneno: 9090909090,
      salary: "8Lpa",
      company: "Cognizant"
    },
    {
      name: "Anil",
      age: 25,
      gender: "male",
      phoneno: 8888888888,
      salary: "10Lpa",
      company: "TCS"
    },
    {
      name: "Sneha",
      age: 24,
      gender: "female",
      phoneno: 7777777777,
      salary: "6.5Lpa",
      company: "IBM"
    },
    {
      name: "Varun",
      age: 23,
      gender: "male",
      phoneno: 6666666666,
      salary: "7.5Lpa",
      company: "Infosys"
    },
    {
      name: "Deepa",
      age: 22,
      gender: "female",
      phoneno: 5555555555,
      salary: "5.8Lpa",
      company: "Wipro"
    },
    {
      name: "Suresh",
      age: 26,
      gender: "male",
      phoneno: 4444444444,
      salary: "9.2Lpa",
      company: "Capgemini"
    },
    {
      name: "Kavya",
      age: 23,
      gender: "female",
      phoneno: 3333333333,
      salary: "6.2Lpa",
      company: "HCL"
    },
    {
      name: "Ajay",
      age: 24,
      gender: "male",
      phoneno: 2222222222,
      salary: "7.3Lpa",
      company: "TCS"
    },
    {
      name: "Meena",
      age: 22,
      gender: "female",
      phoneno: 1111111111,
      salary: "8.4Lpa",
      company: "Infosys"
    },
    {
      name: "Ramesh",
      age: 27,
      gender: "male",
      phoneno: 9999999999,
      salary: "10.5Lpa",
      company: "Cognizant"
    },
    {
      name: "Harsha",
      age: 23,
      gender: "male",
      phoneno: 8989898989,
      salary: "6Lpa",
      company: "Accenture"
    },
    {
      name: "Nisha",
      age: 25,
      gender: "female",
      phoneno: 7878787878,
      salary: "9.1Lpa",
      company: "Wipro"
    },
    {
      name: "Vikram",
      age: 22,
      gender: "male",
      phoneno: 6767676767,
      salary: "5.5Lpa",
      company: "IBM"
    },
    {
      name: "Lavanya",
      age: 24,
      gender: "female",
      phoneno: 5656565656,
      salary: "7.7Lpa",
      company: "TCS"
    },
    {
      name: "Manoj",
      age: 23,
      gender: "male",
      phoneno: 4545454545,
      salary: "6.9Lpa",
      company: "Infosys",
    },
    {
      name: "Anusha",
      age: 22,
      gender: "female",
      phoneno: 3434343434,
      salary: "8.6Lpa",
      company: "Capgemini"
    }
]  

let car=[
  {
    name:"audi",
    year:2028,
    model:"v48",
  },
  {
    name:"toyoyo",
    year:2056,
    model:"xde7",
  }
]

const display=()=>{
    return(
        <>
        {/* using props */}
        <Userdetails name={"Sunny leon"} age={42} gender={"female"} phoneno={987654321} salary={10000000} company={"xhamster"}/>
        
        {/* using list & using uuid */}
        {
          people.map((item)=>{
            return(
              <Userdetails 
              key={uuidv4()}
              name={item.name} age={item.age} gender={item.gender} phoneno={item.phoneno} salary={item.salary} company={item.company}/>
            )
          })
        }

        {/* using list only */}
        {
          car.map((e)=>{
            return(
              <Userdetails 
                key={e.model}
                name={e.name} age={e.year} gender={e.model}
              />
            )
          })
        }

        </>
    )
}

const a=ReactDOM.createRoot(document.getElementById("root"));
a.render(display())
