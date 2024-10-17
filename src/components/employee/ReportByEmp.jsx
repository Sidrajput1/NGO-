import axios from "axios";
import printJS from "print-js";
import React, { useState } from "react";
import EmpLayout from "../../layout/EmpLayout";

function ReportByEmp() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");
  const [reportData, setReportData] = useState(null);

  const employeeId = JSON.parse(sessionStorage.getItem("userData")).user_id;

  const handleGenerateReport = async () => {
    if (!startDate || !endDate) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://prabisvg.com/phpbox/reports_byemp.php",
        {
            employee_id: employeeId,
          start_date: startDate,
          end_date: endDate,
        }
      );
      if (response.data.status === "success") {
        setMessage("Report generated successfully");
        setReportData(response.data.report); // Store the JSON report data
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error generating report:", error);
      setMessage("Error generating report");
    }
  };

  const handlePrintReport = () => {
    if (!reportData) return;

    printJS({
      printable: reportData.interactions, // JSON data to print
      type: "json", // Specify that it's JSON data
      properties: [
        // Specify the fields to show in the print table
        { field: "id", displayName: "Interaction ID" },
        { field: "date", displayName: "Date" },
        { field: "client_met", displayName: "Person Met" },
        { field: "purpose", displayName: "Purpose" },
        { field: "address", displayName: "Address" },
        {
          field: "organization_mobile_no",
          displayName: "Organization Mobile No",
        },
        { field: "organization_name", displayName: "Organization Name" },
        { field: "remarks", displayName: "Remarks" },
      ],
      header: `<h3>Employee Interaction Report for Employee ID: ${reportData.employee_id}</h3>
               <p>Date Range: ${reportData.start_date} to ${reportData.end_date}</p>`, // Header for the print
      gridStyle: "border: 1px solid #ccc; padding: 8px;", // Optional CSS styling for the table
    });
  };
  return (
    <EmpLayout>
      <div className="bg-gray-50 w-full  max-w-[80%] mx-auto p-8 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Generate Your Report
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white"
          />
        </div>
        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Generate Report
        </button>
        {message && <p className="mt-4 text-red-600">{message}</p>}
        {reportData && (
          <div className="mt-4">
            <p className="text-green-600">Report generated:</p>
            <button
              onClick={handlePrintReport}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Print/Download Report
            </button>
          </div>
        )}
      </div>
    </EmpLayout>
  );
}

export default ReportByEmp;
