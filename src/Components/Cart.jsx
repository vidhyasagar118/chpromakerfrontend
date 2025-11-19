import React from 'react'
import Cartlistdiv from './Cartlistdiv'
import "./Cart.css"

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className='Cartmaindiv'>
      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        cart.map((item, index) => (
          <Cartlistdiv    key={index}  name={item.name} src={item.src} price={item.price} oldprice={item.oldprice} />
          
        ))
      )}
    </div>
  )
}

export default Cart
