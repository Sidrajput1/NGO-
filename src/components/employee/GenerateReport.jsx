import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import printJS from "print-js";

function GenerateReport() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");
  //const [reportLink, setReportLink] = useState("");
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          "https://prabisvg.com/phpbox/getemp.php"
        );
        setEmployees(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployee();
  }, []);

  //   const handleGenerateReport = async () => {
  //     if (!selectedEmployee || !startDate || !endDate) {
  //       setMessage("Please fill all fields");
  //       return;
  //     }

  //     try {
  //       const response = await axios.post(
  //         "https://prabisvg.com/phpbox/reports.php",
  //         {
  //           employee_id: selectedEmployee,
  //           start_date: startDate,
  //           end_date: endDate,
  //         }
  //       );

  //       if (response.data.status === "success") {
  //         setMessage("Report generated successfully");
  //         setReportLink(response.data.report_file); // Show the link to the report file
  //       } else {
  //         setMessage(response.data.message);
  //       }
  //     } catch (error) {
  //       console.error("Error generating report:", error);
  //       setMessage("Error generating report");
  //     }
  //   };

  // const handleGenerateReport = async () => {
  //     if (!selectedEmployee || !startDate || !endDate) {
  //       setMessage("Please fill all fields");
  //       return;
  //     }

  //     try {
  //       const response = await axios.post(
  //         "https://prabisvg.com/phpbox/reports.php",
  //         {
  //           employee_id: selectedEmployee,
  //           start_date: startDate,
  //           end_date: endDate,
  //         }
  //       );

  //       if (response.data.status === "success") {
  //         setMessage("Report generated successfully");

  //         // Create a link and trigger a download
  //         const reportUrl = `https://prabisvg.com/phpbox/${response.data.report_file}`;
  //         const link = document.createElement('a');
  //         link.href = reportUrl;
  //         link.setAttribute('download', 'report.pdf'); // You can also use a dynamic name here
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link); // Clean up the link element after triggering download
  //       } else {
  //         setMessage(response.data.message);
  //       }
  //     } catch (error) {
  //       console.error("Error generating report:", error);
  //       setMessage("Error generating report");
  //     }
  //   };

  const handleGenerateReport = async () => {
    if (!selectedEmployee || !startDate || !endDate) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://prabisvg.com/phpbox/reports.php",
        {
          employee_id: selectedEmployee,
          start_date: startDate,
          end_date: endDate,
        }
      );

      if (response.data.status === "success") {
        setMessage("Report generated successfully");
        setReportData(response.data.report); // Store the report data for printing
        console.log(response.data.report);
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
      printable: reportData.interactions,  // JSON data to print
      type: 'json',           // Specify that it's JSON data
      properties: [           // Specify the fields to show in the print table
        { field: 'id', displayName: 'Interaction ID' },
        { field: 'date', displayName: 'Date' },
        { field: 'client_met', displayName: 'Person Met' },
        { field: 'purpose', displayName: 'Purpose' },
        { field: 'address', displayName: 'Address' },
        { field: 'organization_mobile_no', displayName: 'Organization Mobile No' },
        { field: 'organization_name', displayName: 'Organization Name' },
        { field: 'person_personal_number', displayName: 'Personal No' },
        { field: 'remarks', displayName: 'Remarks' }
      ],
      header: `<h3>Employee Interaction Report for Employee ID: ${reportData.employee_id}</h3>
               <p>Date Range: ${reportData.start_date} to ${reportData.end_date}</p>`,  // Header for the print
      gridStyle: 'border: 1px solid #ccc; padding: 8px;', // Optional CSS styling for the table
    });
  };




  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Array.isArray(employees)) {
    return <p>No employees data available.</p>;
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Generate Employee Report</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Employee
          </label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white"
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>

        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Generate Report
        </button>

        {message && <p className="mt-4 text-red-500">{message}</p>}

        {/* {reportLink && (
          <div className="mt-4">
            <p>Report generated:</p>
            <a
              href={reportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Download Report
            </a>
          </div>
        )} */}
        {reportData && (
        <div className="mt-4">
          <p>Report generated:</p>
          <button
            onClick={handlePrintReport}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Print/Download Report
          </button>
        </div>
      )}
      </div>
    </AdminLayout>
  );
}

export default GenerateReport;