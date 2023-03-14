import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

// Components
import NavbarMUi from "./components/NavabarMUi";
import FooterMUi from "./components/FooterMUi.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";

// Staffs
import Staffs from "./pages/Staffs/Staffs.jsx";
import StaffCreateMUi from "./pages/Staffs/StaffCreateMUi.jsx";

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
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        {/* <Navbar className="navbar" /> */}
        <NavbarMUi className="navbar" />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* {Staffs} */}
          <Route exact path="/staffs" element={<Staffs />} />
          <Route exact path="/staffs/create" element={<StaffCreateMUi />} />
        </Routes>
        <FooterMUi theme={defaultTheme} className="footer" />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};

export default App;
