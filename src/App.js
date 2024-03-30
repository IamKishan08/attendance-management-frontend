import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Employees from './component/Employee';
import Attendance from './component/Attendance';
import EmployeeTable from './component/EmployeeTable';
import Example from './component/test';

function App() {
 
 return (
     <Router>
      <Routes>
        <Route path='/'  element={ <Dashboard /> }/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/attendence' element={<Attendance/>}/>
        <Route path='/emp' element={<EmployeeTable/>}/>
        <Route path='/exam' element={<Example/>}/>
      </Routes>
     </Router>
 );
}

export default App;
