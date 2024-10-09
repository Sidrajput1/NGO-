import React, { useEffect } from 'react'
import AdminLayout from '../../layout/AdminLayout'
import { useNavigate } from 'react-router-dom';
import { FaBell, FaCogs, FaEdit, FaHome, FaImage, FaSignOutAlt, FaTachometerAlt, FaTrash, FaUpload } from 'react-icons/fa';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    console.log('Logged In:', loggedIn); // Check if 'loggedIn' is 'true'
    if (!loggedIn || loggedIn !== 'true') {
        navigate('/login'); // Redirect to login page if not logged in
    }
}, [navigate]);


 
  return (
    <AdminLayout>
       <div className="flex-1 p-6 md:mt-20 mt-1">
                {/* Photos Section */}
                <div className="mb-6 ">
                    <h2 className="text-2xl font-bold mb-4">Manage Stories</h2>
                    <div className="flex gap-4 mb-4 ">
                        <button onClick={() => navigate('/uploadimage')} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                            <FaUpload className="mr-2" /> Upload Photo
                        </button>
                        <button onClick={() => navigate('/story/del')} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                            <FaTrash className="mr-2" /> Delete Photo
                        </button>
                        <button onClick={() => navigate('/story/del')} className="bg-yellow-500 text-white px-4 py-2 rounded z-[50] flex items-center">
                            <FaEdit className="mr-2" /> Update Photo
                        </button>
                    </div>
                    {/* Placeholder for photo list or photo upload form */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <p>Photo management content goes here.</p>
                    </div>
                </div>

                {/* Notices Section */}
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
                    {/* Placeholder for notice list or notice upload form */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <p>Notice management content goes here.</p>
                    </div>
                </div>
            </div>
    </AdminLayout>
  )
}

export default Dashboard