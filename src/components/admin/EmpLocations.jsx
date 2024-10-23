import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layout/AdminLayout';
import { useNavigate } from 'react-router-dom';

function EmpLocations() {
    const [employees,setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchEmployees = async () => {
            try {
              const res = await axios.get('https://prabisvg.com/phpbox/getemp_locations.php');
              if (res.data.status === 'success') {
                setEmployees(res.data.employees);
              } else {
                console.error('Failed to fetch employees');
              }
            } catch (error) {
              console.error('Error fetching employees:', error);
            }
          };
          fetchEmployees();

          const locationInterval = setInterval(() => {
            fetchEmployees();  // You can optimize this to only fetch employee location if necessary
          }, 30000); // 30 seconds interval
      
          return () => clearInterval(locationInterval);
    },[]);

    const showLocationOnMap = async (employeeId) => {
        try {
          const res = await axios.get(`https://prabisvg.com/phpbox/get_live_location.php?employee_id=${employeeId}`);
          if (res.data.status === 'success') {
            // Show the location on the map
            const { latitude, longitude } = res.data.location;
            // Implement map rendering logic here...
            navigate('/maponemp', { state: { latitude, longitude, employeeId } });
            console.log(`Show location: (${latitude}, ${longitude}) on map`);
          } else {
            console.error('Failed to fetch location');
          }
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
    
  return (
    <AdminLayout>
        {/* <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Location Sharing Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.user_id}>
              <td>{employee.username}</td>
              <td>
                <button
                  style={{
                    backgroundColor: employee.location_enabled ? 'green' : 'red',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: employee.location_enabled ? 'pointer' : 'not-allowed',
                  }}
                  disabled={!employee.location_enabled}
                  onClick={() => showLocationOnMap(employee.user_id)}
                >
                  {employee.location_enabled ? 'Show Location' : 'Location Disabled'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
    <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Employee Location</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left text-sm uppercase font-bold">
                <th className="py-3 px-6">Employee User id</th>
                <th className="py-3 px-6">Location Sharing Status</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.user_id} className="border-b text-gray-700">
                  <td className="py-4 px-6">
                    {employee.username}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                        employee.location_enabled == 1
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {employee.location_enabled == 1 ? 'Location Enabled' : 'Location Disabled'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      className={`py-2 px-4 font-semibold rounded-lg shadow-md text-white transition duration-200 ease-in-out ${
                        employee.location_enabled == 1
                          ? 'bg-green-500 hover:bg-green-700 cursor-pointer'
                          : 'bg-red-500 cursor-not-allowed'
                      }`}
                      disabled={employee.location_enabled == 0}
                      onClick={() => showLocationOnMap(employee.user_id)}
                    >
                      {employee.location_enabled == 1 ? 'Show Location' : 'Location Disabled'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EmpLocations