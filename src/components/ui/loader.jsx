import React from 'react';

function Loader() {
  return (
    <div className='h-[100vh] bg-[#f6f9ff] dark:bg-gray-900 flex items-center justify-center '>
      <div className='w-16 h-16 border-4 border-dashed rounded-full border-violet-600 animate-spin dark:border-violet-400'></div>
    </div>
  );
}

export default Loader;
