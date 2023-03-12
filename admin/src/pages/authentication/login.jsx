/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormGroup from '../../components/ui/form-group';
import { useAuthStore } from '../../store/auth-store';
import { Spinner } from 'flowbite-react';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const { loginHandler, loading, isAuth } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    loginHandler(data);
  };

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);

  return (
    <div className='py-5 mt-5'>
      <section className='flex items-center justify-center mt-5'>
        <div className='flex items-center max-w-5xl p-5 bg-white shadow-lg rounded-2xl'>
          {/* form */}
          <div className='px-8 md:w-1/2 md:px-16'>
            <h2 className='font-bold text-2xl text-[#002D74]'>Login</h2>
            <p className='text-xs mt-4 text-[#002D74]'>Admin Dashboard</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
            >
              <FormGroup
                name={'email'}
                register={register}
                label='Email'
                placeholder={'johndoe@gmail.com'}
                errors={errors.email}
              />
              <FormGroup
                name={'password'}
                type='password'
                placeholder={'**********'}
                register={register}
                label='Password'
                errors={errors.password}
              />

              <button
                disabled={loading}
                type='submit'
                className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300'
              >
                {loading ? (
                  <>
                    <Spinner aria-label='Spinner button example' /> Loading
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>
          <div className='hidden w-1/2 md:block'>
            <img
              alt='img'
              loading='lazy'
              className='rounded-2xl'
              src={
                'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-20156.jpg'
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
