// import { useEffect } from "react"



// const UseEffect3 =()=>{
   
//     useEffect(()=>{
//         addEvent()
 
//          // if its returning a function we can clean up
//        return ()=>{
//         removeEvent()
//        }
//     },[])
 

//      // this function for adding mouse move evnt listeners
//     const addEvent=()=>{
//         document.addEventListener("mousemove",mouseCapture)
//     }
//       // this function for removing mouse move evnt listeners
//     const removeEvent =()=>{
//         document.removeEventListener("mousemove",mouseCapture)

//     }
//     // when useEffect returns a function we can clean up the memory leaks of compoents

//     const mouseCapture=(event)=>{

//   console.log(event.clientX,"Xposition capture")
//   console.log(event.clientY,"Yposition capture")

//     }

//     // There is a memory leak will happens in react , 
//     // we should prevent by using component will unmount in class based component 
//     // UseEffect we can use for preventing memory leaks 

//     return(
//         <>
//         <h1>Use effect 3</h1>
//         </>
//     )
// }

// export default UseEffect3