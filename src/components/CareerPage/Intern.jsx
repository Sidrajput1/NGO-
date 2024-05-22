import React from 'react'
import intern from '../../assets/pics/intern.png'
import Faq from './Faq'

function Intern() {
  return (
    <div className='py-0 min-h-[150vh]'>
         <div className="relative h-[50vh] bg-gray-900 overflow-hidden ">
                {/* Background Image */}
                <img
                    className="absolute inset-0 h-full w-full object-fill"
                    src={intern}
                    alt="School Building"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r  from-black to-transparent   opacity-75"></div>
                <div className="relative z-10 p-10 lg:p-10 text-white">
                    <div className="text-center md:p-[7rem] pt-[10rem]">
                        <h2  className="text-2xl lg:text-5xl  z-50 font-extrabold tracking-wide mb-4">
                            Intern With US
                        </h2>
                        <p  className="text-lg lg:text-2xl mb-6">
                            Managed By: PRABSIVG SAMAJ KALYAN EVUM SHIKSHAN SANSTHA
                        </p>
                        {/* <p className="text-lg lg:text-xl">
                            Discover our commitment to excellence in education and community
                            engagement.
                        </p> */}
                    </div>

                </div>

            </div>
            <Faq/>
    </div>
  )
}

export default Intern