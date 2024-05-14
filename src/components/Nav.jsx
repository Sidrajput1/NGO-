import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import navlogo from '/Users/apple/Desktop/Shimmer Group/Ngo/src/assets/pics/ navlogo.jpg';
function Nav() {

    const navigate = useNavigate()

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        // setisMenu(isMenu === false ? true : false);
        // setResponsiveclose(isResponsiveclose === false ? true : false);
        setisMenu(prevState => !prevState);
        setResponsiveclose(prevState => !prevState);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(prevState => !prevState);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }
    return (
        <header className="header__middle bg-[#f57842]">
            <div>
                <button onClick={()=>navigate('/donate')} className='bg-orange-500 fixed top-0 right-1 border-2 font-semibold rounded-3xl px-4 py-2 z-[2000] cursor-pointer text-white text-3xl hover:bg-yellow-600 transition-all ease-in-out duration-300 animate-pulse '><Link to={'/donate'}>Donate</Link> <span className='font-bold text-3xl animate-pulse'>{'\u{1F9E1}'}</span></button>
            </div>
            <div className="container">
                <div className="row">

                    {/* Add Logo  */}
                    <div className="header__middle__logo  ">
                        <div className='relative'>
                            <Link activeclassname='is-active' to="/">
                                <img className=' h-24 w-24  rounded-2xl brightness-150' src={navlogo} alt="logo" />
                                <div className='absolute md:top-6 top-10 left-40 brightness-200'>
                                    <strong className='md:text-3xl text-xl text-yellow-300'>PRABISVG</strong>
                                    <br />
                                    <p className='md:px-4 px-1  py-0 md:text-xl text-sm text-sky-300 '>Samaj Kalyan</p>

                                </div>
                                
                            </Link>
                        </div>


                    </div>


                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}


                            <ul className={boxClass.join(' ')}>
                                {/* <li className="menu-item" >
                                    <Link  activeclassname='is-active' onClick={toggleClass} to={`/`}> Home </Link>
                                </li> */}
                                <li className="menu-item sub__menus__arrows" > <Link to={'/'}> Home  </Link>

                                </li>
                                <li onClick={toggleSubmenu}  className="menu-item sub__menus__arrows " > <Link> <FiChevronDown className='md:right-28 right-24' /> Who We Are  </Link>
                                    <ul id='menu1' className={boxClassSubMenu.join(' ')} >
                                        <li> <Link onClick={toggleClass} activeclassname='is-active' className='text-sm' to={`/about`}> About Us </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/22yearsinindia`}> 22 Years In india  </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/about/vision`}> Vision & Misson  </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/about/work`}> Where We Work  </Link> </li>
                                    </ul>
                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Our Works <FiChevronDown className='right-24' /> </Link>
                                    <ul id='menu2' className={boxClassSubMenu.join(' ')} >
                                        <li> <Link onClick={toggleClass} activeclassname='is-active' to={`/work/education`}> Education </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/work/health`}> Healthy </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/work/livlihood`}> Livlihood </Link> </li>
                                    </ul>
                                </li>

                                <li  className="menu-item sub__menus__arrows" > <Link to="#"> Achievements  </Link>

                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Vassta <FiChevronDown className='md:right-16 right-24' /> </Link>
                                    <ul id='menu3' className={boxClassSubMenu.join(' ')} >
                                        <li> <Link onClick={toggleClass} activeclassname='is-active' to={`/vaasta`}> Vaasta Kya hai </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/vaasta/yojna`}> Hamari Yojna </Link> </li>
                                        <li><Link onClick={toggleClass} activeclassname='is-active' to={`/vaasta/member`}> Become A Vaasta Member </Link> </li>
                                    </ul>
                                </li>
                                <li className="menu-item " ><Link onClick={toggleClass} activeclassname='is-active' to={`/gallery`}> Gallery </Link> </li>
                                <li className="menu-item " ><Link onClick={toggleClass} activeclassname='is-active' to={`/Contact`}> Contact Us </Link> </li>


                            </ul>


                        </nav>
                    </div>





                </div>
            </div>
        </header>
    )
}

export default Nav