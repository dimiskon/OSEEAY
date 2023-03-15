import React from "react";

import bgImage from "../assets/oseaay.jpg";
import { Paper } from "@mui/material";

const HomePage = () => {
  return (
    <Paper
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: `100vw`,
        height: `77.6vh`,
        backgroundImage: `url(${bgImage})`,
      }}
    ></Paper>
  );
};

export default HomePage;
