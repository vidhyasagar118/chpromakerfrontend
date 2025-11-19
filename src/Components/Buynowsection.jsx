import React from 'react'
import "./Buynowsection.css"

const Buynowsection = ({ closeOrderBox }) => {
  return (
    <div className="buynowbox">
      
      <button className="closebtn" onClick={closeOrderBox}>X</button>

      <h1>Order Section</h1>

      <input type="text" placeholder='name' />

      <div>
        <input type="text" placeholder='street/colony name' />
        <input type="text" placeholder='village / city name' />
        <input type="text" placeholder='state' />
        <input type="text" placeholder='country' />
        <input type="text" placeholder='pincode number' />
      </div>

      <button className="paybtn">Pay</button>
    </div>
  )
}

export default Buynowsection;
