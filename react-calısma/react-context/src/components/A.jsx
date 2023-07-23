import React, { useContext } from 'react'
import B from './B'
import UserContexts from '../contexts/UserContexts'

const A = () => {
    const { setName , setSurname} = useContext(UserContexts)
    return (
        <div>
            <h1>A</h1>
       <button type='button' onClick={()=>{
        setName("Veli")
        setSurname("Deli")
       }}>change name</button>
            <B />
        </div>
    )
}

export default A