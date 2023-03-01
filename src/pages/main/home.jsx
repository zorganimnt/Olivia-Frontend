import React from 'react';
import { useAuthStore } from '../../store/auth-store';
import { products } from '../../utils/data';
import ProductCard from './components/products/product-card';

const Home = () => {
  const { userInfo } = useAuthStore();
  return (
    <div className='container'>
      <div className='section-header'>
        <h2>Latest product</h2>
      </div>
      <div className='row ' id='latest-products'>
        {products.map((product) => (
          <div className='col-3 col-md-6 col-sm-12' key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
