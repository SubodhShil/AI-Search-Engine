import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

// Components imports
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    {/* API definition */ }
    {/* https://newsapi.org/v2/everything?q={term}&apiKey=c5bf0d11d8a84bb5931e0d6cbc8ecbad */ }

    const URL = "https://newsapi.org/v2/everything?q=tech&apiKey=c5bf0d11d8a84bb5931e0d6cbc8ecbad";

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                setIsLoading(false);
            });
    }, []);

    console.log(articles);

    return (
        <div>
            <div className='flex max-sm:justify-center'>
                <h1 className='text-3xl font-[500] mt-5 ml-5 max-sm:text-center bg-orange-500 p-2 rounded-lg shadow-lg shadow-orange-500/60 w-fit text-white'>Current Affairs</h1>

            </div>
            {isLoading ? (
                <div className='flex justify-center items-center mt-10'>
                    <ClipLoader
                        color="#ff9f1c"
                        size={50}
                    />
                </div>
            ) : (
                <div className='ml-2 flex flex-row gap-6 flex-wrap justify-center mt-5'>
                    {
                        articles.map(article => <SingleNews article={article} />)
                    }
                </div>
            )}
        </div>
    );
};

export default News;
