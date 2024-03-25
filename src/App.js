import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Employees from './component/Employee';
import Attendance from './component/Attendance';

function App() {
 
 return (
     <Router>
      <Routes>
        <Route path='/'  element={ <Dashboard /> }/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/attendence' element={<Attendance/>}/>
      </Routes>
     </Router>
 );
}

export default App;
