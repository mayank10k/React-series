import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='h-9 w-9 rounded-full bg-white flex justify-center items-center text-xl font-bold'>{props.id +1}</h2>
            <div>
            <p className='text-lg leading-normal text-white mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi eaque id dicta optio impedit.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white px-3 py-2 rounded-3xl '>{props.tag}</button>
                <button className='py-2 px-2 rounded-full bg-blue-600 text-white flex justify-center items-center'><MoveRight /></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent