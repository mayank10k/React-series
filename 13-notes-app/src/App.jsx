import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {
  const [title, settitle] = useState('')

  const [details, setdetails] = useState('')

  const [task, settask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    
    

    const copyTask=[...task];
    copyTask.push({title,details});

    settask(copyTask);
    // console.log(copyTask)


    settitle('') //to re-empty it
    setdetails('')
  }

  const delteNote=(idx)=>{
    console.log("note deleted")
    const copyTask=[...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form 
        onSubmit={(e)=>{
          submitHandler(e);
        }}
        
        action=""  className='flex lg:w-1/2 flex-col items-start  p-10 gap-4'>
          
          <h1 className='text-3xl font-bold'>Add notes</h1>

          {/* input for heading */}
          <input 
          className='border-2 outline-none font-medium w-full px-5 py-2 rounded'
          type="text" 
          placeholder='Enter Notes Heading' 
          value={title}
          onChange={(e)=>{
            // console.log(e.target.value)
            settitle(e.target.value)
          }}
        
          />
          
          {/* input for details */}
          <textarea 
            className='border-2 font-medium outline-none w-full h-30 px-5 py-2 rounded'
            type='text' 
            placeholder='Enter Details'
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
            
          />

          <button className='bg-white cursor-pointer active:scale-95 w-full font-medium text-black rounded px-5 py-2'>Add Note</button>
        
      </form>

      <div className='flex flex-col  p-10 lg:w-1/2  lg:border-l-2 '>
        <h1 className='text-3xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap gap-4 overflow-auto mt-3 items-start has-[50%]:'>
          
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-50 w-40 text-black p-4 rounded-2xl bg-cover bg-white '>
              
              <h3 className='leading-tight font-bold text-xl'>{elem.title}</h3>
              <p className='mt-1.5 leading-tight '>{elem.details}</p>
              <button onClick={()=>{
                delteNote(idx)
              }} className='w-full cursor-pointer active:scale-90 bg-red-600 py-2 text-xs rounded-4xl font-bold'>Delete</button>
            </div>
              
          })}
          
        </div>
      </div>

    </div>
    
  )
}

export default App