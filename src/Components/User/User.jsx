import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className=' h-6  text-center bg-blue-400'>User:{userid}</div>
  )
}

export default User