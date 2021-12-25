import React from "react";

import ComponentA from "./ComponentA";
//Three Steps to use Context
// 1. Create context
// 2. Rap child component within the Providers
// 3. Export context
// 4. import Context in the child component
// 5. consume Value

//1. Create UserContext
export const UserContext = React.createContext(); //3.export
export const ThemeContext = React.createContext(); //3.export

function Contex(props) {
  return (
    <div>
      {/* 2. // RAP a ComponetA within the UserContext.prvider and pass the value 'Ram' */}
      <UserContext.Provider value={"RAM"}>
        <ThemeContext.Provider value={{color:"red"}}>
          <ComponentA />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Contex;
