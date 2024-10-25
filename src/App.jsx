import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  const [cart,setCart] =useState([])


  
  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Product  setCart={setCart} cart={cart}  />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='*' element={"Error"}/>

        {/* <Route path='/' element={<Home/>}>
<Route path='product' element={<Product/>}/>
        </Route> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;