import { useRouter } from 'next/router';
import React from 'react';

const SearchPageHeader = () => {
    const router = useRouter();

    return (
        <header>
            <h1
                onClick={() => router.push("/")}
                className=" mb-4 text-transparent font-extrabold text-2xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer">GPT Search</h1>
        </header>
    );
};

export default SearchPageHeader;