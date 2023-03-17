import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider, Box } from "@mui/material";

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
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#03074f",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      h2: {
        fontSize: "1.5rem",
      },
      inputLabel: {
        fontSize: "1rem",
        color: "#03074f",
        fontWeight: "bold",
      },
      h4: {
        color: "white",
        fontSize: "1rem",
        "@media (max-width:600px)": {
          fontSize: "0.8rem",
        },
      },
      navbar: {
        fontSize: "5rem",
      },
    },
  });
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
        <Footer theme={defaultTheme} />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
};

export default App;
