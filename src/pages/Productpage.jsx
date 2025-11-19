import React from 'react';
import "./productpage.css";

import Girlproductmaindiv from '../Components/Girlproducts/Girlproductmaindiv';
import Boysproductmaindiv from '../Components/Boysproduct/Boysproductmaindiv';

const Productpage = () => {
  return (
    <div className='Productpagemaindiv'>
      <Girlproductmaindiv />
      <Boysproductmaindiv />
    </div>
  );
};

export default Productpage;
