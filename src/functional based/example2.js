import React, { useState } from "react";

const SecondExample = () => {
  const [current, setCurrent] = useState([
    {
      name: "akhila",
      salary: 40000,
      id:1
    },
    {
      name: "rohith",
      salary: 30000,
      id:2
    }
  ]);
  const incrementSalary=(data)=>{
console.log(data)
  }
  const decrementSalary=(data)=>{
    console.log(data)
  }

  return (
    <>
    {current.map((val) => (
      <React.Fragment key={val.id}>
        <h2>{val.name}</h2>
        <button onClick={() => incrementSalary(val)}>Increment Salary</button>
        <button onClick={() => decrementSalary(val)}>Decrement Salary</button>
        <h2>{val.salary}</h2>
      </React.Fragment>
    ))}
  </>
);
};


export default SecondExample;
