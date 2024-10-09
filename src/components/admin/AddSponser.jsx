import React, { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddSponser() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("photo", photo);

    try {
      const res = await axios.post(
        "https://prabisvg.com/phpbox/addsponser.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setMessage(res.data.message);
      if (res.data.success === true) {
        navigate("/dashboard");
        setTitle("");
        setDescription("");
        setPhoto("");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Error uploading file");
    }
  };
  return (
    <AdminLayout>
      <div className="flex w-full items-center justify-center min-h-screen ">
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 border-2 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Sponser</h2>
          {message && (
            <div className="mb-4 text-center text-sm text-gray-700">
              {message}
            </div>
          )}
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block px-2 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                placeholder="Details is Optional"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white text-sm leading-5 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddSponser;
