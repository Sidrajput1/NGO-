import React, { useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaCalendarAlt,
  FaCogs,
  FaEdit,
  FaHome,
  FaImage,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTrash,
  FaUpload,
} from "react-icons/fa";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TbReportSearch } from "react-icons/tb";
import { RiGroup2Fill } from "react-icons/ri";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    console.log("Logged In:", loggedIn); // Check if 'loggedIn' is 'true'
    if (!loggedIn || loggedIn !== "true") {
      navigate("/login"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Stories Uploaded",
        data: [12, 19, 8, 17, 14, 9],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Notices Published",
        data: [8, 15, 12, 10, 9, 14],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Activity Overview",
      },
    },
  };

  return (
    <AdminLayout>
      {/* <div className="flex-1 p-6 md:mt-20 mt-1">
               
                <div className="mb-6 ">
                    <h2 className="text-2xl font-bold mb-4">Manage Stories</h2>
                    <div className="flex gap-4 mb-4 ">
                        <button onClick={() => navigate('/uploadimage')} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                            <FaUpload className="mr-2" /> Upload Story
                        </button>
                        <button onClick={() => navigate('/story/del')} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                            <FaTrash className="mr-2" /> Delete Story
                        </button>
                        <button onClick={() => navigate('/story/del')} className="bg-yellow-500 text-white px-4 py-2 rounded z-[50] flex items-center">
                            <FaEdit className="mr-2" /> Update Story
                        </button>
                    </div>
                   
                    <div className="bg-white shadow rounded-lg p-6">
                        <p>Photo management content goes here.</p>
                    </div>
                </div>

               
                <div>
                    <h2 className="text-2xl font-bold mb-4">Manage Notices</h2>
                    <div className="flex gap-4 mb-4">
                        <button onClick={() => navigate('/admin/addnotice')} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                            <FaUpload className="mr-2" /> Upload Notice
                        </button>
                        <button onClick={() => navigate('/notice/del')} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                            <FaTrash className="mr-2" /> Delete Notice
                        </button>
                        <button onClick={() => navigate('/notice/del')} className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
                            <FaEdit className="mr-2" /> Update Notice
                        </button>
                    </div>
                   
                    <div className="bg-white shadow rounded-lg p-6">
                        <p>Notice management content goes here.</p>
                    </div>
                </div>
            </div> */}
            <div className="flex-1 p-6 md:mt-6 mt-1 space-y-6">
            {/* Admin Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Total Stories</h3>
                    <p className="text-4xl">5</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Total Notices</h3>
                    <p className="text-4xl">75</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Reports </h3>
                    <p className="text-4xl">1200</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Pending Approvals</h3>
                    <p className="text-4xl">10</p>
                </div>
            </div>

            {/* Chart Section */}
            <section className="w-full flex md:flex-row flex-col justify-around gap-4 ">
            <div className="bg-white p-6 md:w-1/2 w-full rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Activity Graph</h2>
                <Bar  data={chartData} options={chartOptions} />
            </div>

            {/* Manage Stories Section */}
            <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="bg-white md:p-6 p-2 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Manage Content</h2>
                <div className="flex gap-4 mb-6">
                    <button onClick={() => navigate('/uploadimage')} className="bg-blue-500 md:text-md text-sm text-white md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaUpload className="mr-2" /> Upload Story
                    </button>
                    <button onClick={() => navigate('/story/del')} className="bg-red-500 md:text-md text-sm text-white md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaTrash className="mr-2" /> Delete Story
                    </button>
                    <button onClick={() => navigate('/story/del')} className="bg-yellow-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaEdit className="mr-2" /> Update Story
                    </button>
                </div>
                {/* <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">Photo management content goes here.</p>
                </div> */}
                <div className="flex gap-4 mb-6">
                    <button onClick={() => navigate('/admin/addnotice')} className="bg-blue-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaUpload className="mr-2" /> Upload Notice
                    </button>
                    <button onClick={() => navigate('/notice/del')} className="bg-red-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaTrash className="mr-2" /> Delete Notice
                    </button>
                    <button onClick={() => navigate('/notice/del')} className="bg-yellow-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaEdit className="mr-2" /> Update 
                    </button>
                </div>
            </div>

            {/* Manage Notices Section */}
            <div className="bg-white md:p-6 p-2 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Manage Employee and Reports</h2>
                <div className="flex gap-4 mb-6">
                    <button onClick={() => navigate('/reports')} className="bg-blue-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <TbReportSearch className="mr-2" /> Reports
                    </button>
                    <button onClick={() => navigate('/upcomingmeetingsbyadmin')} className="bg-red-500 text-white md:text-md text-sm md:px-6 px-3 py-3 rounded-md flex items-center shadow-md">
                        <FaCalendarAlt className="mr-2" /> Meetings
                    </button>
                    <button onClick={() => navigate('/empdetails')} className="bg-yellow-500 text-white md:text-md text-sm md:px-6 px-2 py-3 rounded-md flex items-center shadow-md">
                        <RiGroup2Fill className="mr-2" /> Employee
                    </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">Employee and his reports  content goes here.</p>
                </div>
            </div>
            </div>
            </section>
        </div>
    </AdminLayout>
  );
}

export default Dashboard;
