// import axios from "axios"
// import { useEffect, useState } from "react"


// const UseEffectEx1=()=>{
    

//     const [ProductList,setProductList]=useState([])

//     useEffect(()=>{
//         FetchData()
// console.log("component mount")
//     },[])
//     // here after accessing the fetchdata means api in useeffect
//     // === now here we are collecting the data with usestate

// const FetchData=()=>{
//     axios.get("https://fakestoreapi.com/products")
//     .then(response=>{
//     if(response.status===200){
// // succesfully data has came
// setProductList(response.data)
// // the below one is to get the data from server to client like a api instead of fetch
//     }
// })

// };



//     return(
//         <>
//         <h1>useEffect example</h1>
//         {
//    ProductList.length>0 ? ProductList.map(product=><ProductList key={product.id}  data={product}/>)
//        :<h1>Loading...</h1>
// }
     
//         </>
//     )
// }
// export default UseEffectEx1

// export const ProductListing =({data})=>{
//     return(
//         <>
//         <div>
//             <h3>{data.title}</h3>
//         </div>
//         </>
//     )
// }
