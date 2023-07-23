import React, { useContext } from 'react'
import C from './C.jsx'
import UserContexts from '../contexts/UserContexts.js'

const B = () => {

    const {name, surname} = useContext(UserContexts)
  return (
    <div>
        <h1>B</h1>
        <h4>My name is {name} {surname}</h4>
        <C/>
    </div>
  )
}

export default B