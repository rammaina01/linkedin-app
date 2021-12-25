import React from "react";

//4. import UserContext
import {UserContext, ThemeContext} from "./Contex";

function ComponentC(props) {
  return (
    <div>
      {/* Using Props drilling
            {props.name} */}

      {/* // 5. Comsume the userContext */}
      <UserContext.Consumer>
            {
                user=>{
                    
                    return(
                        <ThemeContext.Consumer>
                        {
                            theme=>{
                                return <div style={{backgroundColor:theme}}> Name from UserContext: {user}</div>
                            }
                        }
                        </ThemeContext.Consumer>
                    )
                }
            }
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
