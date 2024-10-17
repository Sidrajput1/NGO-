import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layout/AdminLayout';

function GetEmp() {
    const [employees,setEmployees] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const response = await axios.get("https://prabisvg.com/phpbox/getemp.php");
            setEmployees(response.data.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching employees:", error);
            setLoading(false);
          }
        };
        fetchEmployees();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }
  return (
    <AdminLayout>
         <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Profile Picture</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Emp Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">
                <img
                  src={employee.profile_pic}
                  alt={employee.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border-b">{employee.name}</td>
              <td className="py-2 px-4 border-b">{employee.dob}</td>
              <td className="py-2 px-4 border-b">{employee.gender}</td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              <td className="py-2 px-4 border-b">{employee.mobile_no}</td>
              <td className="py-2 px-4 border-b">{employee.address}</td>
              <td className="py-2 px-4 border-b">{employee.role}</td>
              <td className="py-2 px-4 border-b">{employee.empcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminLayout>
  )
}

export default GetEmp