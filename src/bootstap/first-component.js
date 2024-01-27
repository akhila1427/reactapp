// import CardDisplay from "./card"

// const BootstrapLayout =()=>{
//     return(
//         <>
// <div className="container-fluid p-5 bg-primary text-white text-center">
//   <h1>Welcome to  react in bootstrap</h1>
//   <p>Resize this responsive page to see the effect!</p> 
// </div>
  
// <div className="container mt-5">
//   <div className="row">
//     <div className="col-sm-4">
//      <CardDisplay name="rohith" color="red" designation="Student"/>
//     </div>
//     <div className="col-sm-4">
//     <CardDisplay name="akhila" designation="Front End Developer"/>
//     </div>
//     <div className="col-sm-4">
//     <CardDisplay  name="laxmi" color="green" designation="Conductor"/>
//     </div>
//   </div>
// </div>

  

// </>
//     )
// }
// export default BootstrapLayout


// =========================================you can write this with like this================================================================
import CardDisplay from "./card"

const BootstrapLayout =()=>{
  const array=[
    {
      name:"rohith",
       color:"red",
        designation:"Student",
        salary:"80K"
    },
    {
      name:"akhila",
       designation:"Front End Developer",
       salary:"50K"
    },
    {
      name:"laxmi",
       color:"green",
        designation:"Conductor",
        salary:"60K"
    }
  ]
    return(
        <>
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Welcome to  react in bootstrap</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
     <CardDisplay name="rohith" profile={array[0]}/>
    </div>
    <div className="col-sm-4">
    <CardDisplay name="akhila" profile={array[1]}/>
    </div>
    <div className="col-sm-4">
    <CardDisplay  name="laxmi" profile={array[2]}/>
    </div>
  </div>
</div>

  

</>
    )
}
export default BootstrapLayout