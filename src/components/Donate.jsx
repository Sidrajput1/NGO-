import React from 'react'
import './donate.css'
import DonateForm from './DonateForm'
import { useNavigate } from 'react-router-dom'

function Donate() {

    const navigate = useNavigate()
    return (
        <div className='w-full min-h-[150vh]'>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1599461149326-2e9dd1113a02?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='bg-image brightness-100' alt="" />
            </div>
            <div className='bg-text'>
                <div>
                    <h1 className='md:text-[4rem] text-[2rem] font-serif tracking-wider py-8 '>Your Donation  <br /> is Others Inspiration</h1>
                <button className='px-4 py-4 rounded-3xl border-2 bg-white text-black hover:bg-transparent  hover:text-orange-500  transition-all ease-in-out duration-200  '> <a href="#donate-form" className='ease-in-out duration-400 transition-all'> Donate Now</a></button>
                </div>

            </div>
            <div id='donate-box' className='md:w-[90%] w-full px-[15px] z-50 flex md:flex-row flex-col md:justify-between justify-around items-center  mx-auto bg-gradient-to-r from-[#f40f68] to-[#f86e3d] h-36 absolute md:top-[94%]  md:left-16 left-0 '>
                <div>
                    <h2 className='md:text-4xl text-lg text-white font-light font-serif '>Please Help Us <span className='px-4 py-4 rounded-2xl border-[1px] hover:text-orange-500 hover:bg-white cursor-pointer  transition-all ease-in-out duration-300 animate-pulse '>Donate Now</span></h2>
                </div>
                <div>
                    {/* <button className='px-4 py-4 rounded-3xl border-2 bg-transparent text-black hover:bg-black  hover:text-orange-500  transition-all ease-in-out duration-300 cursor-pointer '>Call Us</button> */}
                    <a href="tel:9431442634" className='px-4 py-4 rounded-3xl border-2 bg-transparent text-black hover:bg-black  hover:text-orange-500  transition-all ease-in-out duration-300 cursor-pointer ' > Call Us at 9431442634 </a>
                </div>
            </div>

            <DonateForm/>
        </div>

    )
}

export default Donate