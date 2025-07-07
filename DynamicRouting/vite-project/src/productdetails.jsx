import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
    const [value, setvalue] = useState([])
    //Step 3.
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        api()
    }, [])

    async function api() {
                                                            //Step 4.
        const req = await fetch(`https://dummyjson.com/products/${id}`)
        const res = await req.json()
        setvalue(res)
        console.log(res)
    }
    return (
        <div>

            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Product Image */}
                    <img
                        src={value.thumbnail}
                        alt={value.thumbnail}
                        className="w-full h-80 object-cover rounded-lg shadow"
                    />

                    {/* Product Info */}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h1>
                        <p className="text-gray-600 mb-4">{value.description}</p>
                        <p className="text-xl text-green-600 font-semibold mb-6">₹ {value.price}</p>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Details