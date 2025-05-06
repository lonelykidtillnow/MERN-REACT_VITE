import { Link } from "react-router-dom"
import "./tailwind.css"
//lazy lody import
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cart = (props) => {
    return (
        <div className="p-4 shadow-md rounded-2xl bg-white flex flex-col justify-between h-full">

            {/* <img src={props.src} alt="Product Image" className="w-[250px] h-[250px] object-cover rounded-lg mb-4" /> */}

            <LazyLoadImage
                className="w-[250px] h-[250px] object-cover rounded-lg mb-4"
                alt="Product Image"
                effect="blur"
                wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: "1s" },
                }}
                src={props.src} />

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>

            <p className="text-gray-600 mb-1"><strong>Price:</strong> ₹{props.price}</p>
            <p className="text-gray-600 mb-1"><strong>Available:</strong> {props.quantity} units</p>
            <p className="text-gray-600 mb-1"><strong>Discount:</strong> {props.discount}%</p>

            <p className="text-green-600 font-semibold mt-2">
                <strong>Price after Discount:</strong> ₹{props.total}
            </p>
                                        {/* 1.step */}
            <Link to={`/productdetails/${props.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-[white] h-[40px] w-[150px] mt-3">
                    Add to Cart
                </button></Link>
        </div>
    )

}
export default Cart