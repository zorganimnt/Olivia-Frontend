import { Footer } from 'flowbite-react';
import React from 'react';
import {
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const FooterComp = () => {
  return (
    <Footer container className='mt-auto'>
      <div className='w-full container mx-auto'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div>
            <Footer.Brand
              href='https://flowbite.com'
              src='https://flowbite.com/docs/images/logo.svg'
              alt='Flowbite Logo'
              name='Title'
            />
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='about' />
              <Footer.LinkGroup col={true}>
                <Footer.Link href='#'>Flowbite</Footer.Link>
                <Footer.Link href='#'>Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col={true}>
                <Footer.Link href='#'>Github</Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col={true}>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Title™' year={2023} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon href='#' icon={AiFillFacebook} />
            <Footer.Icon href='#' icon={AiFillInstagram} />
            <Footer.Icon href='#' icon={AiFillTwitterCircle} />
            <Footer.Icon href='#' icon={AiFillGithub} />
            <Footer.Icon href='#' icon={AiFillDribbbleCircle} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
