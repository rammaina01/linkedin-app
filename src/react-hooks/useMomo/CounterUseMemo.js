import React,{useState, useMemo} from 'react'

function CounterUseMemo() {

const [fistCount, setFistCount] = useState(0)
const [secondCount, setSecondCount] = useState(0)

const IncrementCountFist =()=>{
    setFistCount(fistCount+1)
}

const IncrementCountSecond =()=>{
    setSecondCount(secondCount  +1)
}

//Here IsEven function taking time and because of this when we chnaging state od secondCount then also it is slow because of function called
//To slove this problem use the useMemo function  
const IsEven =()=>{
    let i =0
    while(i< 1000000000) i++
    
   return fistCount %2 === 0
}

    return (
        <div>
            FirstCount-{fistCount} -{IsEven()?'EVEN':'Odd'}
                <div>
                    <button onClick={IncrementCountFist}>FirstCount</button>
                </div>
                
                SecondCount-{secondCount}
                <div>
                    <button onClick={IncrementCountSecond}>SecondCount</button>
                </div>
        </div>
    )
}

export default CounterUseMemo
