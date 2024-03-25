import React from 'react';

const AttendanceList = ({ attendances }) => {
 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Master</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendances.map((attendance) => (
          <div key={attendance.id} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">{attendance.date}</h3>
            <p className="text-gray-600">{attendance.isPresent ? 'Present' : 'Absent'}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default AttendanceList;
