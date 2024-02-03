import { useContext, useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import UseEffectEx1, { ProductListing } from "../functional based/hookday2.js/useEffect/UseEffectEx1"
import UseEffectEx2 from "../functional based/hookday2.js/useEffect/UseEffectEx2"
import UseEffectEx3 from "../functional based/hookday2.js/useEffect/UseEffectEx3"
import NavBar from "../navbar/NavBar"
import { DataShare } from "../navigation/navigation"

const HomeScreen = ()=>{
    const[productsListing,setProductListing]=useState([])
    const [totalPrice,setTotalPrice]=useState(null)
const{darkTheme,changeTheme} =useContext(DataShare)

   useEffect(()=>{
    fetchData()
    console.log("Component mount")
   },[]);
   // This function is for fetching the data from server to client 
   const fetchData =()=>{
    //axios
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
        if(response.status===200){
            //Successfully data came

          const newResponse=  response.data.map(eachObj=>{
            return{...eachObj,count:1,total:eachObj.price}
            })
            setProductListing(newResponse)
            const result=sumOfPrice(response.data)
            setTotalPrice(result)

        }
    })

   }

    // This function is for calculation of sum of property values
   const sumOfPrice=(arryOfObjects)=>{
    const result=arryOfObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
    return result
  }

     const handleIncrement=(data)=>{
          console.log(data)
          console.log(productsListing)
        const updatedProducts = productsListing.map((product) =>
        product.id === data.id
          ? { ...product, count: product.count + 1, total: product.total + product.price }
          : product
      );
      setProductListing(updatedProducts);
     }

     const handleDecrement=(data)=>{
        console.log(data)
        console.log(productsListing)
        const updatedProducts = productsListing.map((product) =>
      product.id === data.id && product.count > 0
        ? { ...product, count: product.count - 1, total: product.total - product.price }
        : product
    );
    setProductListing(updatedProducts);
  };

   const controlTheme=()=>{
changeTheme()
   }
    return(
        <>
        <NavBar/>
        <div style={{ height:100,width:100,backgroundColor:darkTheme?"black":"red"}}></div>
<button onClick={controlTheme}>changetheme</button>
        
        <h2>I am from home screen</h2>
        <h1>Total value of products : {totalPrice} </h1>


        {
            productsListing.length>0 ? productsListing.map(product=><ProductListingComponent key={product.id} data={product} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>)
            :<h1>loading...</h1>
        }

   
        </>
    )
}

export default HomeScreen




export const ProductListingComponent =({data,handleIncrement,handleDecrement})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.title} width={100} height={100} />
            <Link to={`/productlistview/${data.id}`} >
            <button>Click to view ProductDetails</button>
            <h3>{data.count}</h3>
            <button onClick={()=>handleIncrement(data)}>+</button>
            <button onClick={()=>handleDecrement(data)}>-</button>
            </Link>
            
            <h3>{data.price}</h3>
        </div>
        </>
    )
}

