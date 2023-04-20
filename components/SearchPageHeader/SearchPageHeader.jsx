import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Style from './SearchPageHeader.module.css';
import { VscSearch } from 'react-icons/vsc';

const SearchPageHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        searchInputRef.current.value = " ";

        if (!term) return;
        router.push(`/search?term=${term}`);
    };

    return (
        <div>
            <header className='mb-5 sticky top-0'>
                <div className='flex max-sm:flex-col gap-4 items-center mt-5 h-30'>
                    <h1
                        onClick={() => router.push("/")}
                        className="pt-5 mb-4 text-transparent font-extrabold text-4xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer">
                        GPT Search
                    </h1>

                    <div className='lg:justify-center  flex'>
                        <div className={`h-30 max-sm:w-[350px] w-[400px] flex justify-between pl-3 rounded-lg gap-3 bg-white ${Style.inputBox}`}>

                            {/* input field */}
                            <input
                                type="text"
                                ref={searchInputRef}
                                placeholder='What are you looking for?'
                                className='pl-1 pb-1 max-sm:w-full w-[300px] text-xl outline-none focus:outline-none border-black bg-inherit'
                            />
                            <button
                                onClick={search}
                                className='bg-gradient-to-r from-orange-500 to-yellow-500 p-1 h-[50px] w-[50px] flex justify-center items-center cursor-pointer rounded-r-lg'>
                                <VscSearch className='text-3xl text-white transition duration-100 transform hover:scale-110' />
                            </button>
                        </div>
                    </div>

                </div>
            </header >
        </div>
    );
};

export default SearchPageHeader;