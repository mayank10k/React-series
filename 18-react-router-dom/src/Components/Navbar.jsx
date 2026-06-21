import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h2>Mayank Website</h2>
        <div >

            {/* using anchor tag the page will reload when we click on it */}
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}

            {/* using link the page will not reload and will page it a single page application */}

          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
  )
}

export default Navbar