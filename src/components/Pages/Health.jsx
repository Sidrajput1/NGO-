import React from 'react'
import health from '../../assets/pics/health.webp'
import Intro from '../Intro'

function Health() {
    return (
        <div className='w-full min-h-[150vh]'>

            {/* <div className='w-full '>
                <img src={health} alt="NGO Education Image" className='w-full  object-cover rounded-b-3xl scale-[1] brightness-150 ' />
            </div> */}
            <Intro
                heading='Healthy'
                image={health}
                breadcrumbItems={[
                    {label:'Home',href:'/'},
                    {label:'Health',href:'/health'},
                    {label:'Contact Us',href:'/contact'}
                  ]}
            />
            <div id='health'
                style={{ background: `$black` }}
                className='h-28 w-[90%] text-center m-auto mt-4 bg-gray-300 '
            >
                <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>Healthy</h1>


            </div>

        </div>
    )
}

export default Health