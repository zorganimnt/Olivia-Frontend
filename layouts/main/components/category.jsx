import React from 'react';



const Category = () => {





  return (
    <div className='promotion'>
      <div className='row'>
        <div className='col-4 col-md-12 col-sm-12'>
          <div className='promotion-box'>
            <div className='text'>
              <h3>Gaming</h3>
              <button
               
                className='btn-flat btn-hover'
              >
                <span>shop collection</span>
              </button>
            </div>
            <img
              className=' object-contain'
              src='https://www.pngall.com/wp-content/uploads/5/Graphic-Card-PNG-Download-Image.png'
              alt=''
            />
          </div>
        </div>
        <div className='col-4 col-md-12 col-sm-12'>
          <div className='promotion-box'>
            <div className='text'>
              <h3>Headphone &amp; Earbuds</h3>
              <button
              
                className='btn-flat btn-hover'
              >
                <span>shop collection</span>
              </button>
            </div>
            <img
              className=' object-contain'
              src='./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
              alt=''
            />
          </div>
        </div>
        <div className='col-4 col-md-12 col-sm-12'>
          <div className='promotion-box'>
            <div className='text'>
              <h3>Laptop</h3>
              <button
            
                className='btn-flat btn-hover'
              >
                <span>shop collection</span>
              </button>
            </div>
            <img
              className='object-contain'
              src='./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
