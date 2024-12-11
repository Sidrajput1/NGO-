import React, { useEffect } from "react";
import aboutgrid from '../../assets/pics/aboutgrid.png';

import "react-slideshow-image/dist/styles.css";

import gallery7 from "../../assets/pics/gallery/gallery7.jpg";
import gallery6 from "../../assets/pics/gallery/gallery6.jpg";
import gallery8 from "../../assets/pics/gallery/gallery8.jpg";
import WeWork from "./WeWork";
import YojnaCard from "./YojnaCard";
import SlideGalary from "./SlideGalary";
import Member from "./Member";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeSlider from "./HomeSlider";
import LetsHelpFooter from "./LetsHelpFooter";
import ShortGallery from "./ShortGallery";
import ShortYojna from "../plan/ShortYojna";
import Banner from "../parallaxyojna/Banner";
import WorkSlider from "../plan/WorkSlider";
import HappyDonor from "../sponsers/HappyDonor";
import WorkFeature from "../WorkFeature";
import Faq from "../CareerPage/Faq";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div className="w-full p-0 min-h-[115vh]">
        <div className="w-full  ">
          {/* <img src={homepic} alt="NGO Image" className='w-full object-cover ' /> */}
          {/* <SlideGalary /> */}
          <HomeSlider />
        </div>

        <div id='donate-box' className='md:w-[90%] w-full px-[15px] z-50 flex md:flex-row flex-col md:justify-between justify-around items-center  mx-auto bg-gradient-to-r from-[#f40f68] to-[#f86e3d] h-36 absolute md:top-[98%]  md:left-16 left-0 '>
                <div>
                    <h2 className='md:text-4xl text-lg text-white font-light font-serif '>Please Help Us <span className='px-4 py-4 rounded-2xl border-[1px] hover:text-orange-500 hover:bg-white cursor-pointer  transition-all ease-in-out duration-300 animate-pulse '>Donate Now</span></h2>
                </div>
                <div>
                    {/* <button className='px-4 py-4 rounded-3xl border-2 bg-transparent text-black hover:bg-black  hover:text-orange-500  transition-all ease-in-out duration-300 cursor-pointer '>Call Us</button> */}
                    <a href="tel:9431442634" className='px-4 py-4 rounded-3xl border-2 bg-transparent text-black hover:bg-black  hover:text-orange-500  transition-all ease-in-out duration-300 cursor-pointer ' > Call Us at 9431442634 </a>
                </div>
            </div>

        <div className="w-full min-h-[110vh] mt-8">
          {/* <div
            className="m-auto w-full h-72 flex justify-center items-center gap-10 flex-col"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
          
            <h1
              className="header header--shadow md:text-[5rem] text-[2.5rem]"
              data-text="About the Prabisvg Samaj Kalyan"
            >
              About the Prabisvg Samaj Kalyan
            </h1>
            <p className="md:text-xl text-sm font-semibold  text-center line-clamp-3 max-w-xl ">
              We are a young-blooded organization filled with immense passion
              and a belief that everything is possible with the right amount of
              determination!
            </p>
          </div> */}
          <div className="bg-white py-20 px-6 md:px-20 lg:px-35">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Left Side - Images */}
              <div className="relative w-full md:w-1/2 shadow-xl ">
                <div className="w-full">
                  <img
                    src={aboutgrid} // Replace with your image link
                    alt="Happy children"
                    className="rounded-lg shadow-md h-full"
                  />
                </div>
                {/* <div className="absolute top-50 left-10 border-4 border-white">
                  <img
                    src="https://via.placeholder.com/300" // Replace with your image link
                    alt="Children studying"
                    className="rounded-lg shadow-lg grayscale"
                  />
                </div> */}
                {/* <div className="absolute top-2 right-2 bg-pink-500 text-white font-bold px-4 py-2 rounded-full shadow-md text-center">
                  4+
                  <br />
                  YEARS
                </div> */}
              </div>

              {/* Right Side - Text */}
              <div className="w-full md:w-1/2 bg-slate-100 py-8 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold px-2 text-gray-800 mb-4">
                About the <span className="text-orange-600">  Prabisvg Samaj Kalyan </span>
                </h2>
                <p className="text-gray-600 text-lg leading-normal px-2 mb-2 py-4 text-justify">
                Prabisvg Samaj Kalyan Evum Shikshan Sanstha is an organization that tries to empower the society. Our organization aims to ensure empowerment of women and girls through its extensive network, as well as transform their lives in terms of education, health, skills, employment and sustainable livelihoods by focusing on issues related to children and youth .
                </p>
                <p className="text-gray-600 text-lg leading-relaxed px-2  mb-4">
                  Our commitment to integrity, compassion, and collaboration
                  guides every initiative, ensuring that our efforts create
                  lasting impact and promote inclusive growth. Together, we strive to build a brighter future for every individual, one where opportunity and dignity are accessible to all
                </p>
                <button onClick={()=>navigate('/about')} className=" text-red-500 px-6 py-3 border-2 mt-2 ml-2 border-white font-bold rounded-full  hover:text-orange-700 transition">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <WorkSlider />
        </div>
      </div>
      

      <div className="my-8">
        {/* <WeWork /> */}
        <WorkFeature />
      </div>
      <ShortGallery />
      <ShortYojna />
      {/* <div className="my-8">
        
        <HappyDonor />
      </div> */}

      
      {/* <YojnaCard /> */}

      {/* <Member /> */}

      <Banner />
      <Faq />

      <LetsHelpFooter />

      {/* <HappyDonor/> */}
    </div>
  );
}

export default Home;
