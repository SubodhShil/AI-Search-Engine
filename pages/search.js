import React from 'react';
import Head from 'next/head';
import SearchPageHeader from '@/components/SearchPageHeader/SearchPageHeader';
import { API_Key, CONTEXT_KEY } from '@/keys';
import Response from '@/Response';
import { useRouter } from 'next/router';
import SearchResults from '@/components/SearchResults/SearchResults';

const Search = ({ results }) => {
    const router = useRouter();
    console.log(results);

    return (
        <div className='pl-5'>

            <Head>
                <title> {router.query.term} - Search Result </title>
                <link rel="icon" href="" />
            </Head>

            {/* Search result top header section */}
            <SearchPageHeader />

            {/* Search results fetched from google search api */}
            <SearchResults results={results} />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = 1;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response
        : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_Key}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        ).then(res => res.json());

    /// After the server has rendered pass the results to the clients
    return {
        props: {
            results: data,
        }
    }

}