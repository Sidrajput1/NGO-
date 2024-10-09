import React, { Children } from "react";
import { FaClipboardList, FaRegCalendarAlt, FaSignOutAlt, FaTasks, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function EmpLayout({children}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="bg-blue-600 w-64 text-white flex flex-col items-center py-6 space-y-6">
        <div className="text-center">
          <FaUserCircle className="text-6xl" />
          <h2 className="mt-2 text-xl font-semibold">Welcome, Employee</h2>
        </div>
        <nav className="flex flex-col w-full px-4 space-y-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaRegCalendarAlt className="mr-3" /> Meetings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaTasks className="mr-3" /> Tasks
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaClipboardList className="mr-3" /> Reports
          </a>
          <Link
            to="/makereport"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaClipboardList className="mr-3" /> Make Reports
          </Link>
          <a
            href="#"
            className="flex items-center px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </a>
        </nav>
      </aside>
      {children}
    </div>
  );
}

export default EmpLayout;
