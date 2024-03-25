import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="flex space-x-4">
        <Link to="/employees" className="bg-blue-500 text-white px-4 py-2 rounded">Employees</Link>
        <Link to="/attendence" className="bg-blue-500 text-white px-4 py-2 rounded">Attendance</Link>
      </div>
    </div>
 );
};

export default Dashboard;
