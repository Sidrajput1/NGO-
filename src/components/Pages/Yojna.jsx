import React from 'react'
import yozna from '../../assets/pics/yozna.jpg'
import YojnaCard from './YojnaCard'
import Intro from '../Intro'

function Yojna() {
  return (
    <div className='w-full'>
      {/* <div className='w-full'>
        <img src={yozna} alt="NGO Image" className='w-full object-contain ' />
      </div> */}
      <Intro
                heading='Hamari Yozna'
                image={yozna}
                breadcrumbItems={[
                    {label:'Home',href:'/'},
                    {label:'Yojna',href:'/vaasta/yojna'},
                    {label:'Contact Us',href:'/contact'}
                  ]}
            />
      {/* <div id='vaasta'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto py-4   '
            >
                <h1 className='text-6xl text-center py-9 font-semibold bg-orange-300 rounded-b-full tracking-wider '>Hamari Yojna</h1>


            </div> */}
      <div className='text-center py-8 relative'>
        <img className='relative m-auto text-center h-[30rem] md:w-full w-[100%] contrast-100' src="https://c4.wallpaperflare.com/wallpaper/329/167/639/flowers-background-roses-eustoma-wallpaper-preview.jpg" alt="" />
        {/* <h1 id='yojna' className='text-orange-400 bg-blend-overlay absolute top-14 md:top-20  left-[35rem] text-pretty font-serif font-light underline brightness-50 text-6xl py-1 pb-2'>Hamari Yojna</h1> */}
        <h1 id='yojna' className='text-orange-400 bg-blend-overlay absolute top-16 md:top-20 left-0 right-0 md:left-[32rem] md:right-auto text-pretty font-serif font-light underline md:text-6xl text-4xl py-1 pb-2'>Hamari Yojna</h1>
        {/* <h2 id='yojnalist' className='text-5xl   font-semibold text-orange-400 tracking-wider bg-blend-overlay absolute top-44 left-44 z-50'
                
              >
                    हमारे सदस्यों को निम्न योजनाओ के द्वारा मदद मिलेगा :-
              </h2> */}
        <h2 id='yojnalist' className='text-4xl md:text-5xl font-semibold text-orange-400 tracking-wider bg-blend-overlay absolute top-36 md:top-56 left-0 right-0 md:left-44 md:right-auto z-50'>
          हमारे सदस्यों को निम्न योजनाओ के द्वारा मदद मिलेगा :-
        </h2>
      </div>

      <YojnaCard />
    </div>
  )
}

export default Yojna