import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HelpBtn() {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div
      className={`fixed right-0 top-[80%] z-50 transform -translate-y-1/2 p-4 transition-transform duration-500 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section className="flex flex-col justify-between md:h-36 h-20">
        <button
          onClick={() => navigate("/workstory")}
          className="bg-yellow-500 brightness-150 md:text-md text-sm animate-pulse z-50 text-black font-bold py-2 md:px-4 px-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Our Work Stories
        </button>
        <button
          onClick={() => navigate("/help")}
          className="bg-pink-600 md:text-md text-sm z-50 text-white font-bold py-2 md:px-4 px-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          #madadkarketodekho2024
        </button>
        <button
          onClick={() => navigate("/reliefcamp")}
          className="bg-pink-600 md:text-md text-sm z-50 text-white font-bold py-2 md:px-4 px-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Flood Relief Camp
        </button>
        <a href="https://vaasta.org/" target="_blank">
          <button className="bg-orange-600 z-50 md:text-md text-sm text-white font-bold py-2 px-24 rounded-lg shadow-lg hover:bg-transparent">
            Join Us
          </button>
        </a>
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 z-50 hover:bg-red-800"
        >
          ✕
        </button>
      </section>
    </div>
  );
}

export default HelpBtn;
