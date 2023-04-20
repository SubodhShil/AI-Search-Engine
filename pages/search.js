import React from 'react';
import Head from 'next/head';
import SearchPageHeader from '@/components/SearchPageHeader/SearchPageHeader';

const Search = () => {
    return (
        <div>

            <Head>
                <title> Search Page </title>
                <link rel="icon" href="" />
            </Head>

            {/* Search result top header section */}
            <SearchPageHeader />

            <h1>Welcome to the routing page</h1>
        </div>
    );
};

export default Search;