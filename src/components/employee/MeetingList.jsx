import axios from "axios";
import React, { useEffect, useState } from "react";
import EmpLayout from "../../layout/EmpLayout";

function MeetingList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = JSON.parse(sessionStorage.getItem("userData")).user_id;
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await axios.get(
          `https://prabisvg.com/phpbox/fetch_meetingsbyemp.php?employee_id=${userId}`
        );
        setMeetings(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    fetchMeetings();
  }, [userId]);

  //   const updateMeetingStatus = async (meetingId, status) => {
  //     try {
  //       const res = await axios.post(
  //         "https://prabisvg.com/phpbox/updatestatus_meetings.php",
  //         {
  //           meeting_id: meetingId,
  //           status: status,
  //         }
  //       );
  //       if (res.data.status === "success") {
  //         alert("Meeting status updated successfully");
  //         // Optionally refresh the meetings after the update
  //       } else {
  //         alert("Failed to update meeting status");
  //       }
  //     } catch (error) {
  //       console.error("Error updating meeting status:", error);
  //     }
  //   };

  const updateMeetingStatus = async (meetingId, status) => {
    try {
      await axios.post(
        "https://prabisvg.com/phpbox/updatestatus_meetings.php",
        {
          meeting_id: meetingId,
          status: status,
        }
      );
      // Update the meeting status in local state after successful update
      setMeetings(
        meetings.map((meeting) =>
          meeting.id === meetingId ? { ...meeting, status: status } : meeting
        )
      );
    } catch (error) {
      console.error("Error updating meeting status:", error);
    }
  };

  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    // <EmpLayout>
    //   <div>
    //     <h2>Your Upcoming Meetings</h2>
    //     <table className="min-w-full table-auto">
    //       <thead>
    //         <tr>
    //           <th>Date</th>
    //           <th>Name</th>
    //           <th>Contact</th>
    //           <th>Purpose</th>
    //           <th>Status</th>

    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {meetings.map((meeting) => (
    //           <tr key={meeting.id}>
    //             <td>{meeting.meeting_date}</td>
    //             <td>{meeting.organization_name}</td>
    //             <td>{meeting.organization_contact}</td>
    //             <td>{meeting.purpose}</td>
    //             <td>{meeting.status}</td>
    //             <td>
    //               {meeting.status === "pending" && (
    //                 <div>
    //                   <button
    //                     onClick={() =>
    //                       updateMeetingStatus(meeting.id, "approved")
    //                     }
    //                   >
    //                     Approve
    //                   </button>
    //                   <button
    //                     onClick={() =>
    //                       updateMeetingStatus(meeting.id, "rejected")
    //                     }
    //                   >
    //                     Reject
    //                   </button>
    //                 </div>
    //               )}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </EmpLayout>
    <EmpLayout>
      <div className="bg-gray-100 max-w-full mx-auto p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Your Upcoming Meetings
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Contact</th>
                <th className="text-left py-3 px-4">Purpose</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting) => (
                <tr key={meeting.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{meeting.meeting_date}</td>
                  <td className="border px-4 py-2">
                    {meeting.organization_name}
                  </td>
                  <td className="border px-4 py-2">
                    {meeting.organization_contact}
                  </td>
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
                  <td className="border px-4 py-2">
                    {meeting.status === "pending" && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            updateMeetingStatus(meeting.id, "approved")
                          }
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            updateMeetingStatus(meeting.id, "rejected")
                          }
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EmpLayout>
  );
}

export default MeetingList;
