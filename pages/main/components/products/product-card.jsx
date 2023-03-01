import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card rounded shadow m-3'>
      <div className='product-card-img'>
        <img src={product.images[0]} alt='' />
        {/* <img src={product.images[1]} alt='' /> */}
      </div>
      <div className='product-card-info'>
        <div className='product-btn'>
          <Link
            to={`/products/${product._id}`}
            className='btn-flat btn-hover btn-shop-now'
          >
            View
          </Link>
          <button className='btn-flat btn-hover btn-cart-add'>
            <i className='bx bxs-cart-add'></i>
          </button>
        </div>
        <div className='product-card-name'>JBL Quantum 400</div>
        <div className='product-card-price'>
          <span className='curr-price text-blue-700'>$200</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
