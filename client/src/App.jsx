import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider, Box } from "@mui/material";
import theme from "./theme";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";

// Staffs
import Staffs from "./pages/Staffs/Staffs.jsx";
import StaffCreate from "./pages/Staffs/StaffCreate.jsx";

import "./App.css";

const App = () => {
  const defaultTheme = createTheme(theme);
  return (
    <Box className="App">
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* {Staffs} */}
          <Route exact path="/staffs" element={<Staffs />} />
          <Route exact path="/staffs/create" element={<StaffCreate />} />
        </Routes>
        <Footer />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
};

export default App;
