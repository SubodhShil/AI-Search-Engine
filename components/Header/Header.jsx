import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { BsFillGridFill } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import Avatar from '@/components/Avatar/Avatar';

import Style from './Header.module.css';

const Header = (props) => {

    /// manage searching
    /// 
    // const searchInputRef = useRef(null);
    // const search = (e) => {
    //     e.preventDefault();
    //     const term = searchInputRef.current.value;
    //     if (!term) return;
    // };

    return (
        <div>
            {/* Top header portion */}
            <div className='bg-gradient-to-r from-[#ECFBFF] to-[#fcf7fd] '>
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
                    <h1 className="lg:text-center max-sm:text-center mb-4 text-transparent font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">GPT Search</h1>

                    <div className='flex lg:justify-center mb-10'>
                        <div className={`w-[500px] lg:w-[800px] md:w-[500px] max-sm:w-[600px] flex justify-between h-[70px] items-center pl-3 rounded-lg gap-3 bg-white ${Style.inputBox}`}>

                            {/* input field */}
                            <input
                                type="text"
                                // ref={searchInputRef}
                                placeholder='What are you looking for?'
                                className='pl-1 pb-1 max-sm:w-full lg:w-[500px] md:w-[50%] text-xl outline-none focus:outline-none border-black bg-inherit'
                            />
                            <button className=' bg-[#0f0c29] bg-gradient-to-r from-orange-500 to-yellow-500 p-1 h-[70px] w-[70px] flex justify-center items-center cursor-pointer rounded-r-lg'>
                                <VscSearch className='text-3xl text-white' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;