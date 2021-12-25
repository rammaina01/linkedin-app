import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerUseContex() {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
        Count - {count}
      <CountContext.Provider
        value={{countState:count, countDispatch :dispatch}}
      >
        <div>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default UseReducerUseContex;
