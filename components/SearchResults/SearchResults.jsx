import React from 'react';
import Style from './SearchResults.module.css';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

import AIChat from '../AIChat/AIChat';

const SearchResults = ({ results }) => {
    return (
        <div className=' p-2'>

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
            <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 p-3 gap-4 justify-center'>

                <div className='col-span-2 p-1 flex flex-col'>
                    {results.items.map((result) => (
                        <div className='border rounded-md p-3 m-2 bg-[ghostwhite] group pt-3' key={result.link}>

                            {/* URL */}
                            <a
                                href={result.link}
                                className={`text-[13px] p-1 bg-gray-400 text-white rounded-md`}
                            >
                                {result.link}
                            </a>

                            {/* Clickable link text */}
                            <a href="">
                                <h2 className='text-blue-400 group-hover:underline text-xl'>{result?.title}</h2>
                            </a>

                            {/*  */}
                            <p className='line-clamp-3 text-[15px] mt-2'>{result?.snippet}</p>
                        </div>

                    ))}
                </div>

                {/* GPT Chat Part */}
                <AIChat />

            </div>


            <PaginationButtons />
        </div>
    );
};

export default SearchResults;
