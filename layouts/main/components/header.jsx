import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/auth-store';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, logoutHandler, userInfo } = useAuthStore();

  return (
    <header className=' top-0 z-30 fixed w-full '>
      <div className='bg-second'>
        <div className='top-header containerr'>
          <ul className='devided'>
            <li>
              <a href='#'>+840123456789</a>
            </li>
            <li>
              <a href='#'>atshop@mail.com</a>
            </li>
          </ul>
          <ul className='devided'>
            <li className='dropdown'>
              <a href>USD</a>
              <i className='bx bxs-chevron-down' />
              <ul className='dropdown-content'>
                <li>
                  <a href='#'>VND</a>
                </li>
                <li>
                  <a href='#'>JPY</a>
                </li>
                <li>
                  <a href='#'>EUR</a>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href>ENGLISH</a>
              <i className='bx bxs-chevron-down' />
              <ul className='dropdown-content'>
                <li>
                  <a href='#'>FRENCH</a>
                </li>
                <li>
                  <a href='#'>ENGLISH</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>ORDER TRACKING</a>
            </li>
          </ul>
        </div>
      </div>
      <Navbar className='shadow' rounded={true}>
        <Navbar.Brand as={NavLink} to='/'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            Title
          </span>
        </Navbar.Brand>

        <div className='flex md:order-2 items-center space-x-3'>
          <Dropdown
            placement='top'
            inline={true}
            arrowIcon={false}
            label={
              <span className='mr-5 relative'>
                <BsCart3 size={25} />
                <span className=' absolute bottom-4 right-3 bg-black text-white text-sm w-5 h-5 rounded-xl text-center'>
                  0
                </span>
              </span>
            }
          >
            <Dropdown.Item className='flex space-x-2 items-center'>
              <img
                src='/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
                className='w-8'
                alt=''
              />
              <h5 className='text-xs md:text-base'>JBL E55BT KEY BLACK</h5>
              <span>1</span>
              <span>300$</span>
            </Dropdown.Item>{' '}
            <Dropdown.Item className='flex space-x-2 items-center'>
              <img
                src='/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
                className='w-8'
                alt=''
              />
              <h5 className='text-xs md:text-base'>JBL E55BT KEY BLACK</h5>
              <span>1</span>
              <span>300$</span>
            </Dropdown.Item>{' '}
            <Dropdown.Item className='flex space-x-2 items-center'>
              <img
                src='/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
                className='w-8'
                alt=''
              />
              <h5 className='text-xs md:text-base'>JBL E55BT KEY BLACK</h5>
              <span>1</span>
              <span>300$</span>
            </Dropdown.Item>
          </Dropdown>

          {isAuth ? (
            <Dropdown
              arrowIcon={true}
              inline={true}
              label={
                <Avatar
                  alt='User settings'
                  img={userInfo?.picture}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>{userInfo?.username}</span>
                <span className='block truncate text-sm font-medium'>
                  {userInfo?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>My Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button className='mx-2' onClick={() => navigate('/login')}>
              Sign In
            </Button>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href='/navbars' active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href='/navbars'>About</Navbar.Link>
          <Navbar.Link href='/navbars'>Services</Navbar.Link>
          <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
          <Navbar.Link href='/navbars'>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
