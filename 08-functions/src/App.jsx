import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("button is clicked");
  }

  function mouseEnter(){
    console.log("mouse entered");
  }

  return (
    <div>
      {/* if btnclick() will be written like this it will be automatically called without clicking */}
      <button onClick={btnclicked}>click me</button>  

      <button onClick={()=>{
        console.log("hello guys")
      }}>click him</button>

      
    </div>
  )
}

export default App