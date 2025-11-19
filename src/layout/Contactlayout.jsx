import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'
function Contactlayout() {
  return (
    <div>
      <Contact />
      <div className='contactcontainer'>
      <Outlet />
      </div>
    </div>
  )
}

export default Contactlayout
