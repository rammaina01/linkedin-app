import React from 'react'
import ComponentC from './ComponentC'
import {useContext} from 'react'
import {UserContext, ThemeContext} from './Contex'

function ComponentB(props) {

    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)


    return (
        <div>
            {/* <Component_C name={props.name}/> */}
            <ComponentC/>

            <div>
                name : {user} - Theme :{theme.color}
            </div>

        </div>
    )
}

export default ComponentB
