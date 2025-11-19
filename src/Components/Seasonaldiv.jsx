import React from 'react'
import Seasonallistdiv from './Seasonallistdiv'

const Seasonaldiv = ({ heading, products }) => {
  return (
    <>
      <h5>{heading}</h5>
      <div className='Seasonaldivinnerdiv'>
        {products.map((item, index) =>(<Seasonallistdiv  key={index}  src={item.src}  productname={item.productname}
        discount={item.discount}
        oldprice={item.oldprice}
          price={item.price}
          />
        ))}
      </div>
    </>
  )
}

export default Seasonaldiv
