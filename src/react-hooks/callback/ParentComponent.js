import React, { useState,useCallback } from "react";

import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

// UseCallback Hook is for improve performance when using callback function to update the parent component state from child component EX: Age , Salary

function ParentComponent() {

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

    //useCallback takes 2 parameter one callbackfunction, second dependecy array
  const IncrementAge = useCallback(() => {
        setAge(age + 1);
      },
      [age],
  );
    // UseCallback will allow only salary component render when changed
  const IncrementSalary = useCallback(() => {
        setSalary(salary + 1000);
      },
      [salary],
  );

  console.log("Parent Component");

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button text="Age" handleclick={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button text="Salary" handleclick={IncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
