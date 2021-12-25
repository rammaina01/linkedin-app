import React,{useContext} from 'react'
import { CountContext } from './UseReducerUseContex'

function ComponentD() {

    const countContex = useContext(CountContext)

    return (
        <div>
            Count - {countContex.countState}
        </div>
    )
}

export default ComponentD
