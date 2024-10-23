import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import {
  FaBars,
  FaClipboardList,
  FaRegCalendarAlt,
  FaSignOutAlt,
  FaTasks,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

function EmpLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
 // const [empDetails, setEmpDetails] = useState(null);

  

  // useEffect(() => {
    
  //     // Fetch the employee details using Axios
  //     axios
  //       .get("https://prabisvg.com/phpbox/emp_dash.php") // Replace with the actual API URL
  //       .then((response) => {
  //         if (response.data.status === "success") {
  //           setEmpDetails(response.data.emp_details);
  //           console.log(response.data);
  //         } else {
  //           console.error("Failed to fetch employee details");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching employee data:", error);
  //       });
   
  // }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "https://prabisvg.com/phpbox/emplogout.php",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );

      if (res.data.status === "success") {
        sessionStorage.removeItem("loggedIn");
        sessionStorage.removeItem("userData");
        console.log("Logout Successful", res.data.message);
        navigate("/");
      } else {
        console.log("Logout failed:", res.data.message);
      }
    } catch (error) {
      console.log("Error during logout request:", error.message);
    }
  };

  
  return (
    
    <div className="min-h-screen flex bg-gray-100">
      <aside
        className={`bg-blue-600 text-white flex flex-col items-center py-6 space-y-6 ${
          menuOpen ? "block" : "hidden"
        } md:block md:w-64`}
      >
        <div onClick={()=>navigate('/empprofile')} className="text-center cursor-pointer">
        {/* {empDetails.profile_pic ? (
            <img
              className="h-32 w-32 rounded-full object-cover"
              //src={empDetails.profile_pic}
              src={`https://prabisvg.com/phpbox/${empDetails.profile_pic}`}
              alt="Profile"
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center text-2xl text-gray-500">
             <FaUserCircle className="text-5xl" />
            </div>
          )}
          <h2 onClick={()=>navigate('/empprofile')} className="mt-2 text-xl font-semibold">Welcome {empDetails.name}</h2> */}
          <FaUserCircle className="text-6xl" />
          <h2  className="mt-2 text-xl font-semibold">Welcome</h2>
        </div>
        <nav className="flex flex-col w-full px-4 space-y-4">
          <Link
            to="/empdash"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <MdDashboard className="mr-3" /> Dashboard
          </Link>
          <Link
            to="/meetings"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" /> Meetings
          </Link>
          <Link
            to="/upcomingmeetings"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" /> Upcoming Meetings
          </Link>
          <Link
            to="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaTasks className="mr-3" /> Tasks
          </Link>
          <Link
            to="/reportsbyemp"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <TbReport className="mr-3" /> Reports
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
            <FaLocationDot className="mr-3" /> Share Location
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </nav>
      </aside>
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6 md:hidden">
          <button onClick={toggleMenu} className="text-blue-600">
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
        </header>
        {children}
      </div>
    </div>
  );
}

export default EmpLayout;
