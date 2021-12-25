import React,{useState,useEffect} from 'react'


//UseEffect hooks runs on every render and rerender
//The useEffect() hook takes a second parameter, an array, containing the list of things that will cause the useEffect hook to run. 
//pass the state value to the array if you want to run useEffect hooks evry state change
//Pass empty array if you want run useEffect hooks only once(Same as compoment did mount)
function UseEffect() {
    
    const initalValue = 0;
    const [count, setCount] = useState(initalValue)
    const [name , setName] = useState('')

    //useEffect hooks takes function as an prarameter which gets executed after every render
    useEffect(() => {
        console.log('Upding the title....')
		document.title=`clicked ${count} times`
	},[count]);

    return (
        <div>
            <div>
                <input type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
            </div>
            <button onClick={()=>{setCount(count+1)}}>clicked {count}</button>
        </div>
    )
}

export default UseEffect
