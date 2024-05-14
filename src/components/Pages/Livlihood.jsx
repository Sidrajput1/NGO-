import React from 'react'
import life from '../../assets/pics/life.webp'

function Livlihood() {
    return (
        <div>

            <div className='w-full'>
                <img src={life} alt="NGO Image" className='w-full h-[70vh]  object-cover scale-[1] ' />
            </div>
            <div id='livlihood'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto mt-4 bg-gray-300 '
            >
                <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>DEVELOPMENT FOR LIVELIHOOD</h1>


            </div>

            <div className=' w-full flex md:flex-row flex-col justify-around items-center md:h-[60vh] h-auto'>
                <section className='md:w-[50%] w-full md:m-0 mt-36'>
                    <h2 className='md:text-4xl text-2xl font-bold font-mono italic md:max-w-xl md:line-clamp-3 md:text-center text-justify text-orange-400'>Building safe and resilient livelihoods
                        for marginalised women</h2>
                </section>
                <section className='md:w-[50%] w-full'>
                    <p className='text-xl  text-justify pr-5 font-light max-w-[40rem] line-clamp-9'>
                        <span className='text-2xl font-bold italic text-orange-500'>Livelihood</span> mandate works with the women engaged in smallholder
                        agriculture, small businesses or employed as farm or non-farm labour.
                        Implementing a range of innovative rural livelihood initiatives, we help
                        women build secure and resilient livelihoods and climb out of poverty
                        permanently. The key approaches adopted in rural livelihood sector initi
                        atives include capability enhancement, asset building, collectivisation,
                        inclusive value chain development, and engagement of men and other
                        influential actors. As a women’s organisation in India, we advocate the impor
                        tance of women’s education and sustainable development in our livelihood initiatives.
                    </p>

                </section>
            </div>

        </div>
    )
}

export default Livlihood