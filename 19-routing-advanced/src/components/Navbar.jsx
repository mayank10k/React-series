import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-2 px-5 bg-gray-600 justify-between'>
      <h2 className='text-xl font-bold'>Mayank's</h2>
      <div className='flex gap-10'>
        <Link  to={'/'} className='text-lg font-bold' >Home </Link>
        <Link  to={'/about'} className='text-lg font-bold' >About </Link>
        <Link to='/courses' className='text-lg font-bold'>Courses</Link>
        <Link  to={'/product'} className='text-lg font-bold' >Product </Link>
       
      </div>
    </div>
  )
}

export default Navbar