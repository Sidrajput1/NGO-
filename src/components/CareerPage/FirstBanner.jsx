import React, { useEffect, useState } from "react";
import campgrid from '../../assets/pics/relief/campgrid.png';
import { useNavigate } from "react-router-dom";

function FirstBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const navigate = useNavigate();

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  useEffect(() => {
    setIsBannerVisible(true);
  }, []);

  return (
    <div className="relative">
     

      {/* {isBannerVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">
          <div className="bg-yellow-100 p-8 rounded-xl shadow-2xl max-w-6xl w-full text-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
             
              <div className="md:w-2/3 mb-4 md:mb-0 ">
                <img
                  src='https://i.pinimg.com/originals/b8/cc/e1/b8cce1ef072bb881af87beb586a96adf.gif' // Placeholder image (replace with real image URL)
                  alt="Special Offer"
                  className="rounded-lg shadow-lg brightness-100 w-full h-auto"
                />
              </div>

              
              <div className="md:w-1/3 md:pl-6">
                <h2 className="text-3xl font-extrabold mb-3 text-orange-500">
                    Join Our Flood Relief Efforts
                </h2>
                <p className="text-md text-gray-600 mb-6">
                Thousands of families have been affected by recent floods, and they need your help. We're working tirelessly to provide food, shelter, and medical aid to those in need. Your support can make a world of difference in saving lives and rebuilding communities.
                </p>
                <div className="flex justify-center space-x-4">
                 
                  <button
                    //onClick={handleNavigate}
                    onClick={()=>navigate('/reliefcamp')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>

                  
                  <button
                    onClick={closeBanner}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
     {isBannerVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70">
          <div className="bg-gradient-to-r from-orange-500 to-rose-500 p-8 rounded-3xl shadow-2xl max-w-6xl w-full text-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Section */}
              <div className="md:w-2/3 mb-4 md:mb-0">
                <img
                  src="https://i.pinimg.com/originals/b8/cc/e1/b8cce1ef072bb881af87beb586a96adf.gif" // Replace with your festive image URL
                  alt="Happy New Year"
                  className="rounded-lg  w-full h-auto "
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/3 md:pl-6 text-white">
                <h2 className="text-4xl font-extrabold mb-3 text-yellow-300">
                  🎉 Happy New Year! 🎉
                </h2>
                <p className="text-lg mb-6">
                  Join us in welcoming the New Year with joy, hope, and endless
                  opportunities. From all of us at <strong>Your Organization</strong>, we
                  wish you a prosperous and happy year ahead!
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    //onClick={() => navigate("/newyear")}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Celebrate with Us
                  </button>
                  <button
                    onClick={closeBanner}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstBanner;
