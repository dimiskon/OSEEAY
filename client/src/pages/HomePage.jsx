import React from "react";

import bgImage from "../assets/oseaay.jpg";
import { Paper } from "@mui/material";

const HomePage = () => {
  return (
    <Paper
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: `100%`,
        height: `77.6vh`,
        backgroundImage: `url(${bgImage})`,
      }}
    ></Paper>
  );
};

export default HomePage;
