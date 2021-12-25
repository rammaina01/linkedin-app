import React,{useEffect, useRef} from 'react'

function UseRefHook() {

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current = inputRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default UseRefHook
