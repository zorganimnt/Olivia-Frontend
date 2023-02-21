import React, { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from './components/banner';
import FooterComp from './components/footer';
import Header from './components/header';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <Fragment>
      <div className='pb-20 mb-5'>
        <Header />
      </div>

      {isHome && <Banner />}

      <main className='main'>
        <div className='container mx-auto py-5'>
          <Outlet />
        </div>
      </main>
      <FooterComp />
    </Fragment>
  );
};

export default MainLayout;
