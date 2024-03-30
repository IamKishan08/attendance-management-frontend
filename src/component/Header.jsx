import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';

const Header = () => {
 return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center text-white hover:text-gray-200">
          <ChevronLeftIcon className="w-6 h-6" />
          <span className="ml-2">Back</span>
        </Link>
        <h1 className="text-2xl font-bold">Attendance Management System</h1>
        <div></div> {/* This empty div is just for centering the header text */}
      </div>
    </header>
 );
};

export default Header;
