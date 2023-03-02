import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import Staffs from './pages/Staffs/Staffs.jsx';
import StaffCreate from './pages/Staffs/StaffCreate.jsx';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/staffs' element={<Staffs/>} />
          <Route exact path='/staffs/create' element={<StaffCreate/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
