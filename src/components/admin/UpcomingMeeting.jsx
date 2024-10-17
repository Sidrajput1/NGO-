import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";

function UpcomingMeeting() {
  const [meetings, setMeetings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading,setLoading] = useState('');

  const fetchMeetings = async (status = null) => {
    try {
      const query = status ? `?status=${status}` : "";
      const res = await axios.get(
        `https://prabisvg.com/phpbox/adminfetch_futuremeetings.php${query}`
      );
      setMeetings(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meetings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings(statusFilter);
  }, [statusFilter]);

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <AdminLayout>
      <div className="bg-grya-100 p-8 shadow-md rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Upcoming Meetings</h2>

        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button  onClick={() => setStatusFilter(null)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">All Meetings</button>
          <button onClick={() => setStatusFilter("approved")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         >
            Approved Meetings
          </button>
          <button onClick={() => setStatusFilter("rejected")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Rejected Meetings
          </button>
          <button onClick={() => setStatusFilter("pending")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Pending Meetings
          </button>
        </div>

        {/* Table for displaying meeting requests */}
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Employee Name</th>
              <th className="text-left py-2 px-4">Meeting Date</th>
              <th className="text-left py-2 px-4">Organization Name</th>
              <th className="text-left py-2 px-4">Organization Contact</th>
              <th className="text-left py-2 px-4">Purpose</th>
              <th className="text-left py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting) => (
              <tr key={meeting.id}>
                <td className="border px-4 py-2">{meeting.employee_name}</td>
                <td className="border px-4 py-2">{meeting.meeting_date}</td>
                <td className="border px-4 py-2">{meeting.organization_name}</td>
                <td className="border px-4 py-2">{meeting.organization_contact}</td>
                <td className="border px-4 py-2">{meeting.purpose}</td>
                <td
                  className={`border px-4 py-2 ${
                    meeting.status === "approved"
                      ? "text-green-600"
                      : meeting.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {meeting.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default UpcomingMeeting;
