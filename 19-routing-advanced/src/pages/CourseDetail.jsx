import React from 'react'
import { useParams } from 'react-router-dom'
import { jsx } from 'react/jsx-runtime'

const CourseDetail = () => {
    const params=useParams()
    console.log(params.id);

  return (
    <div>
        <h1>{params.id} Course Detail page</h1>
    </div>
  )
}

export default CourseDetail