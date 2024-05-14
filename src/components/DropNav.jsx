// import React, { useState } from 'react';

// const DropNav = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-gray-800 shadow-lg">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                         {/* Logo */}
//                         <img src="/path/to/logo.png" alt="Logo" className="h-8" />

//                         {/* Small image */}
//                         <img src="/path/to/small-image.png" alt="Small Image" className="h-6 ml-2 hidden md:block" />
//                     </div>

//                     {/* Navbar Links */}
//                     <div className="hidden md:flex space-x-4">
//                         <NavItem title="Home" />
//                         <NavItem title="About" hasDropdown={true} />
//                         <NavItem title="Services" hasDropdown={true}>
//                             <div className="py-2 bg-gray-800 text-white rounded-md shadow-lg absolute z-10 hidden md:block">
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 1</a>
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 2</a>
//                                 <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 3</a>
//                             </div>
//                         </NavItem>
//                         <NavItem title="Portfolio" />
//                         <NavItem title="Blog" />
//                         <NavItem title="Contact" />
//                         <NavItem title="Dropdown" hasDropdown={true} />
//                     </div>

//                     {/* Hamburger Menu (Mobile) */}
//                     <div className="flex md:hidden">
//                         <button onClick={toggleDropdown} className="text-white focus:outline-none">
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 ></path>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="md:hidden">
//                     <div className="px-2 pt-2 pb-3 space-y-1">
//                         <DropdownItem title="Home" />
//                         <DropdownItem title="About" />
//                         <DropdownItem title="Services" />
//                         <DropdownItem title="Portfolio" />
//                         <DropdownItem title="Blog" />
//                         <DropdownItem title="Contact" />
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// const NavItem = ({ title, hasDropdown = false,children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative">
//             <button
//                 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none"
//                 onClick={toggleDropdown}
//             >
//                 {title}
//                 {hasDropdown && (
//                     <svg
//                         className="w-4 h-4 inline-block ml-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                 )}
//             </button>
//             {/* {hasDropdown && isOpen && (
//                 <div className="absolute z-20 bg-gray-800 text-white py-1 w-32 mt-2 rounded-md shadow-lg md:w-auto">
//                     <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none">
//                         Dropdown Item 1
//                     </button>
//                     <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none">
//                         Dropdown Item 2
//                     </button>
//                     <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none">
//                         Dropdown Item 3
//                     </button>
//                 </div>
//             )} */}
//             {hasDropdown && isOpen && children}
//         </div>
//     );
// };
// const DropdownItem = ({ title }) => {
//     return (
//         <button className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium w-full">
//             {title}
//         </button>
//     );
// };

// export default DropNav;

import React, { useState } from 'react';
import './nav.css'; // Import your CSS file here

function DropNav() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={isResponsive ? "topnav responsive" : "topnav"} id="myTopnav">
      <div className='logo'>
        <img src='' alt='an image'/>
        <img src='' alt='logo'/>
      </div>
      <a href="#home" className="active">Home</a>
      <div className="dropdown">
        <button className="dropbtn">Dropdown 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <a href="#contact">Contact</a>
      <div className="dropdown">
        <button className="dropbtn">Dropdown 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <a href="#about">About</a>
      <a href="javascript:void(0);" style={{fontSize: '15px'}} className="icon" onClick={handleResponsive}>&#9776;</a>
    </div>
  );
}

export default DropNav;

