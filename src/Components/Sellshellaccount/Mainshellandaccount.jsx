import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Mainshellandaccount.css";

// Correct Imports
import Sellshop from './Sellshop';
import Mydata from './Mydata';
import Groupshellinfo from './Groupshellinfo';

const Mainshellandaccount = () => {
  const navigate = useNavigate();

  return (
    <div className='Mainshellandaccount'>
      <button onClick={() => navigate('/sellshop')}>Shellinfo</button>
      <button onClick={() => navigate('/mydata', { state: { shopname: '' } })}>
        My Account data
      </button>
      <button onClick={() => navigate('/groupshellinfo')}>
        Group member info
      </button>
    </div>
  );
};

export default Mainshellandaccount;
