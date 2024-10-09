import React from "react";
import camp1 from "../../assets/pics/relief/camp1.jpg";
import camp2 from "../../assets/pics/relief/camp2.jpg";
import camp3 from "../../assets/pics/relief/camp3.jpg";
import camp4 from "../../assets/pics/relief/camp4.jpg";
import camp5 from "../../assets/pics/relief/camp5.jpg";
import camp6 from "../../assets/pics/relief/camp6.jpg";
import camp7 from "../../assets/pics/relief/camp7.jpg";
import camp8 from "../../assets/pics/relief/camp8.jpg";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import LetsHelpFooter from "../Pages/LetsHelpFooter";
function ReliefCamp() {
  return (
    <div>
      <div className="bg-black text-white flex flex-col items-center justify-center min-h-[90vh]">
        <div>
          <div className="text-2xl text-orange-500 font-bold mb-4 text-center">
            Prabisvg Samaj Kalyan’s Flood Relief Camp,2024 in Hajipur, Bihar
          </div>
          <div className="text-lg text-center mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <img
            src={camp1}
            alt="Elder Care 1"
            className="max-w-lg w-[22rem] h-[20rem] border-2 border-dotted  border-orange-400 p-2 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp2}
            alt="Elder Care 2"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted  border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp3}
            alt="Elder Care 3"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2   border-dotted border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp4}
            alt="Elder Care 4"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted  border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp5}
            alt="Elder Care 5"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted  border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp6}
            alt="Elder Care 6"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp7}
            alt="Elder Care 7"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted  border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src={camp8}
            alt="Elder Care 8"
            className="max-w-lg w-[22rem] h-[20rem] p-2 border-2  border-dotted  border-orange-400 hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>
        <main className="bg-white min-h-screen text-black flex md:flex-row flex-col items-center justify-center">
          <div className="text-black md:w-[80%] w-full p-4  ">
            <section className="py-4">
              <h1 className="text-3xl font-bold tracking-wide">
                #Flood Relief camp -2024 –{" "}
                <span className="text-orange-500">PRABISVG</span> Prabisvg Samaj
                Kalyan’s Flood Relief Camp in Hajipur, Bihar
              </h1>
            </section>
            <section className="flex space-x-2">
              <strong className="text-2xl font-serif">Share On</strong>
              <div className=" flex text-3xl space-x-3 ">
                <FaFacebookSquare className="text-blue-500" />
                <FaSquareXTwitter className="text-black" />
                <a href="https://www.instagram.com/prabisvg/" target="_blank">
                  <FaInstagramSquare className="text-red-600" />
                </a>
              </div>
            </section>
            <section className="py-4">
              {/* <iframe md:width="848" width="350" md:height="500" height="300" src="https://www.youtube.com/embed/lNxStwUSsS4" title="#PoochhaHaiKabhi - #HaveYouEverAsked?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              <img
                className="w-full h-[35rem] border-2 rounded-lg"
                src={camp4}
                alt=""
              />
            </section>
            <section className="py-4">
              <p className="text-lg md:max-w-9xl max-w-full md:line-clamp-10 line-clamp-none text-justify ">
                In response to the devastating floods affecting Hajipur, Bihar,
                Prabisvg Samaj Kalyan (Prabisvg) has established a comprehensive
                flood relief camp to support the affected communities. The
                relentless rise in water levels has displaced thousands, leaving
                them in dire need of assistance. Prabisvg’s dedicated team is
                working tirelessly to provide essential foods,
                  to those impacted by the floods. The camp is
                equipped with necessary amenities to ensure the safety and
                well-being of the flood victims. Through collective efforts and
                unwavering commitment, Prabisvg aims to bring relief and hope to
                the people of Hajipur during these challenging times.
              </p>
            </section>
          </div>
        </main>
      </div>
     < LetsHelpFooter/>
    </div>
  );
}

export default ReliefCamp;
