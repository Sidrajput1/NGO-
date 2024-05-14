import React from 'react'
import where2 from '../../assets/pics/where2.jpg'
import WeWork from './WeWork'

function Work() {
    return (
        <div className='w-full min-h-[150vh]'>
            <div className='w-full ' >
                <img src={where2} alt="Where We Work " className='w-full md:h-[70vh] h-full object-cover ' />
            </div>
            <div id='vaasta'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto py-4   '
            >
                <h1 className='md:text-6xl text-4xl text-center py-9 font-semibold bg-orange-300 rounded-b-full tracking-wider '>Where We Work</h1>


            </div>
            <WeWork/>
        </div>
    )
}

export default Work