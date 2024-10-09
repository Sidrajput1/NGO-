import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaBell,
} from "react-icons/fa";
import { MdEmail, MdSchedule } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-black  text-white py-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="inline" />
            <span className="text-sm">Call:</span>
            <p className="text-sm">0612-352245, 9431442634</p>
          </div>

          <div className="flex items-center space-x-2">
            <MdEmail className="inline" />
            <span className="text-sm">Email:</span>
            <p className="text-sm">prabisvg@gmail.com</p>
          </div>

          <div className="md:flex hidden items-center space-x-2">
            <MdSchedule className="inline" />
            <span className="text-sm">Working Hours:</span>
            <p className="text-sm">Mon - Sat (10:00 AM - 6:30 PM)</p>
          </div>
          <div>
            <button onClick={()=>navigate('/emplogin')} className=" bg-yellow-400 py-0 px-3 text-black">Emp Login</button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="md:flex space-x-2 justify-center items-center hidden ">
          <FaBell onClick={()=>navigate('/allnotices')} className="text-white hover:text-blue-500 cursor-pointer"/>
          <a href="https://www.facebook.com/profile.php?id=61559846313626&paipv=0&eav=AfZglcD5SRBIsHoH5VeKQ8_unkqbSEHEzm_X55Yr651TfHeIynXoKDsa-nXmIlxzhGI" target="_blank"><FaFacebookF className="text-white hover:text-blue-500 cursor-pointer" /></a>
          <a href="https://www.instagram.com/prabisvg/" target="_blank"></a><FaInstagram className="text-white hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="text-white hover:text-blue-300 cursor-pointer" />
         
          <FaYoutube className="text-white hover:text-red-600 cursor-pointer" />
         
        </div>
      </div>
    </div>
  );
}

export default Header;
