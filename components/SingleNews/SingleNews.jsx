import React from 'react';
import Style from './SingleNews.module.css';

const SingleNews = ({ article }) => {
    const textContent = article.description;

    return (
        <div className={`rounded-lg border-black p-5 w-[400px] max-sm:w-[85%] bg-[#191825] text-white justify-center`}>
            <div>
                <h2 className='font-bold text-2xl mb-2'>{article.title}</h2>
            </div>
            <div className=''>
                <img src={article.urlToImage} alt="" height='400px' width='400px' className='rounded-md' />
            </div>
            <div>
                <p className='mt-3'>
                    {textContent}
                </p>
            </div>

        </div>
    );
};

export default SingleNews;