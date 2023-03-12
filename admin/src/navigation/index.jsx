import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard/dashboard-layout';
import ProductList from '../pages/dashboard/products/product-list';
import Login from '../pages/authentication/login';
import Home from '../pages/dashboard/home';
import CategoryList from '../pages/dashboard/categories/category-list';
import UsersList from '../pages/dashboard/users/users-list';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<ProductList />} />
          <Route path='categories' element={<CategoryList />} />
          <Route path='users' element={<UsersList />} />
        </Route>
        <Route path='/auth' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
