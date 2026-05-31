// import React, { useState } from 'react'
// import { jsx } from 'react/jsx-runtime';

// const App = () => {
//       //[readOnly ,writeOnly]
//   const [a, setA] = useState(0)   //usestate snippet

//   function chagneNum(){
//     setA(30)
//   }
//   return (
//     <div>
//       <button onClick={chagneNum} >Click</button>
//       <h1>value of num is {a}</h1>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)
  const increase=()=>{
    setnum(num++)
  }

  const decrease=()=>{
    setnum(num-1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
