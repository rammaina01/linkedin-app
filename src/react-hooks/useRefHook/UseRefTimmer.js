import React, { useRef, useState, useEffect } from "react";

function UseRefTimmer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };

  }, []);

  return (
    <div>
      Timmer - {count}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timmer
      </button>
    </div>
  );
}

export default UseRefTimmer;
