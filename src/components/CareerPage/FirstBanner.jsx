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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Our Website!</h2>
            <p className="mb-6">We have some exciting news for you. Don't miss out on our latest offers!</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={closeBanner}
            >
              Close
            </button>
          </div>
        </div>
      )} */}

      {isBannerVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">
          <div className="bg-yellow-400 p-8 rounded-xl shadow-2xl max-w-6xl w-full text-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image on the left */}
              <div className="md:w-2/3 mb-4 md:mb-0 ">
                <img
                  src={campgrid} // Placeholder image (replace with real image URL)
                  alt="Special Offer"
                  className="rounded-lg shadow-lg brightness-100 w-full h-auto"
                />
              </div>

              {/* Text and Button on the right */}
              <div className="md:w-1/3 md:pl-6">
                <h2 className="text-3xl font-extrabold mb-3 text-orange-500">
                    Join Our Flood Relief Efforts
                </h2>
                <p className="text-md text-gray-600 mb-6">
                Thousands of families have been affected by recent floods, and they need your help. We're working tirelessly to provide food, shelter, and medical aid to those in need. Your support can make a world of difference in saving lives and rebuilding communities.
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Navigation Button */}
                  <button
                    //onClick={handleNavigate}
                    onClick={()=>navigate('/reliefcamp')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>

                  {/* Close Button */}
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
