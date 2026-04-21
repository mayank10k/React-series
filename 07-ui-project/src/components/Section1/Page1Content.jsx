import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-3 px-10 pt-5 pb-10 flex items-center gap-7 h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.user}/>
    </div>
  )
}

export default Page1Content