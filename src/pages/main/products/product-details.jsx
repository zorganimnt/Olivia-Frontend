import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../../utils/data';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div className='bg-main'>
      <div className='containerr'>
        <div className='box'>
          <div className='breadcumb'>
            <Link to='/'>home</Link>
            <span>
              <i className='bx bxs-chevrons-right'></i>
            </span>
            <Link to='/'>all products</Link>
            <span>
              <i className='bx bxs-chevrons-right'></i>
            </span>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </div>
        </div>
        <div className='row product-row'>
          <div className='col-5 col-md-12'>
            <div className='product-img' id='product-img'>
              <img src={product.images[0]} alt='' />
            </div>
            <div className='box'>
              <div className='product-img-list'>
                <div className='product-img-item'>
                  <img src={product.images[0]} alt='' />
                </div>
                <div className='product-img-item'>
                  <img src={product.images[1]} alt='' />
                </div>
                <div className='product-img-item'>
                  <img src={product.images[0]} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-7 col-md-12'>
            <div className='product-info'>
              <h1 className='text-3xl font-bold'>{product.name}</h1>
              <div className='product-info-detail'>
                <span className='product-info-detail-title'>Brand:</span>
                <a href='#'>{product.brand}</a>
              </div>
              <div className='product-info-detail'>
                <span className='product-info-detail-title'>Rated:</span>
                <span className='rating'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </span>
              </div>
              <p className='product-description'>{product.description}</p>
              <div className='product-info-price'>$2345</div>
              <div className='product-quantity-wrapper'>
                <span className='product-quantity-btn'>
                  <i className='bx bx-minus'></i>
                </span>
                <span className='product-quantity'>1</span>
                <span className='product-quantity-btn'>
                  <i className='bx bx-plus'></i>
                </span>
              </div>
              <div>
                <button className='btn-flat btn-hover'>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
