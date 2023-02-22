import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import Staffs from './pages/Staffs';
import StaffCreate from './pages/StaffCreate';

import './ApiRouter.css';

const ApiRouter = () => {
  return (
    <div className='ApiRouter'>
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

export default ApiRouter;
