import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Contact.css"
const Contact = () => {
  const navigate=useNavigate()
  return (
    <div className='Contact'>
      <h1>contact page</h1>
      <div className='contactbtns'>
        <button onClick={()=>navigate('info')}>contact info</button>
        <button onClick={()=>navigate('form')}>contact form</button>
      </div>
    </div>
  )
}

export default Contact
