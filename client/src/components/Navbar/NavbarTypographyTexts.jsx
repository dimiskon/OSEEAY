import React from "react";

import { Typography } from "@mui/material";

const NavbarTypographyTexts = (props) => {
  const { variant, fontSize, fontWeight, text, fontStyle } = props;
  return (
    <Typography
      variant={variant}
      component="a"
      sx={{
        fontSize,
        fontWeight,
        color: "inherit",
        fontStyle,
        textDecoration: "none",
      }}
    >
      {text}
    </Typography>
  );
};

export default NavbarTypographyTexts;
