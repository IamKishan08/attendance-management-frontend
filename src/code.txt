import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [employees, setEmployees] = useState([]);
 const [attendances, setAttendances] = useState([]);
 const username = 'user';
 const password = 'password';
 const encodedCredentials = btoa(username + ':' + password);
 useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/employees', {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        });
        setEmployees(response.data);
     } catch (error) {
        console.error('Error fetching employees:', error);
     }
    };

    const fetchAttendances = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/attendance', {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        });
        
        setAttendances(response.data);
     } catch (error) {
        console.error('Error fetching Attendance:', error);
     }
    };

    fetchEmployees();
    fetchAttendances();
 }, [encodedCredentials]);
 
 function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
 
  return `${day}-${month}-${year}`;
 }
 


 return (
  <div className="App">
  {/* Employee Table */}
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Employee Master</h2>
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Employee ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Category</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="border px-4 py-2">{employee.id}</td>
            <td className="border px-4 py-2">{employee.employeeId}</td>
            <td className="border px-4 py-2">{employee.name}</td>
            <td className="border px-4 py-2">{employee.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Attendance Table */}
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Attendance Master</h2>
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Employee ID</th>
          <th className="px-4 py-2">Employee Name</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Work Day</th>
          <th className="px-4 py-2">OT Day</th>
        </tr>
      </thead>
      <tbody>
        {attendances.map((attendance) => (
          <tr key={attendance.id}>
            <td className="border px-4 py-2">{attendance.id}</td>
            <td className="border px-4 py-2">{attendance.employeeId}</td>
            <td className="border px-4 py-2">{attendance.employeeName}</td>
            <td className="border px-4 py-2">{formatDate(attendance.date)}</td>
            <td className="border px-4 py-2">{attendance.workDay}</td>
            <td className="border px-4 py-2">{attendance.otday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
 );
}

export default App;
