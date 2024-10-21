import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmpLayout from '../../layout/EmpLayout';

function EmpProfile() {
    const [empDetails, setEmpDetails] = useState(null);

    useEffect(() => {
        // Fetch the employee details using Axios
        axios
          .get('https://prabisvg.com/phpbox/emp_dash.php') // Replace with the actual API URL
          .then(response => {
            if (response.data.status === 'success') {

              setEmpDetails(response.data.emp_details);
              console.log(response.data);
            } else {
              console.error('Failed to fetch employee details');
            }
          })
          .catch(error => {
            console.error('Error fetching employee data:', error);
          });
      }, []);
    
      if (!empDetails) {
        return <p>Loading...</p>;
      }
  return (
    <EmpLayout>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <div className="flex items-center space-x-6">
        <div>
          {/* Employee Profile Picture */}
          {empDetails.profile_pic ? (
            <img
              className="h-32 w-32 rounded-full object-cover"
              src={empDetails.profile_pic}
              alt="Profile"
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center text-2xl text-gray-500">
              No Image
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            {empDetails.name}
          </h1>
          <p className="text-gray-600">Role: {empDetails.role}</p>
          <p className="text-gray-600">Employee Code: {empDetails.empcode}</p>
          <p className="text-gray-600">Email: {empDetails.email}</p>
          <p className="text-gray-600">Mobile: {empDetails.mobile_no}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Employee Details</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500">Address:</p>
            <p className="text-gray-700">{empDetails.address}</p>
          </div>
          <div>
            <p className="text-gray-500">Gender:</p>
            <p className="text-gray-700">{empDetails.gender}</p>
          </div>
          <div>
            <p className="text-gray-500">Date of Birth:</p>
            <p className="text-gray-700">{empDetails.dob !== '0000-00-00' ? empDetails.dob : 'Not Provided'}</p>
          </div>
          <div>
            <p className="text-gray-500">Joined On:</p>
            <p className="text-gray-700">{new Date(empDetails.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
    </EmpLayout>
  )
}

export default EmpProfile