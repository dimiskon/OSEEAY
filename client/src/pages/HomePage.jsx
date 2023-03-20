import React from "react";

import bgImage from "../assets/oseaay.jpg";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
      }}
    ></Box>
  );
};

export default HomePage;
