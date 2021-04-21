
// lecture 8:
// import React from 'react'
// import ReactDom from 'react-dom'



// ReactDom.render(
//   <>
//   <h1>hello world</h1>
//   <h1>this is my first react app</h1>
//   </>,
//   document.getElementById('root')
// )

// lecture 9:
// import React from 'react'
// import ReactDom from 'react-dom';


// ReactDom.render(
//   <>
//   <h1>Top 5 Netflix movie</h1>
//   <p>below there are top 5 movie name on netflix</p>
//   <ol>
//     <li>dark</li>
//     <li>captain america</li>
//     <li>vikings</li>
//     <li>harry potter</li>
//     <li>stranger things</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// )

// lecture 11: tempalte literals 
// import React from 'react'
// import ReactDom from 'react-dom'


// const fname='shivam'
// const lname='singh'
// ReactDom.render(
//   <>
//   <h1>{`my name is ${fname} ${lname}`}</h1>
//   </>,
//   document.getElementById('root')
// )


// lecture 12: challenge for showing date and time 

// import React from 'react'
// import ReactDom from 'react-dom'
// const date = new Date()
// const cDay=date.getDate()
// const cMonth=date.getMonth()
// const cYear=date.getFullYear()
// const cHour=date.getHours()
// const cMinute=date.getMinutes()
// const cSecond=date.getSeconds()
// let offset
// if(cHour>12){
//    offset="PM"
// }
// else{
//    offset="AM"
// }
// ReactDom.render(
//   <>
//     <h1>my name is ,Shivam singh</h1>
//     <p>{`the today date is ${cDay}/${cMonth}/${cYear}`}</p>
//     <p>{`the current time is ${cHour}:${cMinute}:${cSecond} ${offset}`}</p>
//   </>,
//   document.getElementById('root')
// )
// lecture:13
// import React from 'react'
// import ReactDom from 'react-dom'
// const name="shivam"
// ReactDom.render(
//   <>
//   <h1 contentEditable="true">my name is {name}</h1>
//   </>,
//   document.getElementById('root')
// )

// lecture 14:

// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'

// const name="shivam singh"
// ReactDom.render(
//   <>
//   <h1 className='heading'>my name is {name}</h1>
//   </>,
//   document.getElementById('root')
// )

// lecture 17: react challenge
// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'

// const date=new Date()
// const cTime=date.getHours()
// let greet='';
// const greetStyle={}
// if(cTime>=0 && cTime<12){
//   greet="Good Morning";
//   greetStyle.color='green'
// }
// else if(cTime>=12 && cTime<=18){
//   greet="Good Evening"
//   greetStyle.color='orange'

// }
// else{
//   greet='Good Night'
//   greetStyle.color='gray'

// }


// ReactDom.render(
//   <>
//   
//   </>,
//   document.getElementById('root')
// )

// lecture 18:react component 

// import React from 'react'
// import ReactDom from 'react-dom'
// import App from './App'

// ReactDom.render(

//   <App />,
//   document.getElementById('root')
// )

// lecture 19: react component challenge 

// import React from 'react'
// import ReactDom from 'react-dom'
// // import App from './App'
// import Code from './Code'
// import './index.css'

// ReactDom.render(
//   <Code/>,
//   document.getElementById('root')
// )

// lecture 20: react challenge
// import React from 'react'
// import ReactDom from 'react-dom'
// import Sum,{Sub,Mul,Div} from './Cal'


// ReactDom.render(
//   <>
//   <ul>
//     <li>the sum of two number is {Sum(10,5)}</li>
//     <li>the sub of two number is {Sub(10,5)}</li>
//     <li>the mul of two number is {Mul(10,5)}</li>
//     <li>the div of two number is {Div(10,3)}</li>
//   </ul>
//   </>,
//   document.getElementById('root')
// )

// lecture:30 
// import React from 'react'
// import reactDom from 'react-dom';
// let [a,b]=[12,30];
// [a,b]=[b,a];
// console.log(a,b);

// reactDom.render(
//   <>
//   <h1>swapping of two number without using third variable</h1>
//   </>,
//   document.getElementById('root')
// )

// lecture 33: react hooks(useState)

// import React from 'react'
// import reactDom from 'react-dom'
// import App from './App'
// import './index.css'

// reactDom.render(
//   <>
//   <App/>
//   </>,
//   document.getElementById('root')
// )

// lecture 34,35,36: react hooks challenge 

// import React from 'react'
// import reactDom from 'react-dom'
// import './index.css'
// import App from './App'

// reactDom.render(
//   <>
//   <App/>
//   </>,
//   document.getElementById('root')
// )

// lecture 37:form in reactJs 

// import React from 'react'
// import reactDom from 'react-dom'
// import App from './App'
// import './index.css'
// reactDom.render(
//   <>
//   <App/>
//   </>,
//   document.getElementById('root')
// )

// lecture 56: useContext hooks 

// import React from 'react'
// import reactDom from 'react-dom'
// import App from './App'

// reactDom.render(
//   <>
//     <App />
//   </>,
//   document.getElementById('root')
// )



// lecture 57: useContext hooks 

// import React from 'react'
// import reactDom from 'react-dom'
// import App from './App'
// import './index.css'

// reactDom.render(
//   <>
//     <App />
//   </>,
//   document.getElementById('root')
// )


// lecture 58: pokemon api 
// import React from 'react'
// import reactDom from 'react-dom'
// import ComA from './ComA'

// reactDom.render(
//   <>
//   <ComA/>
//   </>,
//   document.getElementById('root')
// )


// lecture 59: react router 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
)