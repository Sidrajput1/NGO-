import React from "react";
import shiled from "/Applications/XAMPP/xamppfiles/htdocs/Shimmer Group/Ngo/src/assets/pics/shiled.png";
import saas2 from "../../assets/pics/saas2.jpeg";
import designer from "../../assets/pics/designer.jpeg";
import Intro from "../Intro";
function Shield() {
  return (
    <div className="min-h-[200vh]">
      {/* <div className="w-full ">
        <img
          src="https://img.freepik.com/premium-photo/photo-children-participating-india-republic-day-republic-day-draw_198067-142601.jpg?w=900"
          alt="Where We Work "
          className="w-full md:h-[80vh] h-full object-cover "
        />
      </div> */}
      {/* <div id='vaasta'
                style={{ background: `$black` }}
                className='h-32 md:w-[90%] w-[100%] text-center m-auto py-0  '
            >
                <h1 className='md:text-6xl text-gray-700 text-3xl text-center py-4 font-semibold bg-orange-400 rounded-b-full tracking-wider '>
                    SASS
                    <p className=' text-sm rounded-b-full tracking-wider overflow-hidden '>Student Action For Social Service</p>
                </h1>



            </div> */}
      <Intro
        heading="Student Action for Social Service"
        image="https://img.freepik.com/premium-photo/photo-children-participating-india-republic-day-republic-day-draw_198067-142601.jpg?w=900"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "saas", href: "/work/saas" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <div
        id="vaasta"
        className="relative h-48 md:w-[90%] w-[100%] text-center m-auto py-0 bg-gray-800 flex justify-center items-center overflow-hidden"
      >
        {/* Background Decorative Layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 opacity-30 transform rotate-12"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="md:text-6xl text-white text-4xl font-bold bg-orange-500 px-6 py-2 rounded-full inline-block shadow-lg tracking-wider">
            SASS
          </h1>
          <p className="text-white text-lg mt-2 tracking-wide font-medium">
            Student Action For Social Service
          </p>
        </div>
      </div>

      <main className="w-full py-8 ">
        <div className="flex flex-row justify-around">
          <section className="w-[50%]  px-6 py-6">
            <p className="w-[100%] text-gray-500 line-clamp-9 text-justify tracking-normal leading-8 ">
              <span className="font-bold text-orange-500">SASS </span>is the
              Student Action For Social Service initiative, with three
              fundamental principles: Instilling values of care & reverence for
              the elderly in school-aged children, equipping today’s youth for
              their eventual old age, and fostering an age-inclusive society.
              <br />
              Discussions on moral education take place during school
              assemblies, and a variety of activities and initiatives are
              organized to inspire students to comprehend elder perspectives and
              life beyond 60. Numerous adults today cherish memories of their
              involvement in this educational program during their youth and
              contributing to societal welfare. The school's moral education
              initiative is now extended to young adults in college and the
              workforce through the UNITY program, UNITY stands for
              Understanding Neighbors and Interacting through Empathy, striving
              to cultivate compassion among young adults towards the elderly
              generation.
            </p>
          </section>
          <section className="w-[40%] h-80 ">
            <img src={designer} className="" alt="logo" />
          </section>
        </div>
      </main>
      <section className="py-16 w-full  flex flex-row justify-around items-center ">
        <div className="px-8 bg-orange-500 h-[40vh] flex gap-16 justify-around items-center">
          <img
            src={saas2}
            className="w-[30%] brightness-150 rounded-[3xl] -rotate-6"
            alt=""
          />
          <div className=" w-[40%] ">
            <h1 className="md:text-5xl mt-4 font-mono brightness-125 lg:text-4xl text-sky-700 font-semibold tracking-wider">
              I PLEDGE
            </h1>
            <ul className="text-white text-[1rem]  font-bold brightness-150 font-mono list-disc py-6">
              <li className="py-4">To honour everyday, those who are aged</li>
              <li className="py-4">
                To express in words, actions, and deeds, our gratitude towards
                women who empower communities and students who drive change.
              </li>
              <li>
                To love, respect, and support women and students, ensuring they
                have opportunities to thrive in both family and community
                settings.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shield;
