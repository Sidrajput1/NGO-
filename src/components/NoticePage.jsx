import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "https://prabisvg.com/phpbox/fetchnotice.php"
      );
      //console.log('FullResponse:', res.data); // Log the entire response

      if (res.data.success) {
        //console.log('Fetched Notices:', res.data.data);
        setNotices(res.data.data || []);
        //toast.success('Notice fetched successfully');
      } else {
        console.error("Error in response:", res.data.message);
        //toast.error('Failed to fetch notices. Please try again later.');
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
      //toast.error('Failed to fetch notices. Please try again later.');
    }
  };
  const checkLoginStatus = () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");
  };

  useEffect(() => {
    fetchNotices();
    checkLoginStatus();
  }, []);
  return (
    <div className="notice-board bg-gray-100 rounded-lg p-8 shadow-lg relative">
      <div className="flex justify-between items-center mb-6">
        {isLoggedIn && (
          <ul className="flex gap-4 text-lg font-medium text-gray-700">
            <li
              className="cursor-pointer hover:text-blue-500 transition ease-in-out duration-300"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition ease-in-out duration-300"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </li>
          </ul>
        )}

        <button
          className="absolute left-4 top-1 text-2xl text-red-600 hover:text-red-800 transition ease-in-out duration-300"
          onClick={() => navigate(-1)}
        >
          ← {/* Optionally use an icon here */}
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Notice Board
      </h2>

      {notices.length > 0 ? (
        <ul className="space-y-6">
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="bg-white p-6 rounded-md shadow-md transition transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {notice.title}
              </h3>
              <p className="text-gray-600 mb-4">{notice.details}</p>
              <p className="text-sm text-gray-500">
                Created at: {new Date(notice.created_at).toLocaleString()}
              </p>
              {/* <p className="text-sm text-gray-500">Updated at: {new Date(notice.updated_at).toLocaleString()}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-8">
          No notices found
        </p>
      )}
    </div>
  );
}

export default NoticePage;
