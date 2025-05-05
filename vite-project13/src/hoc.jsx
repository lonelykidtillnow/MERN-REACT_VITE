//1.normal javascript function
         //parameter
const ab=(Component)=>{
    //2.Input-functiional Component
    const Hoc=()=>{
        return(
            <>
                <h1>FUcking World</h1>
                <Component />
            </>
        )
    }
    //3.Output-Enhanced Functional Component
    return Hoc
}
export default ab;