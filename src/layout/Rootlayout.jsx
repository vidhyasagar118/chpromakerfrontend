import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Slider from '../Components/Slider'
const Rootlayout = () => {
  return (
    <div>
      <Navbar />

      <div className='container'>
         <Outlet  />
      </div>
    </div>
  )
}

export default Rootlayout
