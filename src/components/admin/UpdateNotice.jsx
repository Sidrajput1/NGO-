import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

function UpdateNotice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchNoticeDetails = async () => {
    try {
      const res = await axios.get(
        `https://prabisvg.com/phpbox/fetchnotice.php?id=${id}`
      );
      if (res.data.success) {
        const notice = res.data.data[0];
        setTitle(notice.title);
        setDetails(notice.details);
        setLoading(false);
      } else {
        alert("Failed to fetch notice details.");
      }
    } catch (error) {
      console.error("Error fetching notice details:", error);
      alert("Failed to fetch notice details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchNoticeDetails();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await axios.post(
        "https://prabisvg.com/phpbox/updatenotice.php",
        {
          id,
          title,
          details,
        }
      );
      if (res.data.success === true) {
        alert("Notice updated successfully.");
        navigate("/admindashboard");
      } else {
        alert("Failed to update notice. Please try again later.");
      }
    } catch (error) {
      console.error("Error updating notice:", error);
      alert("Failed to update notice. Please try again later.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="m-auto flex flex-col items-center justify-center md:w-[60%] w-full border-2 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Notice</h2>
        <div className="mb-4 md:w-[50%] w-full">
          <label className="block text-gray-700 font-semibold mb-2">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 md:w-[50%] w-full">
          <label className="block text-gray-700 font-semibold mb-2">
            Details:
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="md:w-[50%] w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Notice
        </button>
      </div>
    </AdminLayout>
  );
}

export default UpdateNotice;
