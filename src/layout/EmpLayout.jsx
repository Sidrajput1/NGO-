import axios from "axios";
import React, { Children } from "react";
import { FaClipboardList, FaRegCalendarAlt, FaSignOutAlt, FaTasks, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function EmpLayout({children}) {
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      const res = await axios.post('https://prabisvg.com/phpbox/emplogout.php', {}, {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true // Ensure cookies are sent with the request
      });

      if (res.data.status === 'success') {
          sessionStorage.removeItem("loggedIn");
          sessionStorage.removeItem("userData");
          console.log('Logout Successful',res.data.message);
          navigate('/');
      } else {
          console.log('Logout failed:', res.data.message);
      }
      
  } catch (error) {
      console.log('Error during logout request:', error.message);
  }
  }
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="bg-blue-600 w-64 text-white flex flex-col items-center py-6 space-y-6">
        <div className="text-center">
          <FaUserCircle className="text-6xl" />
          <h2 className="mt-2 text-xl font-semibold">Welcome, Employee</h2>
        </div>
        <nav className="flex flex-col w-full px-4 space-y-4">
        <Link
            to='/empdash'
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" />  Dashboard
          </Link>
          <Link
            to='/meetings'
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" />  Meetings
          </Link>
          <Link
            to='/upcomingmeetings'
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" /> Upcoming Meetings
          </Link>
          <a
            href="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaTasks className="mr-3" /> Tasks
          </a>
          <Link
            to='/reportsbyemp'
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaClipboardList className="mr-3" /> Reports
          </Link>
          <Link
            to="/makereport"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaClipboardList className="mr-3" /> Make Reports
          </Link>
          <Link
            to="/sharelocation"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaClipboardList className="mr-3" /> Share Location
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </nav>
      </aside>
      {children}
    </div>
  );
}

export default EmpLayout;
