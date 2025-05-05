//custom hooks
import { useState, useEffect } from 'react'

const useFetchProducts = () => {
    const [value, setvalue] = useState([])

    useEffect(() => {
        api()
    }, [])
    async function api() {
        try {
            const req = await fetch("https://dummyjson.com/products");
            const res = await req.json();
            setvalue(res.products)
        }
        catch (error) {
            console.log(error)
        }
    }
    return value
}

export default useFetchProducts
