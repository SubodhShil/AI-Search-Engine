import Header from '@/components/Header/Header';
import News from '@/components/News/News';
import React, { useState } from 'react';


const index = () => {
  const [isSearching, setSearching] = useState(false);

  return (
    <div className='pb-5'>
      {/* Main header component */}
      <Header setSearching={setSearching} isSearching={isSearching} />
      <News />
    </div>
  );
};

export default index;