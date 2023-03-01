import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidePlay, setSlidePlay] = useState(true);
  const slides = document.querySelectorAll('.slide');

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
        <div className='containerr'>
          {/* slide item */}
          <div className='slide active'>
            <div className='info'>
              <div className='info-content'>
                <h3 className='top-down'>JBL TUNE 750TNC</h3>
                <h2 className='top-down trans-delay-0-2'>Next-gen design</h2>
                <p className='top-down trans-delay-0-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolor commodi dignissimos culpa, eaque eos
                  necessitatibus possimus veniam, cupiditate rerum deleniti?
                  Libero, ducimus error? Beatae velit dolore sint explicabo!
                  Fugit.
                </p>
                <div className='top-down trans-delay-0-6'>
                  <button className='btn-flat btn-hover'>
                    <span>shop now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='img top-down'>
              <img
                src='./images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp'
                alt=''
              />
            </div>
          </div>
          {/* end slide item */}
          {/* slide item */}
          <div className='slide'>
            <div className='info'>
              <div className='info-content'>
                <h3 className='top-down'>JBL Quantum ONE</h3>
                <h2 className='top-down trans-delay-0-2'>Ipsum dolor</h2>
                <p className='top-down trans-delay-0-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  optio, voluptatum aperiam nobis quis maxime corporis porro
                  alias soluta sunt quae consectetur aliquid blanditiis
                  perspiciatis labore cumque, ullam, quam eligendi!
                </p>
                <div className='top-down trans-delay-0-6'>
                  <button className='btn-flat btn-hover'>
                    <span>shop now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='img right-left'>
              <img
                src='./images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
                alt=''
              />
            </div>
          </div>
          {/* end slide item */}
          {/* slide item */}
          <div className='slide'>
            <div className='info'>
              <div className='info-content'>
                <h3 className='top-down'>JBL JR 310BT</h3>
                <h2 className='top-down trans-delay-0-2'>Consectetur Elit</h2>
                <p className='top-down trans-delay-0-4'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo aut fugiat, libero magnam nemo inventore in tempora
                  beatae officiis temporibus odit deserunt molestiae amet quam,
                  asperiores, iure recusandae nulla labore!
                </p>
                <div className='top-down trans-delay-0-6'>
                  <button className='btn-flat btn-hover'>
                    <span>shop now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='img left-right'>
              <img
                src='./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png'
                alt=''
              />
            </div>
          </div>
          {/* end slide item */}
        </div>
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
