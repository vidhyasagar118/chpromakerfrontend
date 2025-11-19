import React, { useEffect } from 'react';
import "./mainnav.css";
import { useNavigate } from 'react-router-dom';

const Mainnavbar = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  return (
    <div className={`mainnav ${isVisible ? 'show' : 'hide'}`}>
      <div className='mainnavbox'>
     <button onClick={() => navigate('/')} >HOME</button>
<button onClick={() => navigate('/products')}>Products</button>
<button onClick={()=>navigate('/contact')}> contact </button>
<button onClick={()=>navigate('/about')}> about</button>
      <button onClick={() => navigate('/Mainshellandaccount')}>
        account manage btn
      </button>
      </div>
    </div>
  );
};

export default Mainnavbar;
