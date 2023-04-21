import React from 'react';
import Style from './SearchResults.module.css';

const SearchResults = ({ results }) => {
    return (
        <div className='overflow-hidden'>

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
            <div className='mt-4 grid max-sm:grid-cols-1 grid-cols-3 items-center p-2'>
                {results.items.map((result) => (
                    <div className='border m-2 col-span-2' key={result.link}>
                        <a
                            href={result.link}
                            className=''
                        >
                            {result.htmlFormattedUrl}
                        </a>
                    </div>

                ))}

                {/* GPT Chat Part */}

                <div className='col-span-1 bg-[#191825] rounded-lg  p-2 flex items-center text-white'>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/mjmrmyzg.json"
                        trigger="loop"
                        style={{ width: '75px', height: '75px' }}
                        loop>
                    </lord-icon>
                    <h1>Chat With The AI</h1>
                </div>
            </div>

        </div>
    );
};

export default SearchResults;
