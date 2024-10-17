import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";

function RegsEmp() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    mobile_no: "",
    address: "",
    role: "",
    empcode: "",
    profile_pic: null,
  });

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    // Set the current date
    const today = new Date().toISOString().split('T')[0];
    setFormData(prevData => ({ ...prevData, dob: today }));
}, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
        ...formData,
        profile_pic: e.target.files[0]
    });
};

 // do one thing add one more thing 
//   const handleSubmit = async (e) => { 
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "https://prabisvg.com/phpbox/regsemp.php", // Update with your API URL
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true, // Ensure cookies are sent with the request
//         }
//       );
//       setResponseMessage(res.data.message);
//     } catch (error) {
//       console.error("Error submitting employee registration form:", error);
//       setResponseMessage("There was an error registering the employee.");
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
    });

    try {
        const res = await axios.post(
            "https://prabisvg.com/phpbox/regsemp.php", // Update with your API URL
            formDataToSend,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true // Ensure cookies are sent with the request
            }
        );
        setResponseMessage(res.data.message);
    } catch (error) {
        console.error("Error submitting employee registration form:", error);
        setResponseMessage("There was an error registering the employee.");
    }
};

  return (
    <AdminLayout>
      {/* <div className=" h-auto w-full overflow-scroll  mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center  text-blue-800">
          Employee Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Register
          </button>
          {responseMessage && (
            <div className="text-center text-red-500 mt-4">
              {responseMessage}
            </div>
          )}
        </form>
      </div> */}
      <div className="container overflow-scroll mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Employee Registration</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                {Object.keys(formData).filter(key => key !== 'profile_pic').map((key) => (
                    <div key={key}>
                        <label htmlFor={key} className="block text-gray-700 text-sm font-bold mb-2">
                            {key.replace('_', ' ').toUpperCase()}
                        </label>
                        {key === 'gender' ? (
                            <select
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : (
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        )}
                    </div>
                ))}
                <div>
                    <label htmlFor="profile_pic" className="block text-gray-700 text-sm font-bold mb-2">
                        PROFILE PICTURE
                    </label>
                    <input
                        type="file"
                        id="profile_pic"
                        name="profile_pic"
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Register
                </button>
                {responseMessage && (
                    <div className="text-center text-red-500 mt-4">
                        {responseMessage}
                    </div>
                )}
            </form>
        </div>
    </AdminLayout>
  );
}

export default RegsEmp;
