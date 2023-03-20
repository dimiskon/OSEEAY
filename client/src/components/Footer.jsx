import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const FooterMUi = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        bgcolor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" color="white">
        &copy; 2023 110ΠΜ-ΟΣΕΑΑΥ
      </Typography>
    </Box>
  );
};

export default FooterMUi;
