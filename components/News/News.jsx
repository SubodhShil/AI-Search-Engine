import React, { useEffect, useState } from 'react';

// Components imports
import Loading from '../Loading/Loading';
import SingleNews from '../SingleNews/SingleNews';

// 3rd party library imports

const News = () => {
    const [articles, setArticles] = useState([]);

    {/* API definition */ }
    {/* https://newsapi.org/v2/everything?q={term}&apiKey=c5bf0d11d8a84bb5931e0d6cbc8ecbad */ }

    const URL = "https://newsapi.org/v2/everything?q=tech&apiKey=c5bf0d11d8a84bb5931e0d6cbc8ecbad";

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, []);

    console.log(articles);

    return (
        <div>
            <h1 className='text-3xl font-[500] mt-5 ml-5 text-center'>Current Affairs</h1>
            <div className='ml-2 flex flex-row gap-6 flex-wrap justify-center mt-5'>
                {
                    articles.map(article => <SingleNews article={article} />)
                }
            </div>

        </div>
    );
};

export default News;