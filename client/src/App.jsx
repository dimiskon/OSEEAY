import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';

// Staffs
import Staffs from './pages/Staffs/Staffs.jsx';
import StaffCreateMUi from './pages/Staffs/StaffCreateMUi.jsx';

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
      },
      inputLabel: {
        fontSize: '1rem',
        color: '#03074f',
        fontWeight: 'bold'
      },
      h4: {
        color: 'white',
        fontSize: '1rem',
        '@media (max-width:600px)': {
          fontSize: '0.8rem',
        },
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
            <Route exact path='/staffs/create' element={<StaffCreateMUi/>} />
            {/* <Route exact path='/staffs/create' element={<StaffCreate/>} /> */}
          </Routes>
          <Footer className='footer'/>
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App;
