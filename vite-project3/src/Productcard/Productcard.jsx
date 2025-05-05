// import tailwind css
import "../tailwind.css";
//react
import React from "react";
import ReactDOM from "react-dom/client"
// for image
import x from "../assets/assignment-1a.png";
import y from "../assets/assignment-2.png";
//import Another file
import Sample from "../Sample/Sample";

const Productcard = (props) => {
    return (
        <>
                <meta charSet="UTF-8" />
                <title>Product Cart</title>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f6f6f6;\n      padding: 20px;\n    }\n\n    .cart {\n      max-width: 400px;\n      margin: auto;\n      background: white;\n      border-radius: 10px;\n      box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n      padding: 20px;\n    }\n\n    .cart img {\n      width: 100%;\n      border-radius: 10px;\n    }\n\n    .product-info {\n      margin-top: 15px;\n    }\n\n    .product-info h2 {\n      margin: 0;\n      font-size: 24px;\n    }\n\n    .product-info p {\n      color: #555;\n    }\n\n    .price {\n      font-size: 20px;\n      color: green;\n      margin: 10px 0;\n    }\n\n    .btn {\n      background-color: #007bff;\n      color: white;\n      padding: 10px 15px;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    .btn:hover {\n      background-color: #0056b3;\n    }\n  "
                    }}
                />
                <div className="cart">
                    <img src={props.image} alt="Product Image"/>
                    <div className="product-info">
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                        <div className="price">{props.price}</div>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
        </>
    )
}


const ProductSection = () => {
    return (
        <>
            <Productcard name={"boat"} description={"tws"} price={700} image={y} />     {/* use this way Eg:name={"hello"}*/}
            <Productcard name="boult" description="wired hearphones" price="400" image={x}/>
            <Sample name={"rajesh"} age={21} gender={"male"}/>
            <Sample name={"madesh"} age={22} gender={"male"}/>
        </>
    )
}
const a = ReactDOM.createRoot(document.getElementById("root"));
a.render(ProductSection());
