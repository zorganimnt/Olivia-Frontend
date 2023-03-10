import React, { useState } from 'react';
import { Breadcrumb, Button, Label, TextInput } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import TableContainer from '../../../components/containers/table-container';
import ProductTable from '../components/products/product-table';
import { FaPlus } from 'react-icons/fa';
import AddProduct from '../components/products/add-product';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../../lib/products';
import useDebounce from '../../../hooks/useDebounce';
import TableSkeleton from '../../../components/ui/skeleton/table-skeleton';
import Pagination from '../../../components/ui/pagination';


//--------------------------------All Products----------------------------------//
const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { debouncedValue } = useDebounce(search, 300);

  const filter = { query: debouncedValue, page, brand: '', category: '' };

  const { data, isLoading } = useQuery({
    queryKey: ['getProducts', filter],
    queryFn: () => getProducts(filter),
  });

  const products = data?.products;
  const pages = data?.pages;
  const headTable = [
    'Product',
    'Category',
    'Price',
    'Created At',
    'Stats',
    'Options',
  ];
  return (
    <>
      <div className='block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex'>
        <div className='mb-1 w-full'>
          <div className='mb-4'>
            <Breadcrumb className='mb-4'>
              <Breadcrumb.Item href='#'>
                <div className='flex items-center gap-x-3'>
                  <HiHome className='text-xl' />
                  <span className='dark:text-white'>Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
              All products
            </h1>
          </div>
          <div className='block items-center sm:flex'>
            <form className='mb-4 sm:mb-0 sm:pr-3' action='#' method='GET'>
              <Label htmlFor='products-search' className='sr-only'>
                Search
              </Label>
              <div className='relative mt-1 lg:w-64 xl:w-96'>
                <TextInput
                  onChange={(e) => setSearch(e.target.value)}
                  id='products-search'
                  name='products-search'
                  placeholder='Search for products'
                />
              </div>
            </form>

            <div className='flex w-full items-center sm:justify-end'>
              <Button color='dark' onClick={() => setOpen(true)}>
                <FaPlus className='mr-3 text-sm' />
                Add product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <TableContainer headTable={headTable}>
        {isLoading
          ? [...Array(4).keys()].map((i) => (
              <TableSkeleton
                num={headTable.length}
                key={i}
                classes='text width-100'
              />
            ))
          : products?.map((product) => (
              <ProductTable key={product._id} product={product} />
            ))}
      </TableContainer>
      <Pagination pages={pages} page={page} setPage={setPage} />
      <AddProduct open={open} setOpen={setOpen} />
    </>
  );
};

export default ProductList;
