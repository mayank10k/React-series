import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:"https://images.unsplash.com/photo-1656918358725-faeeadfdfee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Underbanked"
    },
    
  ]
  return (
    <div >
      <Section1 user={users}/>
      <Section2/>
    </div>
  )
}

export default App