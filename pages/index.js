import Avatar from '@/components/Avatar/Avatar';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <div className=''>
      <Head>
        <title>Google Clone</title>
        <link rel="stylesheet" href="" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between'>
        {/* left */}
        <div className='flex gap-2'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right */}
        <div className='flex gap-2 items-center'>
          <p>Gmail</p>
          <p>Images</p>

          {/* Icon */}

          {/* Avatar */}
          <Avatar url='https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
        </div>
      </header>

      {/* Body */}
      <div className='p-5'>
        <h1 className='text-4xl font-bold text-center'>Google</h1>
        <input type="text" placeholder='What are you looking for?' className='border-b-2 max-sm:w-full lg:w-[30%] md:w-[40%] mt-5 text-xl focus:outline-blue-400' />
      </div>

    </div>
  );
};

export default index;