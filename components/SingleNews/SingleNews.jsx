import React from 'react';

const SingleNews = ({ article }) => {
    const textContent = article.description;

    return (
        <div className='border border-black p-3 w-[350px]'>
            <h2 className='font-bold'>{article.title}</h2>
            <img src={article.urlToImage} alt="" height='400px' width='400px' />
            <p>
                {textContent}
            </p>

        </div>
    );
};

export default SingleNews;