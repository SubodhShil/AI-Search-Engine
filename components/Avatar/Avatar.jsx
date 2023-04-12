import React from 'react';

const Avatar = ({ url }) => {
    return <img
        loading="lazy"
        src={url}
        alt="Profile picture"
        className='h-10 w-10 rounded-full cursor-pointer hover:animate-pulse hover:delay-1000'
    />;
};

export default Avatar;