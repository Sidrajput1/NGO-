import axios from "axios";
import React, { useState } from "react";
import EmpLayout from "../../layout/EmpLayout";

function FutureMeeting() {
  const [formData, setFormData] = useState({
    employee_id: "3", // Replace with session employee id
    meeting_date: "",
    organization_name: "",
    organization_contact: "",
    purpose: "",
    remarks: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://prabisvg.com/phpbox/futuremeeting.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Submission failed. Try again.");
    }
  };

  return (
    <EmpLayout>
      <div className="max-w-full w-full mx-auto p-6 border-2 bg-white shadow rounded">
        {/* <h2 className="text-xl font-bold mb-4">
          Notify Admin of Future Meeting
        </h2> */}
        <h2 className="text-xl font-bold mb-4">Plan and Track Your Meeting</h2>
        <p className="mb-4 text-gray-700">
          Fill in your basic meeting details to effectively plan your meeting,
          track your progress, and notify the office of future meetings.
        </p>

        {message && <p className="mb-4 text-green-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="meeting_date" className="block text-gray-700">
              Meeting Date:
            </label>
            <input
              type="date"
              id="meeting_date"
              name="meeting_date"
              className="w-full p-2 border rounded"
              value={formData.meeting_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="organization_name" className="block text-gray-700">
              Organization Name:
            </label>
            <input
              type="text"
              id="organization_name"
              name="organization_name"
              className="w-full p-2 border rounded"
              value={formData.organization_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organization_contact"
              className="block text-gray-700"
            >
              Organization Contact:
            </label>
            <input
              type="text"
              id="organization_contact"
              name="organization_contact"
              className="w-full p-2 border rounded"
              value={formData.organization_contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-gray-700">
              Purpose of Meeting:
            </label>
            <input
              type="text"
              id="purpose"
              name="purpose"
              className="w-full p-2 border rounded"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remarks" className="block text-gray-700">
              Remarks:
            </label>
            <textarea
              id="remarks"
              name="remarks"
              className="w-full p-2 border rounded"
              rows="3"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </EmpLayout>
  );
}

export default FutureMeeting;
