import { useNavigate } from "react-router-dom";

const InvalidPage=()=>{

   const navigate= useNavigate()
   const handleNavigate=()=>{
    navigate("/")
   }

    return(
        <>
        <h1>404 ERROR FOUND</h1>
        <button onClick={handleNavigate}>click here to navigate</button>
        </>
    )
}

export default InvalidPage;