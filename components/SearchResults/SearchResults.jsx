import React from 'react';
import Style from './SearchResults.module.css';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

import AIChat from '../AIChat/AIChat';

import { useSpring, animated } from 'react-spring';

const SearchResults = ({ results }) => {

    const styles = useSpring({
        from: { opacity: 0, transform: 'translate3d(-50%,0%,0)' },
        to: { opacity: 1, transform: 'translate3d(0%,0%,0)' },
    });

    return (
        <div className=''>

            {/* Result count header part */}
            <div className='flex items-center'>

                <div className='mr-4'>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/dfxesbyu.json"
                        trigger="loop"
                        style={{ width: '50px', height: '50px' }}
                        loop>
                    </lord-icon>
                </div>
                <h1 className={`font-[500] w-fit p-1 ${Style.highlight}`}>
                    Showing you {results?.searchInformation?.formattedTotalResults} results
                </h1>
            </div>

            {/* Showing the result in the page */}
            <div className='mt-4 grid place-content-between grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>

                <div className='col-span-2 p-1 flex flex-col'>
                    {results.items.map((result) => (
                        <animated.div style={styles} className='text-black rounded-md p-3 m-2 bg-gradient-to-r from-rose-100 to-teal-100 group pt-3' >
                            <div key={result.link}>

                                {/* URL */}
                                <a
                                    href={result.link}
                                    className={`text-[13px] p-1 bg-gray-400 text-white rounded-md`}
                                >
                                    {result.link}
                                </a>

                                {/* Clickable link text */}
                                <a href="">
                                    <h2 className='group-hover:underline text-xl'>{result?.title}</h2>
                                </a>

                                {/*  */}
                                <p className='line-clamp-3 text-[15px] mt-2'>{result?.snippet}</p>
                            </div>
                        </animated.div>
                    ))}
                </div>

                {/* GPT Chat Part */}
                <div className='flex justify-center'>
                    <AIChat />
                </div>

            </div>


            <PaginationButtons />
        </div>
    );
};

export default SearchResults;
