import React from 'react';
import Home from './pages/Home';
import Product from './pages/Productpage';
import Contactlayout from './layout/Contactlayout';
import About from './pages/About';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Contactinfo from './Components/Contactinfo';
import Contactform from './Components/Contactform';
import Notfound from './Components/Notfound';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Mainshellandaccount from './Components/Sellshellaccount/Mainshellandaccount';
import Mydata from './Components/Sellshellaccount/Mydata';
import Cart from './Components/Cart';
import Groupshellinfo from './Components/Sellshellaccount/Groupshellinfo';
import Productmainselect from './Components/Productmainselect';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        
        {/* Home */}
        <Route index element={<Home />} />

        {/* Pages */}
        <Route path='products' element={<Product />} />
        <Route path='about' element={<About />} /> 
        
        {/* Contact Layout Nested Routes */}
        <Route path='contact' element={<Contactlayout />}>
          <Route path='info' element={<Contactinfo />} />
          <Route path='form' element={<Contactform />} />
        </Route>

        {/* Other Routes */}
        <Route path='cart' element={<Cart />} /> 
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='mainshellandaccount' element={<Mainshellandaccount />} />
        <Route path='mydata' element={<Mydata />} />
        <Route path='productmainselect' element={<Productmainselect />} />
        <Route path='groupshellinfo' element={<Groupshellinfo />} />

        {/* 404 Page */}
        <Route path='*' element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
