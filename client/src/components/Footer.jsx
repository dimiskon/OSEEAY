import React from "react";
import { Box, Typography } from "@mui/material";

const FooterMUi = (props) => {
  const { theme } = props;
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
      <Typography variant="h5" color="white">
        &copy; 2023 110ΠΜ-ΟΣΕΑΑΥ
      </Typography>
    </Box>
  );
};

export default FooterMUi;
