import React, { useContext } from 'react'

import { FirstName, LastName } from './App'


const ComB = () => {
    const fname1 = useContext(FirstName)
    const lname1 = useContext(LastName)
    return (
        <>
             <h1>my name is {fname1} {lname1}</h1>
        </>
    )
}

export default ComB;