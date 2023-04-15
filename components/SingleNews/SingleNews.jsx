import React from 'react';

const SingleNews = ({ article }) => {
    const textContent = article.description;

    return (
        <div className='rounded-xl border-black p-5 w-[400px] bg-[#191825] text-white'>
            <h2 className='font-bold text-2xl mb-2'>{article.title}</h2>
            <img src={article.urlToImage} alt="" height='400px' width='400px' />
            <p className='mt-3'>
                {textContent}
            </p>

        </div>
    );
};

export default SingleNews;