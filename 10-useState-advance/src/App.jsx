import React, { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState({user:'mayankk',age:20})

  // const btnClicked=()=>{
  //   const newNum={...num};   //destructed ,both have the same reference
  //   // newNum.user="aman"
  //   // setnum(newNum)
  //   // console.log(newNum)

  //   setnum(prev=>({...prev,age:50}))  //you can do this instead of the above
  // }

  // const [num, setnum] = useState([10,20,30])

  // const btnClicked=()=>{
  //   const newNum=[...num]
  //   newNum.push(99)
  //   setnum(newNum)
  // }

  const [num, setnum] = useState(10)

  const btnClicked=()=>{
    //this will update the value of num by 1 only-->udpate all into one render
    // all the 3 calls will use the same old value

    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1)

    //use this instead

    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
    
  }

  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App