import React from "react";

function WorkFeature() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-orange-800">
            Where do We Work
          </h2>
          <p className='md:max-w-[90%] py-6 w-full md:line-clamp-3 m-auto text-justify md:text-center'>For 20 years, <span className='text-orange-400 font-bold'>Prabisvg Samaj Kalyan Evum Shikshan Sanstha</span> has been working across the length and breadth of the countpartnering with state governments and institutions to
                    strengthen systems and fulfil the basic needs of the marginalised people residing in these territories. The map below gives an insight into the
                    states where we worked on different projects and programmes in the financial year 2021-22.

                </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="w-1/2 md:w-full mx-auto object-contain"
              src="https://i.pinimg.com/564x/45/01/e4/4501e4fd95b84792703c701a54db5beb.jpg"
              alt="can_help_banner"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out duration-300 ">
              <div className="h-full py-4 px-6 border border-orange-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl text-orange-600 font-bold text-md mb-6">
                  Health
                </h3>
                <p className="text-sm">
                NGOs play a crucial role in improving public health and well-being. Ensuring that underserved communities have access to essential medical services and treatments.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out duration-300">
              <div className="h-full py-4 px-6 border border-orange-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl text-orange-600 font-bold text-md mb-6">
                  Education
                </h3>
                <p className="text-sm">
                  {" "}
                  Education-focused NGOs play a vital role in providing educational opportunities to underprivileged children who otherwise cannot afford it
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out duration-300 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-orange-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl text-orange-600 font-bold text-md mb-6">
                 Livlihood
                </h3>
                <p className="text-sm">
                Livelihood initiatives aim to improve the economic well-being of individuals and communities. They focus on creating employment opportunities, providing skill development programs, offering microfinance options, and ensuring sustainable income sources
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out duration-300 ">
              <div className="h-full py-4 px-6 border border-orange-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl text-orange-600 font-bold text-md mb-6">
                 SASS
                </h3>
                <p className="text-sm">
                SASS is the Student Action For Social Service initiative, with three fundamental principles: Instilling values of care & reverence for the elderly in school-aged children, equipping today’s youth for their eventual old age, and fostering an age-inclusive society.
                </p>
              </div>
            </div>

            {/* <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Others
                </h3>
                <p className="text-sm">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default WorkFeature;
