import React, { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import axios from "axios";
function AddNotice() {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting notice:", formData);
      const response = await axios.post(
        "https://prabisvg.com/phpbox/addnotice.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setFormData({ title: "", details: "" });
      alert("Notice Created Successfully");
    } catch (error) {
      console.error(
        "Error creating notice:",
        error.response?.data?.message || error.message
      );
      alert("Failed to create notice. Please try again.");
    }
  };

  return (
    <AdminLayout>
      <div className="m-auto flex items-center justify-center md:w-[60%] w-full border-2 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl  p-8 bg-gray-100 rounded shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Create Notice</h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block text-gray-700 font-bold mb-2"
            >
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Notice
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddNotice;
