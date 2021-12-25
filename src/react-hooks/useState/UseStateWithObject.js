import React, {useState} from 'react'

function UseStateWithObject() {

    //Note: Use state don't not Automatically merge and update the object, this the key diffrence to set state from class components
    //To slove the problem we have to copy the object first and override its values, example ...name
    const [name, setName] = useState({firstName:'', lastName:''})

    return (
        <div>
            <label>FirstName</label>
            <input  type="text" 
                    value={name.firstName} 
                    onChange={e=>{setName({...name, firstName:e.target.value})}}/>
            
            <label>LastName</label>
            <input 
                    type="text"
                    value={name.lastName} 
                    onChange={e=>{setName({...name, lastName:e.target.value})}}/>

            <div>your first name ={name.firstName}</div>
            <div>your last name ={name.lastName}</div>

            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default UseStateWithObject
