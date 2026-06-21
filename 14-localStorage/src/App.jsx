import React from 'react'

const App = () => {
  // localStorage.clear();
  const user={
    name:"mayank mehta",
    age:19,
    city:"Almora"
  }
  localStorage.setItem('user',JSON.stringify(user));
  const data=JSON.parse(localStorage.getItem('user'))
  console.log(data)
  return (
    <div>App</div>
  )
}

export default App