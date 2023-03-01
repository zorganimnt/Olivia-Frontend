import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/main/main-layout';
import Login from '../pages/main/authentication/login';
import Register from '../pages/main/authentication/register';
import Home from '../pages/main/home';
import ProductDetails from '../pages/main/products/product-details';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
