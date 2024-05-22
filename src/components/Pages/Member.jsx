import React from 'react'
import family from '../../assets/pics/family.jpg'
function Member() {
    return (
        <div className='w-full min-h-[100vh] bg-stone-300'>
           
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 top-24 h-[70vh]">
                <img src={family} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[300px] relative z-10 h-full max-w-6xl mx-auto md:bottom-32 bottom-32 flex flex-col justify-center items-center text-center text-white p-16 ">
                    <h2 className="sm:text-4xl text-orange-500 font-mono md:text-2xl text-xl font-bold md:mb-6 mb-0">Join With us</h2>
                    <p className="text-xl z-20 text-center text-gray-200 drop-shadow-2xl tracking-wider ">Register A Yojna Card</p>
                    <a href="https://vaasta.org/" target='_blank'
                        className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
                       Join
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Member