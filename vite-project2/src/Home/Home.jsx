import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Herosection from "../Herosection/Herosection";
import Productsection, { Productcard } from "../Productsection/Productsection";

const Home=()=>{
    return(
        <>
        <Header />
        <Herosection />
        <Productsection />
        <Footer />
        </>
    )
}
const a=ReactDOM.createRoot(document.getElementById("root"));
a.render(Home())