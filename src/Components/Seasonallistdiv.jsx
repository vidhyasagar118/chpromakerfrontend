import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Seasonal.css"
const Seasonallistdiv = ({ src, productname, discount,oldprice,price }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/Productmainselect", {
      state: {
        name: productname,
        src,
        price: 2000,
        oldprice: 2500
      }
    });
  };

  return (
    <div className='seasonalproductdiv' onClick={goToProduct} style={{cursor:"pointer"}}>
      <img src={src} alt={productname} />
      <h3>{productname}</h3>
      <p style={{ color: "red" }}>{discount}</p>
     <b>  <p className='old-price'>{oldprice}</p> </b>
      <p style={{color:"green"}}>{price}</p>
    </div>
  )
}

export default Seasonallistdiv
