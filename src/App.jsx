// import React, { useState } from 'react'



// const App=()=>{

//     // const state=useState()
//     // console.log(state);

//     const[count,setCount]=useState(0)

//     const IncNum=()=>{
//        setCount(count+1)
//     }
//     const DecNum=()=>{
//         setCount(count-1)

//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncNum}>+</button>
//         <button onClick={DecNum}>-</button>
//         </>
//     )
// }

// export default App;



// import React, { useState } from 'react'

// const App=()=>{

// let cTime=new Date().toLocaleTimeString()
//     const [oTime,uTime]=useState(cTime)
//     const gTime=()=>{
//         cTime=new Date().toLocaleTimeString()
//         uTime(cTime)
//     }
//     return(
//         <>
//        <h1>{oTime}</h1>
//        <button onClick={gTime}>Get Time</button>
//         </>
//     )
// }

// export default App;


// lecture 32: digital clock

// import React, { useState } from 'react'

// const App=()=>{

//     let cTime=new Date().toLocaleTimeString()

//     const[oTime,uTime]=useState(cTime);
//     setInterval(() => {
//           cTime=new Date().toLocaleTimeString()
//         uTime(cTime)
//     }, 1000);
//     return(
//         <>
//         <h1>{oTime}</h1>
//         </>
//     )
// }

// export default App;

// lecture 33: event handling 

// import React, { useState } from 'react'

// const App = () => {
//     let bgColor="yellow";
//     const[cColor,setColor]=useState(bgColor);


//     let changeText='Click Me';
//     const[curText,upText]=useState(changeText);
//     const bgChange=()=>{
//         let newColor="red";
//         setColor(newColor)
//         let newText='now its change';
//         upText(newText)
//     }
//     return (
//         <>
//             <div style={{backgroundColor:cColor}}>
//                 <button onClick={bgChange}>{curText}</button>
//             </div>
//         </>
//     )
// }
// export default App;


// lecture 37: form in reactJs 

// import React, { useState } from 'react'

// const App = () => {
//     const [name, uName] = useState()
//     const [setName, newName] = useState()
//     const [lastName, ulastName] = useState()
//     const [newlastName, newulastName] = useState()

//     const anyThing = (event) => {
//         uName(event.target.value)

//     }
//     const fAnyThing = (event) => {
//         ulastName(event.target.value)
//     }
//     const onSubmits = (event) => {
//         event.preventDefault();
//         newName(name)
//         newulastName(lastName)
//     }
//     return (
//         <>
//             <form onSubmit={onSubmits}>
//                 <div>
//                     <h1>Hello {setName} {newlastName}</h1>
//                     <input type="text" placeholder="Enter Your First Name" onChange={anyThing} value={name} />
//                     <input type="text" placeholder="Enter Your Last Name" onChange={fAnyThing} value={lastName} />
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>

//         </>
//     )
// }

// export default App;


// lecture 56: useContext hooks 

// import React from 'react'
// import ComA from './ComA'
// const FirstName = React.createContext()
// const LastName = React.createContext()
// const App = () => {
//     return (
//         <>
//             <FirstName.Provider value={"shivam"}>
//                 <LastName.Provider value={"singh"}>
//                 <ComA/>
//                 </LastName.Provider>
//             </FirstName.Provider>
//         </>
//     )
// }
// export default App;
// export { FirstName, LastName }


// lecture 57: useEffect hooks
// import React, { useEffect } from 'react'
// import { useState } from "react";

// const App=()=>{
//     const[num1,setNum1]=useState(0)
//     const[num2,setNum2]=useState(0)

//     const changeNum1=()=>{
//         setNum1(num1+1)
//     }
//     const changeNum2=()=>{
//         setNum2(num2+1)
//     }
//     useEffect(()=>{
//         alert('hello!!!! how are you')
//     },[num2])
//     return (
//         <>
//         <button onClick={changeNum1}>first  {num1}</button>
//         <br/>
//         <button onClick={changeNum2}>second  {num2}</button>
//         </>
//     )
// }

// export default App;


// lecture 59: react router 
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/contact' component={Contact} />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default App;