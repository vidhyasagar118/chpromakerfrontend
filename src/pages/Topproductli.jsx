import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topproductli = ({ name, src, price }) => {
  const navigate = useNavigate();

  const realPrice = Number(price);
  const oldPrice = realPrice + 1000; 

  const goToProduct = () => {
    navigate("/Productmainselect", {
      state: {
        name,
        src,
        price: realPrice,
        oldprice: oldPrice
      }
    });
  };

  return (
    <li onClick={goToProduct} style={{ cursor: "pointer" }}>
      <img className='Topproductliimg' style={{ width: '15vw' }} src={src} alt="pro-img" />
      <h5>{name}</h5>
   <b>   <h4>{realPrice}</h4></b> 
       <p className='old-price'>{oldPrice}</p>
    </li>
  );
};

export default Topproductli;
