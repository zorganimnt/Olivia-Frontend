import React, { useState } from 'react';
import { Breadcrumb, Button } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import TableContainer from '../../../components/containers/table-container';
import { FaPlus } from 'react-icons/fa';
import CategoryTable from '../components/categories/category-table';
import AddCategory from '../components/categories/add-category';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../lib/categories';
import TableSkeleton from '../../../components/ui/skeleton/table-skeleton';
import { NavLink } from 'react-router-dom';

const CategoryList = () => {
  const [open, setOpen] = useState(false);

  const { data: categories, isLoading } = useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories,
  });

  const headTable = ['Name', 'Description', 'Created At', 'Options'];

  return (
    <>
      <div className='block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex'>
        <div className='mb-1 w-full'>
          <div className='mb-4'>
            <Breadcrumb className='mb-4'>
              <Breadcrumb.Item as={NavLink} to='/'>
                <div className='flex items-center gap-x-3'>
                  <HiHome className='text-xl' />
                  <span className='dark:text-white'>Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Categories</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
              All categories
            </h1>
          </div>
          <div className='block items-center sm:flex'>
            <div className='flex w-full items-center sm:justify-end'>
              <Button color='dark' onClick={() => setOpen(true)}>
                <FaPlus className='mr-3 text-sm' />
                Add category
              </Button>
            </div>
          </div>
        </div>
      </div>
      <TableContainer headTable={headTable}>
        {isLoading
          ? [...Array(9).keys()].map((i) => (
              <TableSkeleton
                num={headTable.length}
                key={i}
                classes='text width-100'
              />
            ))
          : categories.map((category) => (
              <CategoryTable key={category._id} category={category} />
            ))}
      </TableContainer>
      <AddCategory open={open} setOpen={setOpen} />
    </>
  );
};

export default CategoryList;
