import React, { useEffect, useState } from "react";
import EmpLayout from "../../layout/EmpLayout";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // For Chart.js
import axios from "axios";
//import { json } from "react-router-dom";



function EmpDash() {

  // const [employees,setEmployees] = useState();
  // const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchEmpData = async () => {
  //         try {
  //             //const response = await axios.get('http://localhost/hmsapi/dashboard.php');
  //             //const response = await axios.get('/path/to/dashboard.php');
  //             const response = axios.get('https://prabisvg.com/phpbox/emp_dash.php', { 
  //               withCredentials: true 
  //             });
  //             console.log(response.data.employees);
  //             if (response.data.status === 'success') {
  //               setEmployees(res.data.employees);
  //               console.log(response.data.employees);
  //             } else {
  //                 setError(response.data.message || 'Failed to fetch Employee data');
  //             }
  //             console.log(response.data);
  //         } catch (err) {
  //             setError('Error fetching Employee data');
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     fetchEmpData();
  // }, []);


    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Meetings',
            data: [3, 2, 2, 4, 5, 1, 3],
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            fill: true,
          },
        ],
      };

      const employeeId = JSON.parse(sessionStorage.getItem('userData')).user_id;

      useEffect(()=>{
        const getLocation = () => {
          return new Promise((resolve,reject) => {
            if(!navigator.geolocation){
              reject('Geo Location is not supported by browser');
            } else{
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  resolve(position.coords)
                },
                (error) => {
                  reject(error);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
              );
            }
          });
        };

        const sendLocation = async () => {
          try {
            const coords = await getLocation();
            await axios.post('https://prabisvg.com/phpbox/savelocation.php', {
              latitude: coords.latitude,
              longitude: coords.longitude,
              employee_id: employeeId, // Use employee ID from session
            });
          } catch (error) {
            console.error('Error fetching/sending location:', error);
          }
        };
        sendLocation();
      },[]);

    //   if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;
  return (
    <EmpLayout>
      {/* <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            Dashboard Overview
          </h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              New Task
            </button>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Meetings</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
            <p className="mt-2 text-sm text-gray-500">Completed this week</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Tasks</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">8</p>
            <p className="mt-2 text-sm text-gray-500">Pending Tasks</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
            <p className="mt-2 text-3xl font-bold text-yellow-600">5</p>
            <p className="mt-2 text-sm text-gray-500">Generated this month</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Profile Completion</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">80%</p>
            <p className="mt-2 text-sm text-gray-500">Complete your profile</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Meetings Overview</h2>
          <Line data={chartData} />
        </div>
      </div> */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              New Task
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold text-gray-700">Meetings</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
            <p className="mt-2 text-sm text-gray-500">Completed this week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold text-gray-700">Tasks</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">8</p>
            <p className="mt-2 text-sm text-gray-500">Pending Tasks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
            <p className="mt-2 text-3xl font-bold text-yellow-600">5</p>
            <p className="mt-2 text-sm text-gray-500">Generated this month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold text-gray-700">Profile Completion</h2>
            <p className="mt-2 text-3xl font-bold text-purple-600">80%</p>
            <p className="mt-2 text-sm text-gray-500">Complete your profile</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Meetings Overview</h2>
            <Line data={chartData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Meetings</span>
                <span className="text-blue-600 font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tasks</span>
                <span className="text-green-600 font-semibold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Reports</span>
                <span className="text-yellow-600 font-semibold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Profile Completion</span>
                <span className="text-purple-600 font-semibold">80%</span>
              </div>
            </div>
            <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Share Location
            </button>
          </div>
        </div>
      </div>
    </EmpLayout>
  );
}

export default EmpDash;
