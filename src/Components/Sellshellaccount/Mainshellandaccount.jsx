import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./Mainshellandaccount.css";
import Sellshop from './Sellshop.jsx';
import Mydata from './Mydata';
import Groupshellinfo from './Groupshellinfo';
const Mainshellandaccount = () => {
  const navigate = useNavigate();
  return (
    <div className='Mainshellandaccount'>
 <button onClick={() => navigate('/Sellshop')}>Shellinfo </button>
<button onClick={() => navigate('/Mydata'  ,{ state: { shopname: '' } })}>My Account data</button>
<button onClick={() => navigate('/Groupshellinfo')}>Group member info</button>
    </div>
  )
}

export default Mainshellandaccount
