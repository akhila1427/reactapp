// import { Component } from "react";


function ApiCall(){

    const fetchData =()=>{

        try{
            fetch(" fetch(https://fakestoreapi.com/products)")
            .then(response=>response.json)
            .then(response=>console.log(response))
            .catch(reject=>console.log(reject))
}

        catch(reject){
            console.log(reject)
            alert("something went wrong")
        }
    }  
        
    return (
            <div>
                <button onClick={fetchData}>Fetch Data</button>
            </div>
        );
    }


export default ApiCall;