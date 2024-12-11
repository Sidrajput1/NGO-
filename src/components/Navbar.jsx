import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navBar from "./Pages/navbar";
import navlogo from "/Applications/XAMPP/xamppfiles/htdocs/Shimmer Group/Ngo/src/assets/pics/ navlogo.jpg";
import "./vasta.css";

const Navbar = () => {
  // const [isDropdownOpen,setIsDropdownOpen] = useState(false)

  // const closeDropDown = () => {
  //         setIsDropdownOpen(false)
  // }
  const navigate = useNavigate();

  useEffect(() => {
    navBar();
  }, []);
  return (
    <header className="flex  bg-[#ffa91fd5] font-sans min-h-[70px] tracking-wide relative z-50">
      <div>
        <button
          onClick={() => navigate("/donate")}
          className="bg-pink-500  fixed md:top-0 md:right-0 right-1   font-semibold rounded-none md:px-2 px-3 md:py-0 z-[2000] cursor-pointer text-white md:text-xl text-lg hover:bg-yellow-600 transition-all ease-in-out duration-300  "
        >
          <Link to={"/donate"}>Donate</Link>{" "}
          <span className="font-bold md:text-xl animate-pulse text-xl ">
            {"\u{1F9E1}"}
          </span>
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between px-2 py-3 gap-0 w-full">
        <div className="flex w-[25%] justify-between items-center gap-6 ">
          <div>
            <a href="#">
              <img
                src={navlogo}
                alt="logo"
                className=" h-20 w-24  rounded-2xl  "
              />
            </a>
          </div>
          <div className=" top-[2rem]">
            <strong
              id="prabisvg"
              className="md:text-3xl text-sky-600 brightness-200 contrast-150  text-xl z-50  "
            >
              PRABISVG
            </strong>
            <br />
            <p
              id="kalyan"
              className="md:px-1 px-1 ml-[-5px]  py-0 md:text-xl text-2xl text-orange-600 brightness-150  font-extrabold "
            >
              SAMAJ KALYAN
            </p>
          </div>
        </div>

        <div
          id="collapseMenu"
          className=" max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-1 right-[7.5rem] z-[200] rounded-full bg-gray-200 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className=" lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-[floralwhite] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="#">
                <img
                  src={navlogo}
                  alt="logo"
                  className="w-24 py-4 px-3 rounded-3xl brightness-150 contrast-150"
                />
              </a>
            </li>
            <li id="submenu" className="max-lg:border-b max-lg:py-3">
              <Link
                to={"/"}
                className="hover:text-blue-600 md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   block"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="#"
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold  lg:hover:fill-[#007bff] block"
              >
                Who We Are
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-xl md:bg-orange-500 brightness-150 bg-white space-y-3 lg:top-16 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/about"}
                    className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold block"
                  >
                    About Us
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/about/vision"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Vision And Misson
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"*"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    22 Years In India
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/about/work"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Where We Work
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/ourdonor"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Our Donor
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="#"
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   lg:hover:fill-[#007bff] block"
              >
                Vaasta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-lg md:bg-orange-500 brightness-150 bg-white space-y-3 lg:top-16 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/vaasta"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Vaasta Kya Hai
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/vaasta/yojna"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Hamari Yojna
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/vaasta/member"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Become A Vaasta Member
                  </Link>
                </li>
              </ul>
            </li>
           
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="#"
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   lg:hover:fill-[#007bff] block"
              >
                Our Works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-lg md:bg-orange-500 brightness-150 bg-white space-y-3 lg:top-16 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/work/education"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Education
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/work/health"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Healthy
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/work/livlihood"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Livlihood
                  </Link>
                </li>

                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/story"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Field Stories
                  </Link>
                </li>
                {/* <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/workstory"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Work Stories
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className='group max-lg:border-b max-lg:py-3 relative'>
                            <a href='#'
                                className='hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   lg:hover:fill-[#007bff] block'>Events<svg
                                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16" data-original="#000000" />
                                </svg>
                            </a>
                            <ul
                                className='absolute shadow-lg md:bg-orange-500 brightness-150 bg-white space-y-3 lg:top-16 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                <li id='submenu' className='border-b py-2 '><Link to={'/help'}
                                    className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>मदद कर के तो देखो -2024</Link></li>
                                <li id='submenu' className='border-b py-2  z-50 '>
                                    <Link to={'/work/saas'}
                                        className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'>SASS</Link>
                                </li>
                                <li id='submenu' className='border-b py-2  z-50 '>
                                    <Link to={'/reliefcamp'}
                                        className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'> Flood Relief Camp (Prabisvg)</Link>
                                </li>


                                {/* <li id='submenu' className='border-b py-2  z-50 '>
                                    <Link to={'/help'}
                                        className='hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block'></Link>
                                </li> */}



                            </ul>

                        </li>
           

            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="#"
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   lg:hover:fill-[#007bff] block"
              >
                Get Involved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute shadow-lg md:bg-orange-500 brightness-150 bg-white space-y-3 lg:top-16 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/Careers"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Careers
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/Internship"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Internship
                  </Link>
                </li>
                <li id="submenu" className="border-b py-2 ">
                  <Link
                    to={"/Training"}
                    className="hover:text-[#007bff] md:text-white text-gray-600  md:text-[20px] text-[15px] font-bold block"
                  >
                    Training Programme
                  </Link>
                </li>
              </ul>
            </li>
            <li id="submenu" className="max-lg:border-b max-lg:py-3">
              <Link
                to={"/gallery"}
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   block"
              >
                Gallery
              </Link>
            </li>
            <li id="submenu" className="max-lg:border-b max-lg:py-3">
              <Link
                to={"/contact"}
                className="hover:text-[#007bff] md:text-white text-gray-600 md:text-[20px] text-[15px] font-bold   block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-8 max-lg:ml-auto">
       

          <button id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
