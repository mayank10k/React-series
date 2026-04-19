import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-3 px-10 flex items-center gap-7 h-[90vh] '>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content