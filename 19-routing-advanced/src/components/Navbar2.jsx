import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate=useNavigate();
  return (
    <div className='py-1 px-4 bg-cyan-700'>

        <button 
        onClick={()=>{
            navigate('/')
        }} className='bg-emerald-400 m-3 px-5 py-1 active:scale-95 rounded cursor-pointer'>
        Return to Home Page
        </button>

        <button 
        onClick={()=>{
            navigate(-1)
        }} className='bg-emerald-400 m-3 px-5 py-1 active:scale-95 rounded cursor-pointer'>
        Back
        </button>

        <button 
        onClick={()=>{
            navigate(+1)
        }} className='bg-emerald-400 m-3 px-5 py-1 active:scale-95 rounded cursor-pointer'>
        Next
        </button>
       
    </div>
  )
}

export default Navbar2