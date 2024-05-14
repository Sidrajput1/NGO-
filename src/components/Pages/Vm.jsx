import React from 'react'
import vision2 from '../../assets/pics/vision2.jpg'
import misson from '../../assets/pics/misson.jpg' 

function Vm() {
    return (
        <div className='w-full p-0 h-auto'>
            <div className='w-full'>
                <img src={vision2} alt="NGO Image" className='w-full object-contain ' />
            </div>

            <div id='vm'
                style={{ background: `$black` }}
                className='h-32 w-[90%] text-center m-auto mt-4 bg-gray-300 '
            >
                <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>Vision & Misson</h1>

            </div>

            <div className=' w-full flex flex-row justify-around h-[70vh] items-center '>
                <section className=''>
                    <h1 className='text-5xl text-orange-500 font-semibold py-5 px-5 underline'>Our Vision</h1>
                    <p className='max-w-4xl  line-clamp-6  text-xl py-5 px-5'>
                        We envision building a healthy, happy and progressive
                        society where every citizen can get educated and live
                        with dignity and get equal opportunities in this society and country.
                    </p>

                </section>
                <section className='m-auto'>
                    <img className='w-[80vh]' src={misson} alt="visson and misson" />

                </section>
                <section>
                    <h2 className='text-5xl text-orange-600 font-semibold py-5 px-5 underline-offset-2'>Our Misson</h2>
                    <p className='max-w-4xl line-clamp-6  text-xl py-5  px-5'>
                        Our organization is committed to empowering
                        the society so that citizens can realize their full
                        potential to live a happy and healthy life with di
                        gnity and contribute positively to the society and country.
                    </p>
                </section>
            </div>


        </div>
    )
}

export default Vm