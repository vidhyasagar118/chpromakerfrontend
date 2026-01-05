import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Mainnavbar from './Mainnavbar';
import Cart from './Cart';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  

  return (
    <>
      <div className='navbar'>
        
 <div   className='showbtn'  onClick={() => setShowMenu(!showMenu)}>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/menu-bar-icon-svg-download-png-8389626.png?f=webp&w=128" width="30px"  />
        </div>

        <button className='loginbtn' onClick={() => navigate('/login', { replace: true })}>
          <span className="icon-box">
            <i className="uil uil-user-circle"></i>
          </span>
          login
        </button>
        <button onClick={() => navigate('/Cart', { replace: true })}>Cart</button>
        <img
          className='navimg'
          style={{  width: "100px", height: "50px" }}
          src="https://static.vecteezy.com/system/resources/thumbnails/004/303/293/small/abstract-blur-shopping-mall-and-retail-store-photo.jpg"
          alt=""
        />
       
      </div>

      <Mainnavbar isVisible={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
