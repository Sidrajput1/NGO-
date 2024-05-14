import React from 'react'

import 'react-slideshow-image/dist/styles.css';
import homepic from '/Users/apple/Desktop/Shimmer Group/Ngo/src/assets/pics/homepic.jpg'
import gallery7 from '../../assets/pics/gallery/gallery7.jpg'
import gallery6 from '../../assets/pics/gallery/gallery6.jpg'
import gallery8 from '../../assets/pics/gallery/gallery8.jpg'
import WeWork from './WeWork'
import YojnaCard from './YojnaCard'
import SlideGalary from './SlideGalary'
import Member from './Member'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()

    return (
        <div>
            <div className='w-full p-0 min-h-[115vh]'>
                <div className='w-full  ' >
                    <img src={homepic} alt="NGO Image" className='w-full object-cover ' />
                    
                </div>




                <div className='w-full min-h-[110vh]'>
                    <div className='m-auto w-full h-72 flex justify-center items-center gap-10 flex-col'>
                        <h1 className='md:text-6xl  text-4xl font-bold text-center'>About the Prabisvg Samaj Kalyan</h1>
                        <p className='md:text-xl text-sm font-semibold  text-center line-clamp-3 max-w-xl '>We are a young-blooded organization filled with immense passion
                            and a belief that everything is possible with the right amount of determination!</p>
                    </div>
                    <div className='flex md:flex-row flex-col justify-around items-center md:mt-0 mt-10 md:gap-0 gap-3'>
                        <div
                            className="bg-[orangered] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
                            <img src={gallery7} className="w-full" />
                            <div className="px-4 py-6">
                                <h3 className="text-white text-xl font-bold">Work During the Pandemic</h3>
                                <p className="mt-4 text-xl text-black">
                                    Charity brings to life again those who ,
                                    are spiritually dead. ...
                                </p>
                                <button type="button" onClick={() => navigate('/about')}
                                    className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
                            </div>
                        </div>
                        <div
                            className="bg-[orangered] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
                            <img src={gallery6} className="w-full h-64" />
                            <div className="px-4 py-6">
                                <h3 className="text-white text-xl font-bold">Serving the Masses</h3>
                                <p className="mt-4 text-xl text-black">Providing access to
                                    healthcare, education, work, and
                                    technological advancements to people
                                    across the country.
                                </p>
                                <button type="button" onClick={() => navigate('/vaasta/yojna')}
                                    className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
                            </div>
                        </div>
                        <div
                            className="bg-[orangered] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
                            <img src={gallery8} className="w-full h-72" />
                            <div className="px-4 py-6">
                                <h3 className="text-white text-xl font-bold">Raise Awareness</h3>
                                <p className="mt-4 text-xl text-black">We are constantly taking measures to raise
                                    awareness and provide care for those in need.
                                </p>
                                <button type="button" onClick={() => navigate('/vaasta')}
                                    className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <WeWork className='' />
            <SlideGalary />
            <YojnaCard />
            <Member />
        </div>
    )
}

export default Home