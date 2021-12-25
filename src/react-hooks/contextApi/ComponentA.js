import React from 'react'
import ComponentB from './ComponentB'
function ComponentA(props) {
    return (
        <div>
            {/* prop drilling */}
            {/* <Component_B name={props.name}/> */}

            <ComponentB />

        </div>
    )
}

export default ComponentA
