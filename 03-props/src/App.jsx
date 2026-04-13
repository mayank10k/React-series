import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Mayank Mehta' age={18} img='https://images.unsplash.com/photo-1774306612379-7dab800ab124?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'/>

      <Card user='Sadhna Singh' age={38} img='https://images.unsplash.com/photo-1773772255047-74744067601e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'/>

      <Card user='Aman Singh' age={28} img='https://images.unsplash.com/photo-1773332598501-f8612761781a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App