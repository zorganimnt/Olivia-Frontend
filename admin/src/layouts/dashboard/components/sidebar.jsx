import { Sidebar as TSidebar } from 'flowbite-react';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { VscSignOut } from 'react-icons/vsc';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../../store/auth-store';
import { sidebarLinks } from './sidebar-links';

const Sidebar = function () {
  const { logoutHandler } = useAuthStore();
  const location = useLocation();
  const currentPage = location.pathname;
  const [show, setShow] = useState('hidden');

  return (
    <TSidebar className='relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64'>
      <div className='flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap'>
        <button
          onClick={() => setShow('bg-white m-2 py-3 px-6')}
          className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
          type='button'
        >
          <FaBars />
        </button>
        <a href='#' className='flex items-center'>
          <img
            src='https://i.pinimg.com/originals/6c/46/34/6c4634f46b82335be82b2502c63d76cb.jpg'
            className='h-6 mr-3 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Olivia
          </span>
        </a>
        <ul className='flex flex-wrap items-center list-none md:hidden'>
          <li className='relative inline-block'></li>
          <li className='relative inline-block'></li>
        </ul>
        <div
          className={`${show} absolute top-0 left-0 right-0 z-40 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded shadow md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none`}
        >
          <div className='block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200'>
            <div className='flex flex-wrap'>
              <div className='w-6/12'>
                <a className='inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap'>
                  Title
                </a>
              </div>
              <div className='flex justify-end w-6/12'>
                <button
                  type='button'
                  className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
                  onClick={() => setShow('hidden')}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>

          <TSidebar.Items>
            <TSidebar.ItemGroup>
              {sidebarLinks.map((link) => (
                <TSidebar.Item
                  key={link.name}
                  as={NavLink}
                  to={link.link}
                  icon={link.icon}
                  className={
                    link.link === currentPage
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : ''
                  }
                >
                  {link.name}
                </TSidebar.Item>
              ))}
            </TSidebar.ItemGroup>
            <TSidebar.ItemGroup>
              <TSidebar.Item href='#' icon={CgProfile}>
                Profile
              </TSidebar.Item>
              <TSidebar.Item
                className=' cursor-pointer'
                onClick={logoutHandler}
                icon={VscSignOut}
              >
                Sign out
              </TSidebar.Item>
            </TSidebar.ItemGroup>
          </TSidebar.Items>

          <hr className='my-4 md:min-w-full' />
        </div>
      </div>
    </TSidebar>
  );
};

export default Sidebar;
