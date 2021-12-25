import React, {useReducer} from "react";

const intialState = 0

const reduce = (state, action) => {
  switch (action) {
    case "increse":
      return state + 1;
    case "decrese":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(reduce, intialState);

  return (
    <div>
      <div>Count - {count}</div>

      <div>
        <button onClick={() => {dispatch("increse")}}> Increment </button>
        <button onClick={() => {dispatch("decrese")}}> Decrement </button>
        <button onClick={() => {dispatch("reset")}}> Reset </button>
      </div>
    </div>
  );
}

export default Reducer;
