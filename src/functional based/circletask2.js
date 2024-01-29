import { useState } from "react";

function RotateCircle() {
  const [rotateCircle, SetrotateCircle] = useState(0);

  const handleCircle = () => {
    const inputNumber = prompt("Enter the number of circles:");
    const parsedNumber = parseInt(inputNumber);
    if (!isNaN(parsedNumber) && parsedNumber > 0) {
      SetrotateCircle(parsedNumber);
    } else {
      alert("Please enter a valid positive number.");
    }
  };

  return (
    <>
      <button onClick={handleCircle}>Click here</button>
     
      <div style={{ display: "flex", marginTop: "20px" }}>
        {[...Array(rotateCircle)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "blue",
              margin: "5px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default RotateCircle;
