import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center py-5 gap-5'>
        
        <Link to='/product/men' className='text-xl font-semibold'>Men</Link>
        <Link to='/product/women' className='text-xl font-semibold'>Women</Link>
      </div>
        {/* <h1>Product Page</h1> */}
        <Outlet/>
    </div>
  )
}

export default Product