import React, { useState, useEffect } from "react";

function Timmer() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const interVal = setInterval(tick,1000)
    return ()=>{
        clearInterval(interVal)
    }
  }, []);


  const tick = ()=>{
    setCount(p =>{return p+1})
    // setCount(prevcount => prevcount+1)
  }


  return <div>{count}</div>;
}


export default Timmer;
