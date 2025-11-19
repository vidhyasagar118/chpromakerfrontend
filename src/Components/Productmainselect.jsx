import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Productmainselect.css"
import Buynowsection from './Buynowsection'

const Productmainselect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, src, price, oldprice } = location.state || {};

  const [orderVisible, setOrderVisible] = useState(false);

  const sendCartData = () => {
    const cartItem = { name, src, price, oldprice };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const showOrderSection = () => {
    setOrderVisible(true);
  };

  const closeOrderBox = () => {
    setOrderVisible(false);
  };

  return (
    <div className='Productmainselectdiv'>

      <div className="productimgand">
        <img src={src} alt={name} style={{ width: "300px" }} />
        <div>
          <button onClick={sendCartData}>ADD TO CART</button>
          <button onClick={showOrderSection}>BUY NOW</button>
        </div>
      </div>

      {orderVisible && (
        <div className="buynowsection">
          <Buynowsection closeOrderBox={closeOrderBox} />
        </div>
      )}

      <div>
        <h1>{name}</h1>
        <p>Reviews and Ratings</p>

        <span>
          <b>₹{price}</b>
          {oldprice && (
            <p style={{ textDecoration: "line-through", color: "grey" }}>
              ₹{oldprice}
            </p>
          )}
        </span>

        <div>
          <h3>Available offers</h3>
          <ul>
            <li>Bank Offer: 5% cashback on Flipkart Axis Bank Card</li>
            <li>Special Price: Get extra 15% off</li>
          </ul>

          <h5>Delivery</h5>
          <input type="text" placeholder="Enter Pincode" />

          <h2>Highlights</h2>
          <ul>
            <li>Power Output: 5W</li>
            <li>Wireless Range: 10m</li>
            <li>Bluetooth v5.0</li>
          </ul>

          <h3>Seller Info</h3>
          <ul>
            <li>7 Days Replacement</li>
            <li>GST Invoice Available</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Productmainselect;
