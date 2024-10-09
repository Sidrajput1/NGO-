import React from 'react'
import './event.css';

function Event() {
  return (
    <div className='w-full min-h-[100vh]'>
         <div className=''>
                <img src="https://img.freepik.com/free-photo/medium-shot-people-celebrating-eid-al-fitr_23-2151205085.jpg?t=st=1719208507~exp=1719212107~hmac=c5cffceab929cb1a5fdc7b075d1506578709c8d4a5470590b36512a933cf21d0&w=900" className='bg-image2 brightness-100' alt="" />
            </div>
            <div className='bg-event'>
                <div>
                    <h1 className='md:text-[3rem] text-[2rem] font-serif tracking-wider py-8 '>Our NGO <br /> EVENTS AND ACTIVITIES </h1>
                <button className='px-4 py-4 rounded-3xl border-2 bg-white text-black hover:bg-transparent  hover:text-orange-500  transition-all ease-in-out duration-200  '> <a href="#donate-form" className='ease-in-out duration-400 transition-all'> Donate Now</a></button>
                </div>

            </div>
    </div>
  )
}

export default Event