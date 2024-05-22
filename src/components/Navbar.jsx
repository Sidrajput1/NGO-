import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import navBar from './Pages/navbar'
import navlogo from '/Users/apple/Desktop/Shimmer Group/Ngo/src/assets/pics/ navlogo.jpg';
import './vasta.css'

const Navbar = () => {

    // const [isDropdownOpen,setIsDropdownOpen] = useState(false)

    // const closeDropDown = () => {
    //         setIsDropdownOpen(false)
    // }
    const navigate = useNavigate()

    useEffect(() => {
        navBar();
    }, [])
    return (
        <header className='flex  bg-[#B97200] font-sans min-h-[70px] tracking-wide relative z-50'>
            <div>
                <button onClick={() => navigate('/donate')} className='bg-pink-500  fixed md:top-0 md:right-1 right-1 border-2 border-dotted font-semibold rounded-3xl md:px-4 px-3 md:py-2 z-[2000] cursor-pointer text-white md:text-2xl text-lg hover:bg-yellow-600 transition-all ease-in-out duration-300 animate-pulse '><Link to={'/donate'}>Donate</Link> <span className='font-bold md:text-3xl text-xl animate-pulse'>{'\u{1F9E1}'}</span></button>
            </div>
            <div className='flex flex-wrap items-center justify-around px-6 py-3 gap-4 w-full'>
                <a href="#"><img src={navlogo} alt="logo" className=' h-20 w-24  rounded-2xl  ' />
                </a>
                <div className=' top-[2rem]'>
                    <strong id='prabisvg' className='md:text-3xl text-orange-800 brightness-200   text-xl z-50  '>PRABISVG</strong>
                    <br />
                    <p id='kalyan' className='md:px-1 px-1  py-0 md:text-lg text-2xl text-[#00BDF1] font-extrabold '>SAMAJ KALYAN</p>

                </div>

                <div id="collapseMenu"
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-1 right-[7.5rem] z-[200] rounded-full bg-gray-200 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className=' lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-[floralwhite] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <a href="#"><img src={navlogo} alt="logo" className='w-24 py-4 px-3 rounded-3xl brightness-150 contrast-150' />
                            </a>
                        </li>
                        <li id='submenu' className='max-lg:border-b max-lg:py-3'><Link to={'/'}
                            className='hover:text-blue-600 md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  block'>Home</Link></li>
                        <li className='group max-lg:border-b max-lg:py-3 relative'>
                            <a href='#'
                                className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  lg:hover:fill-[#007bff] block'>Who We Are<svg
                                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16" data-original="#000000" />
                                </svg>
                            </a>
                            <ul

                                className='absolute shadow-xl md:bg-transparent bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li id='submenu' className='border-b py-2 '><Link to={'/about'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold block'>About Us</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/about/vision'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Vision And Misson</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'*'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>22 Years In India</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/about/work'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Where We Work</Link></li>

                            </ul>
                        </li>
                        <li className='group max-lg:border-b max-lg:py-3 relative'>
                            <a href='#'
                                className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  lg:hover:fill-[#007bff] block'>Vaasta<svg
                                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16" data-original="#000000" />
                                </svg>
                            </a>
                            <ul
                                className='absolute shadow-lg md:bg-transparent bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li id='submenu' className='border-b py-2 '><Link to={'/vaasta'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Vaasta Kya Hai</Link></li>
                                <li id='submenu' className='border-b py-2 '>
                                    <Link to={'/vaasta/yojna'}
                                        className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Hamari Yojna</Link>
                                </li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/vaasta/member'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Become A Vaasta Member</Link></li>

                            </ul>
                        </li>
                        {/* <li className='max-lg:border-b max-lg:py-3'><Link to={'*'}
                            className='hover:text-[#007bff] text-gray-600 md:text-[20px] text-[15px] md:text-white  font-light  block'>Achievements</Link></li> */}
                        <li className='group max-lg:border-b max-lg:py-3 relative'>
                            <a href='#'
                                className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  lg:hover:fill-[#007bff] block'>Our Works<svg
                                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16" data-original="#000000" />
                                </svg>
                            </a>
                            <ul
                                className='absolute shadow-lg md:bg-transparent bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li id='submenu' className='border-b py-2 '><Link to={'/work/education'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Education</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/work/health'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Healthy</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/work/livlihood'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Livlihood</Link></li>


                            </ul>
                        </li>
                        <li className='group max-lg:border-b max-lg:py-3 relative'>
                            <a href='#'
                                className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  lg:hover:fill-[#007bff] block'>Get Involved<svg
                                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16" data-original="#000000" />
                                </svg>
                            </a>
                            <ul
                                className='absolute shadow-lg md:bg-transparent bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li id='submenu' className='border-b py-2 '><Link to={'/Careers'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Careers</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/Internship'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Internship</Link></li>
                                <li id='submenu' className='border-b py-2 '><Link to={'/Training'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>Training Programme</Link></li>


                            </ul>
                        </li>
                        <li id='submenu' className='max-lg:border-b max-lg:py-3'><Link to={'/gallery'}
                            className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  block'>Gallery</Link></li>
                        <li id='submenu' className='max-lg:border-b max-lg:py-3'><Link to={'/contact'}
                            className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-light  block'>Contact</Link></li>
                    </ul>
                </div>

                <div className='flex items-center space-x-8 max-lg:ml-auto'>
                    {/* <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px"
                            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 64 64">
                            <path
                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                data-original="#000000" />
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
                    </span>

                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px"
                            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 512 512">
                            <path
                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                data-original="#000000"></path>
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="15px"
                        className="cursor-pointer fill-[#333] hover:fill-[#007bff]">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg> */}
                    {/* <div className='brightness-100 absolute right-10 top-[2rem]'>
                                    <strong className='md:text-3xl text-xl text-orange-500 '>PRABISVG</strong>
                                    <br />
                                    <p className='md:px-4 px-1  py-0 md:text-xl text-sm text-sky-400 '>Samaj Kalyan</p>

                                </div> */}

                    <button id="toggleOpen" className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
