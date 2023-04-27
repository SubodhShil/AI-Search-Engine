import React from 'react';
import Style from './SingleNews.module.css';

const SingleNews = ({ article }) => {
    const textContent = article.description;

    return (
        <div className={`rounded-lg border-black p-5 w-[400px] max-sm:w-[85%] bg-[#191825] text-white justify-center ${Style.newsCard}`}>
            <div>
                <a className='font-bold block text-2xl mb-4 p-1 cursor-pointer border-b-4 border-gray-500 hover:border-blue-500 text-justify transition duration-500 ease-in-out'>{article.title}</a>
            </div>
            <div className='flex justify-center'>
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