import axios from "axios";
import React from "react";
import {
  FaBell,
  FaCogs,
  FaHome,
  FaImage,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function AdminLayout({ children }) {
    const navigate = useNavigate();
    const handleLogout = async() => {
        try {
            const response = await axios.post('https://prabisvg.com/phpbox/logout.php', {}, {
                withCredentials: true // to include cookies in the request
            });
            //console.log(response);

            if (response.data.success) {
                sessionStorage.clear();
                alert('Logout successful!');
                navigate('/') // Redirect to login page or another appropriate page
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred. Please try again.');
        }
    }
  return (
    <div className="flex flex-col lg:flex-row md:h-screen h-auto z-50 bg-gray-200">
      <div className="w-full lg:w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaTachometerAlt className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/uploadstory"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaImage className="mr-2" />
                Upload story
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/addnotice"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaBell className="mr-2" />
                Add Notice
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/adddonor"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Add Donor
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/addsponser"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Add Sponser
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/regsemp"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Register Employee
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/empdetails"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Employee Details
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/upcomingmeetingsbyadmin"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Upcoming Meetings
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/reports"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded"
              >
                <FaCogs className="mr-2" />
               Reports
              </Link>
            </li>
            <li className="mt-auto">
              <button onClick={handleLogout} className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded">
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}

export default AdminLayout;
