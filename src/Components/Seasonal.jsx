import React from 'react'
import Seasonaldiv from './Seasonaldiv'

const Seasonal = ({ heading, products }) => {
  return (
    <div className='seasonalmaindiv'>
      <Seasonaldiv heading={heading} products={products} />
    </div>
  )
}

export default Seasonal
