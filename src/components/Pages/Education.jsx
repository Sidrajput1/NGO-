import React from 'react'
import edu from '../../assets/pics/edu.jpg'
import education from '../../assets/pics/education.jpg';

function Education() {
  return (
    // <div className='w-full min-h-[180vh]'>
    //   <div className='w-full bg-gradient-to-b  from-cyan-500 to-blue-400'>
    //     <img src={edu} alt="NGO Education Image" className='w-full object-cover rounded-b-full ' />
    //   </div>
    //   <div id='about'
    //     style={{ background: `$black` }}
    //     className='h-28 w-[90%] text-center m-auto mt-4 bg-gray-300 '
    //   >
    //     <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>Education</h1>


    //   </div>

    //   <div className=' w-full h-[70vh] flex flex-row  gap-0 items-center '>
    //     <section className='w-[50%]'>
    //       <img className='w-[90%] object-contain py-4 px-6 float-right hover:-rotate-12 transition-all ease-in-out duration-200 ' src={education} alt="education" />


    //     </section>
    //     <section className='w-[50%] '>
    //       <p className='py-5 text-xl max-w-[40rem] text-justify font-light line-clamp-8 float-left z-10  '>
    //         <span className='font-bold text-orange-500 text-2xl'>Our organization</span> has been conducting school, computer education etc. in the field of education for
    //         the last many years. At the same time, the organization established a center at the Panchayat level in
    //         the districts of Bihar and Jharkhand from the year 2014 and started its project to provide information
    //         on financial inclusion, public utility services, micro insurance, skill development and employment. By
    //         making people aware about cottage industry, people were motivated to set up cottage industries. To im
    //         part training on mushroom production in the field of agriculture and make people aware of its benefits,
    //         so that rural areas of our state can be developed.
    //       </p>
    //     </section>

    //   </div>


    // </div>
    <div className='w-full min-h-[180vh]'>
      <div className='w-full bg-gradient-to-b from-cyan-500 to-blue-400'>
        <img src={edu} alt="NGO Education Image" className='w-full object-cover rounded-b-full ' />
      </div>
      <div id='about' style={{ background: `$black` }} className='h-28 w-[90%] text-center m-auto mt-4 bg-gray-300'>
        <h1 className='text-6xl text-center py-8 font-semibold bg-orange-300'>Education</h1>
      </div>
      <div className='w-full flex md:flex-row flex-col md:h-[70vh] h-auto  items-center'>
        <section className='w-full md:w-[50%]'>
          <img className='w-full md:w-[90%] object-contain py-4 px-6 float-right hover:-rotate-12 transition-all ease-in-out duration-200' src={education} alt="education" />
        </section>
        <section className='w-full md:w-[50%] px-4'>
          <p className='py-5 text-xl md:text-base max-w-[40rem] text-justify font-light line-clamp-8'>
            <span className='font-bold text-orange-500 text-2xl'>Our organization</span> has been conducting school, computer education etc. in the field of education for
            the last many years. At the same time, the organization established a center at the Panchayat level in
            the districts of Bihar and Jharkhand from the year 2014 and started its project to provide information
            on financial inclusion, public utility services, micro insurance, skill development and employment. By
            making people aware about cottage industry, people were motivated to set up cottage industries. To impart
            training on mushroom production in the field of agriculture and make people aware of its benefits,
            so that rural areas of our state can be developed.
          </p>
        </section>
      </div>
    </div>

  )
}

export default Education