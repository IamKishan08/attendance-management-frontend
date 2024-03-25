import React from 'react';

const EmployeeList = ({ employees }) => {
 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Master</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">{employee.name}</h3>
            <p className="text-gray-600">{employee.category}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default EmployeeList;
