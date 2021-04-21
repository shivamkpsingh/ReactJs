// import React from 'react'
// import ComB from './ComB'



// const ComA=()=>{
//     return(
//         <>
//         <ComB/>
//         </>
//     )
// }

// export default ComA;



// lecture 59: pokemon API 


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const ComA = () => {
//     const [num, setNum] = useState()
//     const [name, setName] = useState()
//     const [move, setMove] = useState()


//     useEffect(() => {
//         //  alert('how are you')
//         async function getDate() {
//             const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//             // console.log(res)
//             setName(res.data.name)
//             setMove(res.data.moves.length)
//         }
//         getDate()
//     })
//     const selectValue = (event) => {
//         setNum(event.target.value)
//     }



//     return (
//         <>
//             <h1>you select the <span style={{ color: 'red' }}>{num}</span> value</h1>
//             <h1>my name is <span style={{ color: 'red' }}>{name}</span>.</h1>
//             <h1>i have  <span style={{ color: 'red' }}>{move}</span> moves</h1>
//             <select value={num} onChange={selectValue}>
//                 <option value='1'>1</option>
//                 <option value='25'>25</option>
//                 <option value='3'>3</option>
//                 <option value='4'>4</option>
//                 <option value='5'>5</option>
//             </select>
//         </>
//     )
// }

// export default ComA;