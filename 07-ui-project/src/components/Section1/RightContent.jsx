import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div className='h-full flex overflow-x-auto flex-nowrap p-4 w-2/3 flex-row justify-evenly object-cover'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
        
        
    </div>
  )
}

export default Right