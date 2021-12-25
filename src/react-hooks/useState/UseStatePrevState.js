import React, {useState} from 'react'

function HooksPrevState() {
    const initialCount =0
    const [count, setCount] = useState(initialCount)

    //Note : Pass prePrevious state as an argument always it is safe to use same as class component 
    const incrementCountFive =()=>{
        for (let i=0 ; i < 5 ; i++){
            setCount(prevcount => prevcount+1)
        }
    }

    return (
        <div>
            <div>
                Count Value : {count}
            </div>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick ={()=>setCount(prevCount=>prevCount+1)}>Increment </button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>setCount(incrementCountFive)}>Increment 5</button>
        </div>
    )
}

export default HooksPrevState
