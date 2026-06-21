import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}`)

    setUserData(response.data)

    // console.log(userData)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData=<h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ;'>loading.....</h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx} >
        <Card elem={elem}/>

      </div>
    })
  }

  
  
  return (
    <div className='bg-black h-screen text-white overflow-auto p-6'>

      {/* <h1 className='bg-gray-400 text-5xl fixed p-1'>{index}</h1> */}

      {/* <button onClick={getData} className='bg-green-400 active:scale-95 cursor-pointer px-4 rounded py-2 mb-2 '>Get data</button> */}

      <div className='flex flex-wrap gap-6 justify-evenly'>
        {printUserData}
      </div>

      <div className=' flex justify-center gap-3 p-3 items-center'>
        <button 
        style={{opacity:index==1?0.4:1}}
        className='bg-amber-300 text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded '
        onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
        }}
        >Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-amber-300 text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded '
        onClick={()=>{
          
            setindex(index+1)
            setUserData([])
          
        }}
        >Next</button>
      </div>
    </div>
    
  )
}

export default App