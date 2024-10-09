import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

function UpdateStory() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPic = async () => {
      try {
        const response = await axios.get(
          `https://prabisvg.com/phpbox/fetchstory.php?id=${id}`
        );
        
        //const photoData = response.data.photos[0];
        const photoData = response.data.photos.find((photo) => photo.id === id);
        console.log(photoData);
        setPhoto(photoData);
        setTitle(photoData.title || "");
        setDescription(photoData.description || "");
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchAllPic();
  }, [id]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdate = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("id", photo.id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("photo", selectedFile);

    try {
      const response = await axios.post(
        "https://prabisvg.com/phpbox/updatestory.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success === true) {
        alert("Photo Updated successfully");
        navigate("/dashboard");

        // Optionally redirect or show success message
      } else {
        console.error("Failed to update photo:", response.data.message);
        // Optionally show error message
      }
    } catch (error) {
      console.error("Error updating photo:", error);
      // Optionally show error message
    }
  };

  if (!photo) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <div className="flex mx-auto border-2 items-center justify-center min-h-screen ">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Update Photo</h2>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Details:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Upload New Photo:
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Update Photo
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default UpdateStory;
