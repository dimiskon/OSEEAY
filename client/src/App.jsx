import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import Staffs from './pages/Staffs/Staffs.jsx';

import StaffCreate from './pages/Staffs/StaffCreate.jsx';

import './App.css';

const App = () => {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#03074f"
      },
      secondary: {
        main: '#fff'
      }
    },
    typography: {
      h2: {
        fontSize: '1.5rem',
        fontWeight: 500
      },
      navbar: {
        fontSize: '5rem'
      }
    }
  })
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            {/* {Staffs} */}
            <Route exact path='/staffs' element={<Staffs/>} />
            <Route exact path='/staffs/create' element={<StaffCreate/>} />
          </Routes>
          <Footer className='footer'/>
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App;
