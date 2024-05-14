import React from 'react'
import aboutUs from '/Users/apple/Desktop/Shimmer Group/Ngo/src/assets/pics/aboutUs.jpg'
import aboutUs2 from '../../assets/pics/aboutUs2.jpg'

function About() {
  return (
    <div className='w-full p-0 h-auto'>
      <div className='w-full'>
        <img src={aboutUs} alt="NGO Image" className='w-full object-contain ' />
      </div>
      <div id='about'
        style={{ background: `$black` }}
        className='h-32 md:w-[90%] w-[100%] text-center m-auto mt-4 bg-gray-300 '
      >
        <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>About Us</h1>


      </div>

      <div className='w-full  '>
        <div className='w-full flex flex-col md:flex-row justify-around items-center md:h-[65vh] h-auto'>
          <div className='w-full md:w-[50%]  flex justify-center'>
            <h2 className='md:text-6xl text-4xl max-w-2xl line-clamp-7 font-semibold  px-10 text-center md:text-left'>Empowered women and girls can lift
              their entire families and communities
              out of <span className=' bg-orange-500 mt-2'>Poverty.</span></h2>
          </div>
          <div className='w-full md:w-[50%]  flex justify-center items-center md:mt-0  mt-3'>
            <p className='text-lg md:text-xl max-w-xl line-clamp-10 md:text-left text-center '>
              Prabisvg Samaj Kalyan Evum Shikshan
              Sanstha is an organization that tries to
              empower the society. Our organization
              aims to ensure empowerment of women
              and girls through its extensive network, as
              well as transform their lives in terms of
              education, health, skills, employment and
              sustainable livelihoods by focusing on
              issues related to children and youth .
            </p>

          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-around w-full min-h-auto md:min-h-[70vh]'>
          <section className='md:w-[40%] w-full flex justify-center '>
            <h3 className='md:text-4xl text-3xl font-serif  text-center md:text-left m-auto md:mb-[18rem] mb-[3rem] md:pr-0 pr-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-600 font-bold transform translate-x-10 opacity-100  px-4 animate-pulse'>Society can be empowered only
              by empowering women and girls.</h3>
          </section>
          <section className='md:w-[50%] w-full'>
            <img className='object-cover md:w-[90%] w-full hover:rotate-12 transition-all ease-in-out' src={aboutUs2} alt="about2" />

          </section>
        </div>
      </div>
    </div>
  )
}

export default About