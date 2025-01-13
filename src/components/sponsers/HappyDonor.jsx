import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";

// const donors = [
//   {
//     id: 1,
//     image: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg?w=740&t=st=1725619442~exp=1725620042~hmac=6362d74ea8113dd5441ecb7bde155f460792106bd363c9496c06fc3597b38613",
//     name: "Amarjeet Singh",
//     description:
//       "This is Mr Amarjeet Singh. They have contributed greatly to our cause.",
//   },
//   {
//     id: 2,
//     image: "https://img.freepik.com/free-photo/woman-doing-close-up-photoshoot-studio_53876-14476.jpg?w=900&t=st=1725619734~exp=1725620334~hmac=cd8947738311c7b6ac3a56d76a23ff07abc1bf7cf716a31af0f12ddb24a78aa2",
//     name: "Anjali Sharma",
//     description:
//       "This is  Anjali Sharma. They have contributed greatly to our cause.",
//   },
//   {
//     id: 3,
//     image: "https://img.freepik.com/free-photo/front-view-man-ambulance-car_23-2149478476.jpg?w=900&t=st=1725619512~exp=1725620112~hmac=a5d869f6e9a14678f2d1014b4fed89ba3c5029a7888bcdeac458863aa2ec51f1",
//     name: "Kumar Ranjan",
//     description:
//       " They have contributed greatly to our cause.",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Four",
//     description:
//       "This is the description for Donor Four. They have contributed greatly to our cause.",
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Five",
//     description:
//       "This is the description for Donor Five. They have contributed greatly to our cause.",
//   },
// ];

// const donorsponser = [
//   {
//     id: 1,
//     image:
//       "https://lh3.googleusercontent.com/p/AF1QipPKOlAc4lx-G8XXrHi1jLKi04_fbFBkXGxneefl=s680-w680-h510",
//     name: "Kendriya Vidyalaya Hajipur",
//     description: "They have contributed greatly to our cause.",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Two",
//     description: " They have contributed greatly to our cause.",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Three",
//     description:
//       "This is the description for Donor Three. They have contributed greatly to our cause.",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Four",
//     description:
//       "This is the description for Donor Four. They have contributed greatly to our cause.",
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/150",
//     name: "Donor Five",
//     description:
//       "This is the description for Donor Five. They have contributed greatly to our cause.",
//   },
// ];



function HappyDonor() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sponser, setSponser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(
          "https://prabisvg.com/phpbox/fetchdonor.php"
        );
        console.log(res.data);

        setPhotos(res.data.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    const fetchSponser = async () => {
      try {
        const res = await axios.get(
          "https://prabisvg.com/phpbox/fetchsponser.php"
        );
        console.log(res.data);

        setSponser(res.data.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };
    fetchSponser();
  }, []);

  // Handles the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Handles the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 3 : prevIndex - 1
    );
  };

  const nextSlide2 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sponser.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Handles the previous slide
  const prevSlide2 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponser.length - 3 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        No photos found.
      </div>
    );
  }

  if (!sponser || sponser.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        No photos found.
      </div>
    );
  }
  return (
    // <div className="md:h-[110vh] h-auto">
    //   <header className="text-center text-4xl uppercase tracking-wide font-bold  py-6 mb-4 text-orange-500 font-sans">
    //     <span className="text-black">Our</span> Happy Donor
    //   </header>

    //   <div className="relative max-w-7xl mx-auto">

    //     <div className="flex overflow-hidden">

    //       <div
    //         className="flex transition-transform duration-300 ease-in-out"
    //         style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
    //       >
    //         {photos.map((donor) => (
    //           <div
    //             key={donor.id}
    //             className="w-1/3 p-4"
    //             style={{ flexShrink: 0 }}
    //           >
    //             <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:scale-105 transition-transform duration-300">
    //               {/* Donor Image */}
    //               <div className="w-32 h-32 mx-auto mt-4">
    //                 <img
    //                   src={`https://prabisvg.com/phpbox/${donor.image_url.replace('./', '')}`}
    //                   alt={donor.name}
    //                   className="w-full h-full object-cover rounded-full border-4 border-orange-400"
    //                 />
    //               </div>

    //               {/* Donor Info */}
    //               <div className="p-4 bg-orange-100">
    //                 <h2 className="text-xl font-semibold text-orange-600 mt-4">
    //                   {donor.title}
    //                 </h2>
    //                 <p className="text-gray-700 mt-2">{donor.description}</p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <button
    //       className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none transition-colors"
    //       onClick={prevSlide}
    //     >
    //       Prev
    //     </button>
    //     <button
    //       className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none transition-colors"
    //       onClick={nextSlide}
    //     >
    //       Next
    //     </button>
    //   </div>

    //   <header className="text-center text-4xl uppercase tracking-wider font-bold  py-6 mt-4 text-orange-500 font-sans">
    //     <span className="text-black">Our</span> Sponser Organisations
    //   </header>

    //   <div className="relative max-w-7xl mx-auto">

    //     <div className="flex overflow-hidden">

    //       <div
    //         className="flex transition-transform duration-300 ease-in-out"
    //         style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
    //       >
    //         {sponser.map((donor) => (
    //           <div
    //             key={donor.id}
    //             className="w-full p-4"
    //             style={{ flexShrink: 0 }}
    //           >
    //             <div className=" rounded-lg shadow-lg overflow-hidden">
    //               <img
    //                 src={donor.image}
    //                 alt={donor.title}
    //                 className="w-full h-48 object-fill"
    //               />
    //               <div className="p-4 bg-orange-400 brightness-200 ">
    //                 <h2 className="text-2xl font-semibold">{donor.title}</h2>
    //                 <p className="text-black mt-2">{donor.description}</p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <button
    //       className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
    //       onClick={prevSlide2}
    //     >
    //       Prev
    //     </button>
    //     <button
    //       className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
    //       onClick={nextSlide2}
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
    <div className="md:h-[110vh] h-auto bg-gray-50 py-8">
    <header className="text-center text-4xl uppercase tracking-wide font-extrabold py-6 mb-6 text-green-600 font-sans">
      <span>Our</span> Happy Donor
    </header>
  
    {/* Photos/Donors Section */}
    <div className="relative max-w-7xl mx-auto  bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Slider Container */}
      <div className="flex overflow-hidden">
        {/* Slider Inner Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {photos.map((donor, index) => (
            <div
              key={donor.id}
              className={`p-6 ${photos.length === 1 ? "w-full" : "w-1/3"}`}
              style={{ flexShrink: 0 }}
            >
              <div className="bg-gradient-to-br from-green-200 via-white to-orange-100 rounded-xl shadow-lg overflow-hidden text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                {/* Icon Instead of Image */}
                <div className="w-24 h-24 mx-auto mt-4 flex items-center justify-center bg-orange-400 text-white rounded-full">
                <CgProfile className="text-4xl" />
                </div>
  
                {/* Donor Info */}
                <div className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-green-700 mt-4">
                    {donor.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{donor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  
    {/* Sponsors Section */}
    <header className="text-center text-2xl uppercase tracking-wide font-extrabold py-6 mt-10 text-green-600 font-sans">
      <span>Name of the <span className="text-2xl font-extrabold text-green-800">Organization</span> where Our <span className="text-green-700 font-extrabold">donation camp</span> event was organized</span> 
    </header>
  
    <div className="relative max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Slider Container */}
      <div className="flex overflow-hidden">
        {/* Slider Inner Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {sponser.map((donor) => (
            <div
              key={donor.id}
              className={`p-6  ${sponser.length === 1 ? "w-full" : "w-1/3"}`}
              style={{ flexShrink: 0 }}
            >
              <div className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={`https://prabisvg.com/phpbox/${donor.image_url.replace(
                    "./",
                    ""
                  )}`}
                  alt={donor.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-orange-600">
                    {donor.title}
                  </h2>
                  <p className="text-gray-900 mt-2">{donor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
        onClick={prevSlide2}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
        onClick={nextSlide2}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
  
  );
}

export default HappyDonor;
