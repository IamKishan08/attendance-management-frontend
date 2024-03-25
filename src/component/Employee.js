import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employees = () => {
 
const [employees, setEmployees] = useState([]);   

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
    fetchEmployees();
 }, [encodedCredentials]);

 return (
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
 );
};

export default Employees;