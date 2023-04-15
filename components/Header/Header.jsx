import React from 'react';
import Head from 'next/head';
import { BsFillGridFill } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import Avatar from '@/components/Avatar/Avatar';

const Header = () => {
    return (
        <div>
            {/* Top header portion */}
            <div className='bg-gradient-to-r from-cyan-50 to-cyan-100'>
                <Head>
                    <title>Google Clone</title>
                    <link rel="stylesheet" href="" />
                </Head>

                {/* Header */}
                <header className='flex w-full p-5 justify-between items-center'>
                    {/* left */}
                    <div className='flex gap-2'>
                        <p className='link'>About</p>
                        <p className='link'>Store</p>
                    </div>

                    {/* right */}
                    <div className='flex gap-2 items-center'>
                        <p className='link'>Gmail</p>
                        <p className='link'>Images</p>

                        {/* Icon */}
                        <div className='rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out delay-150'>
                            <BsFillGridFill
                                className="text-xl m-3"
                            />
                        </div>
                        {/* Avatar */}
                        <Avatar url='https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                    </div>
                </header>

                {/* Body */}
                <div className='p-5'>
                    <h1 className="text-5xl font-[500] max-sm:text-center mb-4">GPT Search</h1>

                    <div className='lg:w-[500px] flex items-center p-4 rounded-full gap-3 bg-white '>
                        <VscSearch className='text-3xl' />
                        <input
                            type="text"
                            placeholder='What are you looking for?'
                            className='pl-1 pb-1 max-sm:w-full lg:w-[500px] md:w-[40%] text-xl outline-none focus:outline-none border-black bg-inherit'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;