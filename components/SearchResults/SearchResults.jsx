import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div className='flex items-center'>
            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <a href="https://lordicon.com/"></a>
            <lord-icon
                src="https://cdn.lordicon.com/dfxesbyu.json"
                trigger="loop"
                style={{ width: '50px', height: '50px' }}
                loop>
            </lord-icon>
            <h1 className='font-[500] w-fit p-1'>Showing you {results?.searchInformation?.formattedTotalResults} results</h1>
        </div>
    );
};

export default SearchResults;
