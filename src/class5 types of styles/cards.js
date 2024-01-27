import React from "react";

const Card = () => {
  return (
  
    <div  style={{ border: "2px solid black" ,width: "500px",}}>
    
      <h1 style={{ color: "red",fontWeight: "bold" }}>We are creating a card here</h1>
      
      <br />
      <img src="https://t3.ftcdn.net/jpg/06/86/53/54/240_F_686535496_NJZPOItPSuCsKIrCy9DUFEnkDgzlHv5n.jpg"
        alt="Description of the image"
        style={{ maxWidth: "500px"}}
      />

      <p style={{ fontWeight: "bold", width: "500px", textAlign: "center" }}>welcome to react class 5
        <br />
        now using styles in react <br />
        we are creating a card<br />
        with heading, image and some content<br />
        let's see finally how it looks like
      </p>
     
      </div>
   
  );
};

export default Card;
