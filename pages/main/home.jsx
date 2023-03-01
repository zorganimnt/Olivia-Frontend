import React, { Fragment } from 'react';
import ProductCard from './components/products/product-card';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedProducts } from '../../lib/products';
import CardSkeleton from '../../components/ui/skeleton/card-skeleton';


const Home = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['getFeaturedProducts'],
    queryFn: getFeaturedProducts,
  });

  return (
    <Fragment>
   
      <div className='containerr'>
        <div className='section-header'>
          <h2>Latest product</h2>
        </div>
        <div className='row ' id='latest-products'>
          {isLoading
            ? [...Array(12).keys()].map((i) => <CardSkeleton key={i} />)
            : products.map((product) => (
                <div className='col-3 col-md-6 col-sm-12' key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
