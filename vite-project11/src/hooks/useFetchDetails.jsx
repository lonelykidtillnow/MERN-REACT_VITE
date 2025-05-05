import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const useFetchDetails = () => {
    const [value, setvalue] = useState([])
    const { id } = useParams()

    useEffect(() => {
        api()
    }, [id])
    async function api() {
        try {
            const req = await fetch(`https://dummyjson.com/products/${id}`);
            const res = await req.json();
            setvalue(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    return {value,id}
}

export default useFetchDetails
