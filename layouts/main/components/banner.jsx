import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/ui/loader';
import { getCarouselProducts } from '../../../lib/products';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidePlay, setSlidePlay] = useState(true);
  const slides = document.querySelectorAll('.slide');
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery({
    queryKey: ['getCarouselProducts'],
    queryFn: getCarouselProducts,
  });

  const hideAllSlide = () => {
    slides.forEach((e) => {
      e.classList.remove('active');
    });
  };

  const showSlide = () => {
    hideAllSlide();
    slides[slideIndex]?.classList.add('active');
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', () => setSlidePlay(false));
    slider.addEventListener('mouseleave', () => setSlidePlay(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slidePlay) {
        nextSlide();
        showSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex, slidePlay]);

  useEffect(() => {
    showSlide();
  }, [slideIndex]);

  return (
    <div className='hero'>
      <div className='slider'>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='containerr'>
            {/* slide item */}
            <div className='slide active'>
              <div className='info'>
                <div className='info-content'>
                  <h3 className='top-down'>{products[0].brand}</h3>
                  <h2 className='top-down trans-delay-0-2'>
                    {products[0].name}
                  </h2>
                  <p className='top-down trans-delay-0-4'>
                    {products[0].description}
                  </p>
                  <div className='top-down trans-delay-0-6'>
                    <button
                      onClick={() => navigate(`/products/${products[0]._id}`)}
                      className='btn-flat btn-hover'
                    >
                      <span>shop now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='img top-down'>
                <img
                  src={products[0].images[0]}
                  alt=''
                  className='bg-transparent md:w-[550px]'
                />
              </div>
            </div>
            <div className='slide '>
              <div className='info'>
                <div className='info-content'>
                  <h3 className='top-down'>{products[1].brand}</h3>
                  <h2 className='top-down trans-delay-0-2'>
                    {products[1].name}
                  </h2>
                  <p className='top-down trans-delay-0-4'>
                    {products[1].description}
                  </p>
                  <div className='top-down trans-delay-0-6'>
                    <button
                      onClick={() => navigate(`/products/${products[1]._id}`)}
                      className='btn-flat btn-hover'
                    >
                      <span>shop now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='img top-down'>
                <img
                  src={products[1].images[0]}
                  alt=''
                  className='bg-transparent md:w-[550px]'
                />
              </div>
            </div>{' '}
            <div className='slide '>
              <div className='info'>
                <div className='info-content'>
                  <h3 className='top-down'>{products[2].brand}</h3>
                  <h2 className='top-down trans-delay-0-2'>
                    {products[2].name}
                  </h2>
                  <p className='top-down trans-delay-0-4'>
                    {products[2].description}
                  </p>
                  <div className='top-down trans-delay-0-6'>
                    <button
                      onClick={() => navigate(`/products/${products[2]._id}`)}
                      className='btn-flat btn-hover'
                    >
                      <span>shop now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='img top-down'>
                <img
                  src={products[2].images[0]}
                  alt=''
                  className='bg-transparent md:w-[550px]'
                />
              </div>
            </div>
          </div>
        )}
        {/* slider controller */}
        <button className='slide-controll slide-next' onClick={nextSlide}>
          <i className='bx bxs-chevron-right' />
        </button>
        <button className='slide-controll slide-prev' onClick={prevSlide}>
          <i className='bx bxs-chevron-left' />
        </button>
        {/* end slider controller */}
      </div>
    </div>
  );
};

export default Banner;
