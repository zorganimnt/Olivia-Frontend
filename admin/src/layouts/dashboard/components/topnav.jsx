import React from 'react';
import { Navbar } from 'flowbite-react';
import { useAuthStore } from '../../../store/auth-store';
import { NavLink } from 'react-router-dom';

const Topnav = () => {
  const { userInfo } = useAuthStore();
  return (
    <Navbar fluid className='shadow'>
      <div className='w-full p-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Navbar.Brand as={NavLink} to='/'>
              <img alt='' src='/images/logo.svg' className='mr-3 h-6 sm:h-8' />
              <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'></span>
            </Navbar.Brand>
          </div>
          <div className='flex items-center gap-3'>
            <h3 className='font-bold text-xl'>
              {' '}
              {userInfo?.username} | {userInfo?.role}
            </h3>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Topnav;
