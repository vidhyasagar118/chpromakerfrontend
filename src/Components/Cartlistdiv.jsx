import React, { useState } from 'react';
import Buynowsection from './Buynowsection';

const Cartlistdiv = ({ name, src, price, oldprice }) => {
  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7);

  const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const [orderbox, setOrderbox] = useState("none");

  const showOrderBox = () => setOrderbox("flex");
  const closeOrderBox = () => setOrderbox("none");

  const removeItem = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(item => item.name !== name);

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
  };

  return (
    <div className='Cartlistdiv'>
      <img src={src} alt="" />

      <div className="Cartlistdivcontent">
        <h3>{name}</h3>

        <p>
          Price : ₹{price}{" "}
          {oldprice && (
            <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px" }}>
              ₹{oldprice}
            </span>
          )}
        </p>
      </div>

      <div className="rightSection">
        <time className="deleverdate" dateTime={deliveryDate.toISOString()}>
          Delivered on: {formattedDate}
        </time>

        <button className="placebtn" onClick={showOrderBox}>
          Place order
        </button>

        <button className="removebtn" onClick={removeItem}>
          Remove
        </button>
      </div>

      <div className='buynowsection' style={{ display: orderbox }}>
        <Buynowsection closeOrderBox={closeOrderBox} />
      </div>

    </div>
  );
};

export default Cartlistdiv;
