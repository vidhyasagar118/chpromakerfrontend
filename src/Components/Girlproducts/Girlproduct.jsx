import React from 'react';
import "./Girlproduct.css";
import { useNavigate } from "react-router-dom";

const Girlproduct = (props) => {
  const navigate = useNavigate();

  return (
    <div id='showgirlproductdiv'>
      <img 
        src={props.src}  
        onClick={() => {
          navigate("/Productmainselect", {
            state: {
              name: props.name,
              price: props.price,
              oldprice: props.oldprice,
              src: props.src,
            },
          });
        }} 
      />

      <div className='Girlproductextrainfo'>
        <h4>{props.name}</h4>
        <p>{props.brandname}</p>

        <span className="discount-tag">{props.discount}</span>
        <span className="old-price">{props.oldprice}</span>
        <span className="curr-price">{props.currprice}</span>

        <p>Delivery by {props.delivery}</p>
      </div>
    </div>
  );
};

export default Girlproduct;
