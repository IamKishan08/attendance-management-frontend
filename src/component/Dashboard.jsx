import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      

      {/* Main Content */}
      {/* Main Content */}
<div className="flex-1 p-4 flex items-center justify-center" id="particles-js">
 <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Welcome to Attendance Management System</h2>
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link to="/employees" className="bg-blue-500 text-white px-4 py-2 rounded">Employee Master</Link>
      <Link to="/attendence" className="bg-blue-500 text-white px-4 py-2 rounded">Attendance Details</Link>
    </div>
 </div>
</div>

    </div>
 );
};

export default Dashboard;
