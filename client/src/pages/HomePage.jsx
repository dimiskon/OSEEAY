import React from "react";

import bgImage from "../assets/oseaay.jpg";
import { Paper } from "@mui/material";

const HomePage = () => {
  return (
    <Paper
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
      }}
    ></Paper>
  );
};

export default HomePage;
