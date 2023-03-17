import React from "react";

import { Paper, Button, Typography } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const FormFooter = () => {
  return (
    <Paper
      variant="filled"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "65px",
        borderRadius: "2px",
        bgcolor: "#d9d9d96b",
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ p: 2, m: 1 }}
        startIcon={<SaveAsIcon style={{ fontSize: "1.5rem" }} />}
      >
        <Typography fontSize="1.2rem" fontWeight="bold">
          Save
        </Typography>
      </Button>
    </Paper>
  );
};

export default FormFooter;
