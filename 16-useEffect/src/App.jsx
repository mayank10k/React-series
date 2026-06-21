// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0)
//   const [num2, setnum2] = useState(100)

//   useEffect(function(){
//   console.log("useEffect is running.....")

//   },[num])  //[]  = this is dependencies

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>
//       <button 
//       onMouseEnter={()=>{
//         setnum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setnum2(num2+10)
//       }}
//       >click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function aChange(){
    console.log("a is changing")
  }

  function bChange(){
    console.log("b is changing")
  }

  useEffect(function(){
    bChange()
    console.log("use effect is running")
  },[b])

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setb(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App