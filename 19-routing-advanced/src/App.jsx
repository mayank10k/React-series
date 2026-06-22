import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Product from './pages/Prouduct'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/courses' element={<Courses/>}/>

        {/* Dynamic route */}
        {/* if we write anything after '/courses' it will take u to coursse detail page */}
        <Route path='/courses/:id' element={<CourseDetail/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        
        {/* nested routes */}
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>

        <Route path='*' element={<NotFound/>}/>
        
      </Routes>

      <Footer/>
      
    </div>
  )
}

export default App