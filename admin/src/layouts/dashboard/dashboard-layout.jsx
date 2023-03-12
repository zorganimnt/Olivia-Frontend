import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth-store';
import Sidebar from './components/sidebar';
import Topnav from './components/topnav';

const DashboardLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate('/auth');
  }, [isAuth]);

  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 '>
        <Topnav />
        <div className='container relative pt-12 pb-32 mx-auto md:pt-10'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
