import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider.css";
import "./slide_animation.css";

import ngo5 from "../../assets/pics/ngo5.jpeg";
import ngo6 from "../../assets/pics/ngo6.png";
import ngo7 from "../../assets/pics/ngo7.png";
import handshake from "../../assets/pics/handshake.jpeg";
import agirl from "../../assets/pics/agirl.png";
import vaastagrid2 from "../../assets/pics/vaastagrid2.png";
import { useNavigate } from "react-router-dom";
import HelpBtn from "../HelpBtn";
import FirstBanner from "../CareerPage/FirstBanner";

const content = [
  {
    title: "PRABISVG SAMAJ KALYAN ",
    description: "EVUM SHIKSHAN SANSTHA",
    button: "Read More",
    image: agirl,
    style: { color: "#09ebe3" },
    descriptionStyle: { color: "orangered", fontWeight: "500" },
    mobileStyle: {
      fontSize: "30px",
      marginTop: "50px",
      paddingTop: "10px",
      paddingRight: "30px",
    },
    mobileDescStyle: {
      fontSize: "15px",
      paddingBottom: "5px",
      color: "skyblue",
      fontWeight: "",
    },
  },
  {
    title: "Join us in building a brighter future for all.",
    description: "",
    button: "Know More",
    image: ngo6,
    style: { color: "#e8e1df" },
    mobileStyle: {
      fontSize: "30px",
      color: "#e8e1df",
      marginRight: "22px",
      paddingTop: "30px",
    },
  },
  // {
  //   title:
  //     "A strong woman stands up for herself. A stronger woman stands up for others",
  //   description: "",
  //   button: "Know More",
  //   image: ngo5,
  //   //   descriptionStyle: {color:"white",position:"absolute",top:"-150px",left:"300px"},
  //   buttonStyle: { display: "none" },
  //   style: {
  //     color: "#e8e1df",
  //     fontWeight: "300",
  //     textAlign: "left",
  //     width: "500px",
  //     position: "absolute",
  //     right: "-250px",
  //     fontSize: "35px",
  //     shadow: "5px 5px 10px 15px white",
  //     filter: "brightness(1.75)",
  //   },
  //   mobileStyle: {
  //     textAlign: "justify",
  //     width: "90vw",
  //     position: "none",
  //     fontSize: "20px",
  //     color: "#e8e1df",
  //   },
  // },
  {
    title:
      "An Independent Women is one Who can takecare of herself, both emotionally and financially ",
    description: "",
    button: "Know More",
    image: ngo7,
    style: { color: "#fcf8f7", fontSize: "30px", paddingRight: "20px" },
    mobileStyle: {
      fontSize: "20px",
      color: "#e8e1df",
      marginRight: "30px",
      paddingTop: "25px",
    },
  },
  // {
  //   title: "Unity is strength, division is weakness.",
  //   button: "Know More",
  //   image: handshake,
  //   style: { color: "white" },
  //   mobileStyle: {
  //     color: "white",
  //     paddingRight: "35px",
  //     paddingTop: "25px",
  //     fontSize: "28px",
  //   },
  // },
];

function HomeSlider() {
  const navigate = useNavigate();

  function isMobileDevice() {
    return window.innerWidth <= 640;
  }
  return (
    <div>
      {/* <FirstBanner/> */}
      <HelpBtn />
      <Slider autoplay={3000} className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ 
              background: `url('${item.image}') no-repeat  center center`,
              
              backgroundSize: isMobileDevice()? "contain" : "auto"
            }}
          >
            <div className="inner">
              <h1 style={isMobileDevice()?item.mobileStyle:item.style}>{item.title}</h1>
              <p style={isMobileDevice()?item.mobileDescStyle:item.descriptionStyle}>{item.description}</p>
              <button onClick={()=>navigate('/vaasta/yojna')} style={item.buttonStyle} >{item.button}</button>
            </div>
          
          </div>
        ))}
        <div
          className="slider-content relative"
          style={{
            background: `url('${vaastagrid2}') no-repeat center center`,
            backgroundSize: isMobileDevice() ? "contain" : "cover", // 'contain' for mobile, 'cover' for desktop
          }}
        >
         
          <div className="absolute inset-0 bg-gray-900 opacity-20"></div>

          <div className="relative px-6 lg:px-8 dark:bg-gray-800 bg-cover">
            <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div className=" text-center">
               
                <h1
                  style={
                    isMobileDevice() ? { fontSize: "30px" } : { color: "#fff" }
                  }
                  className="text-4xl font-bold font-serif tracking-wide sm:text-4xl dark:text-gray-100"
                >
                  <span className="text-orange-700 shadow-sm shadow-zinc-800 brightness-125 font-extrabold text-5xl ">
                    PRABISVG SAMAJ KALYAN
                  </span>{" "}
                  <span className="text-[#09ebe3] shadow-sm shadow-zinc-800">
                    EVUM SHIKSHAN SHANSTHAN
                  </span>
                </h1>

               
                <p
                  style={
                    isMobileDevice()
                      ? { fontSize: "15px", color: "skyblue" }
                      : { color: "white", fontWeight: "500" }
                  }
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200"
                >
                  Our new campaign is{" "}
                  <strong className="text-orange-500 animate-pulse font-bold">
                    #madadkarketodekho2024
                  </strong>
                  . Join us in making a difference! Together, we can bring hope
                  and support to those in need. Every small act of kindness
                  counts. Let's unite and show the power of community. 🌟
                </p>

               
                <div className="mt-8 flex justify-center gap-x-4">
                  <button
                    onClick={() => navigate("/vaasta/yojna")}
                    className="inline-block rounded-lg bg-yellow-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Donate Us
                    <span aria-hidden="true" className="text-indigo-200">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* <Slider autoplay={3000} className="slider-wrapper">
        <div
          className="slider-content relative"
          style={{
            background: `url('${vaastagrid2}') no-repeat center center`,
            backgroundSize: isMobileDevice() ? "contain" : "cover", // 'contain' for mobile, 'cover' for desktop
          }}
        >
         
          <div className="absolute inset-0 bg-gray-900 opacity-20"></div>

          <div className="relative px-6 lg:px-8 dark:bg-gray-800 bg-cover">
            <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div className=" text-center">
               
                <h1
                  style={
                    isMobileDevice() ? { fontSize: "30px" } : { color: "#fff" }
                  }
                  className="text-4xl font-bold font-serif tracking-wide sm:text-4xl dark:text-gray-100"
                >
                  <span className="text-orange-700 shadow-sm shadow-zinc-800 brightness-125 font-extrabold text-5xl ">
                    PRABISVG SAMAJ KALYAN
                  </span>{" "}
                  <span className="text-[#09ebe3] shadow-sm shadow-zinc-800">
                    EVUM SHIKSHAN SHANSTHAN
                  </span>
                </h1>

               
                <p
                  style={
                    isMobileDevice()
                      ? { fontSize: "15px", color: "skyblue" }
                      : { color: "white", fontWeight: "500" }
                  }
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200"
                >
                  Our new campaign is{" "}
                  <strong className="text-orange-500 animate-pulse font-bold">
                    #madadkarketodekho2024
                  </strong>
                  . Join us in making a difference! Together, we can bring hope
                  and support to those in need. Every small act of kindness
                  counts. Let's unite and show the power of community. 🌟
                </p>

               
                <div className="mt-8 flex justify-center gap-x-4">
                  <button
                    onClick={() => navigate("/vaasta/yojna")}
                    className="inline-block rounded-lg bg-yellow-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Donate Us
                    <span aria-hidden="true" className="text-indigo-200">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slider-content relative"
          style={{
            background: `url(${agirl}) no-repeat center center`,
            backgroundSize: isMobileDevice() ? "contain" : "cover",
          }}
        >
          
          <div className="absolute inset-0 bg-gray-900 opacity-20"></div>

          <div className="relative px-6 lg:px-8 dark:bg-gray-800 bg-cover">
            <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div className="text-center">
               
                <h1
                  style={
                    isMobileDevice() ? { fontSize: "30px" } : { color: "#fff" }
                  }
                  className="text-4xl font-bold font-serif tracking-wide sm:text-4xl dark:text-gray-100"
                >
                  PRABISVG SAMAJ KALYAN EVUM SHIKSHAN SHANSTHAN
                </h1>

               
                <p
                  style={
                    isMobileDevice()
                      ? { fontSize: "15px", color: "skyblue" }
                      : { color: "orangered", fontWeight: "500" }
                  }
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200"
                >
                  Empowering education and society for a brighter future.
                </p>

              
                <div className="mt-8 flex justify-center gap-x-4">
                  <button
                    onClick={() => navigate("/vaasta/yojna")}
                    className="inline-block rounded-lg bg-yellow-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Learn More
                    <span aria-hidden="true" className="text-indigo-200">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider> */}
    </div>
  );
}

export default HomeSlider;
