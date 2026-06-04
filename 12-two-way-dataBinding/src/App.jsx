import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault(); 
    console.log("form submitted by ",title)
    settitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{ // pass a parameter also (e is denoting the event)
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App