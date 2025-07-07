import { useEffect, useState } from "react";
import "./tailwind.css"
import { Link } from "react-router-dom";

const Api = () => {
    const [value, setvalue] = useState([])

    useEffect(() => {
        api()
    }, [])

    async function api() {
        const req = await fetch("https://dummyjson.com/products")
        const res = await req.json()
        setvalue(res.products)
        console.log(res.products)
    }
    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
            {
                value.map((items) => {
                    return (
                        <div key={items.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                            <img
                                src={items.thumbnail}
                                alt={items.title}
                                className="h-40 w-full object-contain rounded mb-2"
                            />
                            <h2 className="text-lg font-semibold">{items.title}</h2>
                            <p className="text-sm text-gray-600">{items.description}</p>
                            <p className="text-blue-500 font-medium">Brand: {items.brand}</p>
                            <p className="text-green-600 font-bold">₹{items.price}</p>
                                     {/*Step 2. */}
                            <Link to={`${items.id}`}>
                                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    BUY NOW
                                </button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );

}
export default Api;