import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './work.css';


function WeWork() {

    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({

        })
    }, [])
    return (
        <div className='mt-4 my-4 mx-auto w-full'>
            <section className='md:py-8 py-16'
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
            >
                <p className='md:max-w-[90%] w-full md:line-clamp-3 m-auto text-justify md:text-center'>For 20 years, <span className='text-orange-400 font-bold'>Prabisvg Samaj Kalyan Evum Shikshan Sanstha</span> has been working across the length and breadth of the countpartnering with state governments and institutions to
                    strengthen systems and fulfil the basic needs of the marginalised people residing in these territories. The map below gives an insight into the
                    states where we worked on different projects and programmes in the financial year 2021-22.

                </p>
            </section>
            <div className='flex md:flex-row flex-col w-full justify-around gap-0 items-center'>
                {/* <section data-aos="flip-up">
                    <img src="https://i.pinimg.com/564x/45/01/e4/4501e4fd95b84792703c701a54db5beb.jpg" alt="India Map" className='object-cover' />
                </section> */}
                <div className="image-container">
                    <img src="https://i.pinimg.com/564x/45/01/e4/4501e4fd95b84792703c701a54db5beb.jpg" alt="India Map" className="image" />
                    <div className="overlay">
                        <div className="text">India Map</div>
                    </div>
                </div>
                {/* <section className='w-[55%] grid grid-cols-2'>
                    <div>
                        
                        <img src={help1} alt="" className='max-w-lg h-[20rem] w-[22rem]  p-2' />
                        <img src={help5} alt="" className='max-w-lg h-[20rem] w-[22rem]  p-2' />
                    </div>
                    <div>
                        <img src={help3} alt="" className='max-w-lg h-[20rem] w-[22rem]  p-2' />
                        <img src={help4} alt="" className='max-w-lg h-[20rem] w-[22rem]  p-2' />
                    </div>
                </section> */}
                <section className='border-2'
                    data-aos="zoom-in-left"
                >
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 font-sans">
                        <div className="container mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-8">Where We Work</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div onClick={() => navigate('/work/health')} className="bg-white rounded-lg shadow-md md:p-6 p-4"
                                    data-aos="fade-left"

                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                >
                                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16  h-16 ">
                                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-300 z-50"> <Link to={'/work/health'}>Health</Link></p>

                                    </div>
                                </div>
                                <div onClick={() => navigate('/work/education')} className="bg-white rounded-lg shadow-md p-6"
                                    data-aos="fade-top"

                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                >
                                    <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
                                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-300 z-50"><Link to={'/work/education'}>Education</Link></p>

                                    </div>
                                </div>
                                <div onClick={() => navigate('/work/livlihood')} className="bg-white rounded-lg shadow-md p-6"
                                    data-aos="fade-right"

                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                >
                                    <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 w-16 h-16">
                                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-300 z-50"><Link to={'/work/livlihood'}>Livlihood</Link> </p>

                                    </div>
                                </div>
                                <div onClick={() => navigate('/work/shield')} className="bg-white rounded-lg shadow-md p-6" data-aos="fade-right">
                                    <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
                                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-gray-800">SHIELD</p>
                                        <p className="text-gray-600 text-sm mt-1"></p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-right">
                                    <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
                                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-gray-800">Others</p>
                                        <p className="text-gray-600 text-sm mt-1"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default WeWork