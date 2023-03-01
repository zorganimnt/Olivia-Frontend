import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';
import Loader from '../../../components/ui/loader';
import { getProductById } from '../../../lib/products';
import { formatCurrencry } from '../../../utils/format';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();


  const { data: product, isLoading } = useQuery({
    queryKey: ['getProductById', id],
    queryFn: () => getProductById(id),
  });

  const addItem = () => {
  
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-main'>
      <div className='containerr'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {' '}
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
                  <img
                    src={product.images[selectedImage]}
                    alt=''
                    className=' w-96  h-80 object-contain'
                  />
                </div>
                <div className='box'>
                  <div className='product-img-list'>
                    {product?.images.map((img, index) => (
                      <div
                        className='product-img-item'
                        key={img}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={img}
                          alt=''
                          className=' w-56  h-28 object-contain'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-7 col-md-12'>
                <div className='product-info'>
                  <h1 className='text-3xl font-bold'>{product.name}</h1>
                  {/* <div className='product-info-detail'>
                    <span className='product-info-detail-title'>
                      Category:{' '}
                    </span>
                    <a href='#'>{product.category.name}</a>
                  </div> */}
                  <div className='product-info-detail'>
                    <span className='product-info-detail-title'>Brand: </span>
                    <a href='#'>{product.brand}</a>
                  </div>
                  {/* <div className='product-info-detail'>
                    <span className='product-info-detail-title'>Rated:</span>
                    <span className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </span>
                  </div> */}
                  <p className='product-description'>{product.description}</p>
                  <div className='product-info-price'>
                    {formatCurrencry(product.price)}
                  </div>
                  {/* <div className='product-quantity-wrapper'>
                    <span className='product-quantity-btn'>
                      <i className='bx bx-minus'></i>
                    </span>
                    <span className='product-quantity'>1</span>
                    <span className='product-quantity-btn'>
                      <i className='bx bx-plus'></i>
                    </span>
                  </div> */}
                  <div>
                    <button className='btn-flat btn-hover' onClick={addItem}>
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
