 import  React, {useState} from 'react'  //useState is named import

//Step 1. First have the component
//Step 2. Intialize state with the Zero
//Step 3. Need method capable of setting state value


//Hooks are special function that allows you to hook a features in to the react

function Counter() {

    //Default value use when component mount but never used in rerenders
    //[const , setCount] here is array desturcturing in ES6
    const [count, setCount] = useState(0) 

    return (
        <div>
            <button onClick={()=>{ setCount(count+1)}}>count {count}</button>
        </div>
    )
}

export default Counter
