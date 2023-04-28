import React from 'react';
import Style from './SearchResults.module.css';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import { GrSend } from 'react-icons/gr';

const SearchResults = ({ results }) => {
    return (
        <div className=' p-2'>

            {/* Result count header part */}
            <div className='flex items-center'>

                <div className='mr-4'>
                    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/dfxesbyu.json"
                        trigger="loop"
                        style={{ width: '50px', height: '50px' }}
                        loop>
                    </lord-icon>
                </div>
                <h1 className={`font-[500] w-fit p-1 ${Style.highlight}`}>
                    Showing you {results?.searchInformation?.formattedTotalResults} results
                </h1>
            </div>

            {/* Showing the result in the page */}
            <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 p-3 gap-4 justify-center'>

                <div className='col-span-2 p-1 flex flex-col'>
                    {results.items.map((result) => (
                        <div className='border rounded-md p-3 m-2 bg-[ghostwhite] group pt-3' key={result.link}>

                            {/* URL */}
                            <a
                                href={result.link}
                                className={`text-[13px] p-1 bg-gray-400 text-white rounded-md`}
                            >
                                {result.link}
                            </a>

                            {/* Clickable link text */}
                            <a href="">
                                <h2 className='text-blue-400 group-hover:underline text-xl'>{result?.title}</h2>
                            </a>

                            {/*  */}
                            <p className='line-clamp-3 text-[15px] mt-2'>{result?.snippet}</p>
                        </div>

                    ))}
                </div>

                {/* GPT Chat Part */}

                <div className='border-cyan-200 border backdrop-blur-sm col-span-1 rounded-lg p-3 flex flex-col text-white h-fit mt-3 max-sm:mb-5 shadow-lg shadow-cyan-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
                    <div className='flex flex-col'>

                        <div className='flex items-center'>
                            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon
                                src="https://cdn.lordicon.com/mjmrmyzg.json"
                                trigger="loop"
                                style={{ width: '75px', height: '75px' }}
                                loop>
                            </lord-icon>
                            <h1 className='text-xl'>Chat With The AI</h1>
                        </div>


                    </div>

                    {/* Text result prompts */}
                    <div className='p-2 rounded-lg text-black bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200  '>
                        <div className='flex items-center rounded-full w-fit bg-green-50 cursor-pointer'>

                            <lord-icon
                                src="https://cdn.lordicon.com/ggqtvqxi.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#121212"
                                style={{ width: '50px', height: '50px' }}
                                loop>
                            </lord-icon>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab, facilis magnam iure cum ducimus sed omnis quaerat eligendi eos officia explicabo deleniti fugiat qui esse nemo fuga quae, numquam repudiandae accusamus consequatur animi sapiente? Officia, facere necessitatibus ut distinctio perspiciatis nemo, dolores ipsam dolore, aut unde iure animi enim natus. Temporibus nisi omnis ducimus tempora excepturi eos quis quos magnam nihil, incidunt suscipit architecto iure quia consequatur, voluptates, eum vitae nobis voluptas hic repudiandae ex? Dolores, ullam harum! Saepe minima ipsa et. Delectus laboriosam numquam velit obcaecati harum molestias dolore. Sed quis, voluptas ipsum architecto distinctio magni a nulla.
                        </p>
                    </div>

                    {/* search bar */}
                    <div className='flex items-center justify-between h-full p-1 text-black'>
                        <div className='border-2 border-cyan-400 rounded-md mt-4 max-sm:w-[80%] w-[85%]'>
                            <input type="text" className='bg-inherit w-full pl-2 p-1 text-white' placeholder='Type your prompt' />
                        </div>

                        <div className='text-white rounded-xl bg-cyan-400 shadow-lg shadow-cyan-600/100 h-10 w-10 mt-3 cursor-pointer flex justify-center items-center'>
                            <GrSend className='text-2xl w-full' color='white' />
                        </div>
                    </div>
                </div>
            </div>


            <PaginationButtons />
        </div>
    );
};

export default SearchResults;
