//import { useQuery } from '@tanstack/react-query';
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../lib/categories";

//import SalesChart from './components/sales-chart';

const Home = () => {
  const { data, isLoading, error } = useQuery(["getCategories"], getCategories);
  console.log(data);

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="px-4">
      <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="shrink-0">
            <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
              {isLoading ? <div>loading...</div> : <ul>{data.length}</ul>}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
