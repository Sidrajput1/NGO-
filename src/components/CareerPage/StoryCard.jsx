import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function StoryCard({ image_url, title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Provide default values and handle potential undefined props
  const safeTitle = title || "Untitled";
  const safeSummary = description || "No summary available.";
  const shortSummary =
    safeSummary.slice(0, 300) + (safeSummary.length > 300 ? "..." : "");
  return (
    // <div className="max-w-sm border-x-2 border-orange-400 rounded overflow-hidden shadow-lg bg-white">
    //     <img className="w-full h-48 object-cover hover:scale-105 transition-all ease-in-out duration-300" src={image} alt={title} />
    //     <div className="px-6 py-4 bg-gray-200">
    //         <div className="font-bold text-xl mb-2">{title}</div>
    //         <p className="text-gray-700 text-base">{summary}</p>
    //     </div>
    //     {/* <div className="px-6 pt-4 pb-2">
    //         <span className="text-sm text-gray-500">by {author}</span>
    //     </div> */}
    // </div>
    // <div className="max-w-sm border-x-2 border-orange-400 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
    //     {image ? (
    //         <img
    //             className="w-full h-48 object-cover transition-all duration-300 hover:scale-105"
    //             src={image}
    //             alt={safeTitle}
    //         />
    //     ) : (
    //         <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
    //             No image available
    //         </div>
    //     )}
    //     <div className="px-6 py-4 bg-gradient-to-b from-gray-100 to-gray-200">
    //         <h2 className="font-bold text-xl mb-2 text-gray-800">{safeTitle}</h2>
    //         <div className="text-gray-700 text-base">
    //             <p className={`transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
    //                 {isExpanded ? safeSummary : shortSummary}
    //             </p>
    //             {safeSummary.length > 10 && (
    //                 <button
    //                     onClick={() => setIsExpanded(!isExpanded)}
    //                     className="mt-2 flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300"
    //                 >
    //                     {isExpanded ? (
    //                         <>
    //                             <span className='text-black'>Read Less</span>
    //                             <FaAngleUp className="ml-1 w-4 h-4" />
    //                         </>
    //                     ) : (
    //                         <>
    //                             <span>Read More</span>
    //                             <FaAngleDown className="ml-1 w-4 h-4" />
    //                         </>
    //                     )}
    //                 </button>
    //             )}
    //         </div>
    //     </div>
    // </div>

    <div className="max-w-sm border-x-2 border-orange-400 rounded-lg overflow-hidden shadow-lg bg-orange-400 transition-all duration-300 hover:shadow-xl">
      {image_url ? (
        <img
          className="w-full h-48 object-cover transition-all duration-300 hover:scale-105"
          src={image_url}
          alt={safeTitle}
        />
      ) : (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
          No image available
        </div>
      )}
      <div className="px-6 py-4 bg-gradient-to-b from-orange-500 to-orange-400">
        <h2 className="font-bold text-xl uppercase mb-2 text-gray-800">
          {safeTitle}
        </h2>
        <div className="text-gray-200 text-base">
          <p
            className={`leading-8 tracking-wide brightness-150 font-semibold transition-all duration-300 ${
              isExpanded ? "max-h-full" : "max-h-[30vh] overflow-auto"
            }`}
          >
            {isExpanded ? safeSummary : shortSummary}
          </p>
          {safeSummary.length > 300 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300"
            >
              {isExpanded ? (
                <>
                  <span className="text-black">Read Less</span>
                  <FaAngleUp className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <FaAngleDown className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
