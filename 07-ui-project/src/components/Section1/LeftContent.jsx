import React from 'react'
import {MoveUpRight} from 'lucide-react'

const Left = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between p-6 '>
        <div>
            <h3 className='font-bold text-4xl mb-4
             '>Prospective <br />customer <br />Segmentation
            </h3>
            <p className='text-xl font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque accusantium rem placeat facere eos consequuntur sed, necessitatibus quaerat sit.
            </p>
        </div>
        <div className='text-8xl'>
            <MoveUpRight size={52} strokeWidth={3} />   
        </div>
    </div>
  )
}

export default Left