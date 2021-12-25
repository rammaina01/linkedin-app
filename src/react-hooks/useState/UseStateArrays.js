import React, {useState} from 'react'


function UseStateArrays() {

    const [items, setItems] = useState([])

    const AddItems=()=>{
        //Here copying the array elements and appending the current object, Not changing in the existing array
        setItems([...items,{
            id : items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <div>
            <button onClick={AddItems}>Add Items </button>
            </div> 

            <div>
                <label>Items</label>
                <ul>
                    {items.map((item)=>{
                      return <li key={item.id}>{item.value}</li>
                    })}
                </ul>
            </div>                     
        </div>
    )
}

export default UseStateArrays
