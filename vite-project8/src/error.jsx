import { Link } from "react-router-dom";
const Error=()=>{
    return(
        <>
        <h1 style={{textAlign:"center"}}>Bunda Correct URL kudu</h1>
        <Link to="/herosection"><button>Go to Home Pages</button></Link>
        </>
    )
}
export default Error;