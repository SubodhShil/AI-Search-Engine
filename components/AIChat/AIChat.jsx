import React, { useState } from 'react';

// Icon imports
import { GrSend } from 'react-icons/gr';

// CSS import
import Style from './AIChat.module.css';

// External library imports
import { useSpring, animated } from 'react-spring';

// OpenAI API imports
import { Configuration, OpenAIApi } from "openai";

// const API_KEY = "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";

const AIChat = () => {
    const [image, setImage] = useState("");

    // styles object for animation
    const styles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    });

    return (
        <animated.div style={styles} className={`ml-3 border-cyan-200 border backdrop-blur-sm col-span-1 rounded-lg p-3 flex flex-col text-white h-fit mt-3 max-sm:mb-5 shadow-lg shadow-cyan-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black w-[85%] max-sm:w-[95%] max-sm:mr-4`}>
            <div>
                <div className='flex flex-col'>

                    <div className='flex items-center'>
                        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/mjmrmyzg.json"
                            trigger="loop"
                            style={{ width: '75px', height: '75px' }}
                            loop>
                        </lord-icon>
                        <h1 className='text-xl border-b-4 border-cyan-400'>Chat With The AI</h1>
                    </div>
                </div>

                {/* User question  part */}
                <div id='userChatDiv' className={`flex justify-end w-full ${Style.chatDiv}`}>
                    <div className={`w-[75%] p-2 mb-2 rounded-md bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 backdrop-blur-sm bg-white/30`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, natus.
                    </div>
                </div>



                {/* Text result prompts */}
                <div className='p-2 rounded-lg text-gray-50 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 '>
                    <div className='flex items-center rounded-md mb-2 w-fit bg-gray-500 shadow-xl shadow-cyan-100 cursor-pointer'>

                        <lord-icon
                            src="https://cdn.lordicon.com/ggqtvqxi.json"
                            trigger="loop"
                            colors="primary:#FFFFFF,secondary:#FFFFFF"
                            style={{ width: '40px', height: '40px' }}
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

                    <button className='text-white rounded-xl bg-cyan-200 shadow-lg shadow-cyan-600/100 h-10 w-10 mt-3 cursor-pointer flex justify-center items-center transition duration-100 ease-in-out hover:bg-cyan-400 hover:scale-110'>
                        {/* Button content */}
                        <GrSend className='text-2xl w-full' color='white' />
                    </button>
                </div>
            </div>
        </animated.div>
    );
};

export default AIChat;