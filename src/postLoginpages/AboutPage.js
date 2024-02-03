import { useContext } from "react";
import NavBar from "../navbar/NavBar";
import { DataShare } from "../navigation/navigation";
import UseReduceExample from "../functional based/hookday2.js/useReduce/useReduce";

const AboutPage=()=>{

   const AboutContext =useContext(DataShare)
   console.log(AboutContext)

   const{name,darkTheme}=AboutContext
    return(
        <>
         <NavBar/>
         <UseReduceExample/>
         {/* <div style={{ height:100,width:100,backgroundColor:darkTheme?"black":"red"}}></div> */}
        <h1>Welcome to aboutpage in my webpage</h1>
        <h2>we imported usecontext text here   {name}</h2>
        
       
        </>
    )
}

export default AboutPage;