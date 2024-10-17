import React, { useEffect, useState } from "react";
import EmpLayout from "../../layout/EmpLayout";
import handleReport from "./handlereport";
import axios from "axios";

function MakeReport() {
    // useEffect(()=>{
    //     handleReport();
    // },[])
    
    const [formData, setFormData] = useState({
        employee_id: "",
        date: "",
        organization_name: "",
        organization_mobile_no: "",
        client_met: "", 
        purpose: "",
        person_personal_number: "",
        address: "",
        remarks: ""
      });
      const [responseMessage, setResponseMessage] = useState("");

      
    
      const handleInputChange = (e) => {
        const { name, value } = e.target; 
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post(
            "https://prabisvg.com/phpbox/interactions.php", // Update with your API URL
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true
            }
          );
    
          setResponseMessage(res.data.message);
        } catch (error) {
          console.error("Error submitting interaction log:", error);
          setResponseMessage("There was an error logging your interaction.");
        }
      };
  return (
    <EmpLayout>
      {/* <main className=" w-full flex items-start justify-center h-auto">
        <div className="bg-white p-8 rounded shadow-md w-full h-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Log Today's Interaction</h2>
          <form id="interactionForm">
            <div className="mb-4">
            <label for="empid" className="block text-gray-700">
                Emp Id:
              </label>
              <input
                type="number"
                id="empid"
                name="empid"
                className="w-full px-3 py-2 border rounded"
                required
              />

            </div>
            <div className="mb-4">
              <label for="date" className="block text-gray-700">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div  className="mb-4">
                <label htmlFor="organization Name" className="block text-gray-700"> 
                    Organization Name:
                </label>
                <input 
                    type="text" 
                    id="organization_name"
                    name="organization_name"
                    className="w-full px-3 py-2 border rounded"
                />

            </div>
            <div className="mb-4">
                <label htmlFor="organization_mobile_no" className="block text-gray-700">
                    Organization Mobile No:
                </label>
                <input 
                    type="text" 
                    id="organization_mobile_no"
                    name="organization_mobile_no"
                    className="w-full px-3 py-2 border rounded"

                />

            </div>
            <div className="mb-4">
              <label for="person_met" className="block text-gray-700">
                Person Met:
              </label>
              <input
                type="text"
                id="person_met"
                name="person_met"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label for="purpose" className="block text-gray-700">
                Purpose of Meeting:
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label for="person_persnal_no" className="block text-gray-700">
                Person Personal No:
              </label>
              <input
                type="text"
                id="person_persnal_no"
                name="person_persnal_no"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label for="address" className="block text-gray-700">
               Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label for="notes" className="block text-gray-700">
                Remarks:
              </label>
              <textarea
                id="remarks"
                name="remarks"
                className="w-full px-3 py-2 border rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
          <div id="responseMessage" className="mt-4"></div>
        </div>
      </main> */}
      <main className="w-full flex items-start justify-center h-auto">
      <div className="bg-white p-8 rounded shadow-md w-full h-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">Log Today's Interaction</h2>
        <form id="interactionForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="empid" className="block text-gray-700">
              Emp Id:
            </label>
            <input
              type="number"
              id="employee_id"
              name="employee_id"
              className="w-full px-3 py-2 border rounded"
              value={formData.employee_id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-3 py-2 border rounded"
              value={formData.date}
              onChange={handleInputChange}
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
              className="w-full px-3 py-2 border rounded"
              value={formData.organization_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organization_mobile_no"
              className="block text-gray-700"
            >
              Organization Mobile No:
            </label>
            <input
              type="text"
              id="organization_mobile_no"
              name="organization_mobile_no"
              className="w-full px-3 py-2 border rounded"
              value={formData.organization_mobile_no}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="client_met" className="block text-gray-700">
              Client Met:
            </label>
            <input
              type="text"
              id="client_met"
              name="client_met"
              className="w-full px-3 py-2 border rounded"
              value={formData.client_met}
              onChange={handleInputChange}
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
              className="w-full px-3 py-2 border rounded"
              value={formData.purpose}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="person_persnal_no"
              className="block text-gray-700"
            >
              Person Personal No:
            </label>
            <input
              type="text"
              id="person_personal_number"
              name="person_personal_number"
              className="w-full px-3 py-2 border rounded"
              value={formData.person_personal_number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded"
              value={formData.address}
              onChange={handleInputChange}
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
              className="w-full px-3 py-2 border rounded"
              rows="4"
              value={formData.remarks}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
        {responseMessage && (
          <div id="responseMessage" className="mt-4 text-green-500">
            {responseMessage}
          </div>
        )}
      </div>
    </main>
    </EmpLayout>
  );
}

export default MakeReport;
