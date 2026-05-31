import React from 'react'

const App = () => {

  const submitHandler=(e)=>{
    //it prevent the default behaviour of the tag(i.e.  form)
    e.preventDefault(); //it prevent the form from geting reload after clicking submit
    console.log("form submitted")
  }

  return (
    <div>
      <form onSubmit={(e)=>{ // pass a parameter also 
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App