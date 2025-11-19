import React from 'react'
import { useNavigate } from 'react-router-dom'
function Notfound() {
    const navigate =useNavigate()
  return (
    <div>
      <h1> 404| page not found</h1>
      <div>
        <button onClick={()=>navigate('/')} >go to home page </button>
      </div>
    </div>
  )
}

export default Notfound
