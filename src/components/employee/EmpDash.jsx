import React from "react";
import EmpLayout from "../../layout/EmpLayout";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // For Chart.js



function EmpDash() {
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
  return (
    <EmpLayout>
      <div className="flex-1 p-6">
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
          {/* Meetings Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Meetings</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
            <p className="mt-2 text-sm text-gray-500">Completed this week</p>
          </div>

          {/* Tasks Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Tasks</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">8</p>
            <p className="mt-2 text-sm text-gray-500">Pending Tasks</p>
          </div>

          {/* Reports Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
            <p className="mt-2 text-3xl font-bold text-yellow-600">5</p>
            <p className="mt-2 text-sm text-gray-500">Generated this month</p>
          </div>

          {/* Profile Completion Card */}
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
      </div>
    </EmpLayout>
  );
}

export default EmpDash;
