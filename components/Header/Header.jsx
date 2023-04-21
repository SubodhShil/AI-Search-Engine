import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BsFillGridFill } from 'react-icons/bs';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { RiFolderSharedFill } from 'react-icons/ri';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsImages } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import Avatar from '@/components/Avatar/Avatar';

/// Import external stylesheet
import Style from './Header.module.css';

const Header = (props) => {

    /// next.js router provider
    const router = useRouter();

    /// manage searching
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;

        router.push(`search?term=${term}`);
    };

    return (
        <div>
            {/* Top header portion */}
            <div className='bg-gradient-to-r from-[#ecfbfffb] to-[#fcf7fd] '>
                <Head>
                    <title>GPT Search</title>
                    <link rel="stylesheet" href="" />
                </Head>

                {/* Header */}
                <header className='flex w-full p-5 justify-between items-center'>

                    {/* left */}

                    <div className='flex gap-4'>
                        <div className={`max-sm:hidden flex items-center gap-2 text-white bg-cyan-500 p-2 rounded-lg shadow-lg shadow-cyan-500/50`}>
                            <RiFolderSharedFill />
                            <p className='link'>File Share</p>
                        </div>
                        <div className={`max-sm:hidden flex items-center gap-2 text-white bg-cyan-500 p-2 rounded-lg shadow-lg shadow-cyan-500/50`}>
                            <GiSandsOfTime />
                            <p className='link'>Productivity Tracker</p>
                        </div>
                    </div>

                    {/* right */}
                    <div className='flex gap-2 items-center max-sm:justify-between max-sm:w-full'>

                        <div className='flex gap-4'>
                            <div className='max-sm:flex-col flex items-center gap-2 text-white bg-cyan-500 p-2 rounded-lg shadow-lg shadow-cyan-500/50'>
                                <IoMailUnreadOutline className='text-2xl' />
                                <p className='link'>Mailing</p>
                            </div>

                            <div className='max-sm:flex-col max-sm:justify-between flex items-center gap-2 text-white bg-cyan-500 p-2 rounded-lg shadow-lg shadow-cyan-500/50'>
                                <BsImages />
                                <p className='link'>Image Search</p>
                            </div>
                        </div>

                        {/* Icon */}
                        <div className='flex gap-2'>
                            <div className='rounded-full hover:bg-gray-100 cursor-pointer transition ease-in-out delay-150'>
                                <BsFillGridFill
                                    className="text-xl m-3"
                                />
                            </div>

                            {/* Avatar */}
                            <Avatar url='https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                        </div>
                    </div>
                </header>

                {/* Application name and search bar part*/}

                <div className='p-5'>
                    <div>

                        <h1 className="lg:text-center max-sm:text-center mb-4 text-transparent font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">GPT Search</h1>

                    </div>

                    <div className='flex lg:justify-center mb-10'>
                        <div className={`w-[500px] lg:w-[800px] md:w-[500px] max-sm:w-[600px] flex justify-between h-[70px] items-center pl-3 rounded-lg gap-3 bg-white ${Style.inputBox}`}>

                            {/* input field */}
                            <input
                                type="text"
                                ref={searchInputRef}
                                placeholder='What are you looking for?'
                                className='pl-1 pb-1 max-sm:w-full lg:w-[500px] md:w-[50%] text-xl outline-none focus:outline-none border-black bg-inherit'
                            />
                            <button
                                onClick={search}
                                className=' bg-[#0f0c29] bg-gradient-to-r from-orange-500 to-yellow-500 p-1 h-[70px] w-[70px] flex justify-center items-center cursor-pointer rounded-r-lg'>
                                <VscSearch className='text-3xl text-white transition duration-100 transform hover:scale-110' />
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Header;