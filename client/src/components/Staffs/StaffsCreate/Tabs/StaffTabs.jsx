import React from "react";

import { Tabs, Tab, useTheme } from "@mui/material";

const tabHeaders = [
  "Βασικά Στοιχεία",
  "Λοιπά Στοιχεία",
  "Οικογενειακά Στοιχεία",
];

const StaffTabs = ({ handleTabChange, tabValue }) => {
  const theme = useTheme();
  return (
    <Tabs
      TabIndicatorProps={{
        style: {
          background: theme.palette.primary.main,
        },
      }}
      TabScrollButtonProps={{
        sx: {
          border: "2px solid black",
        },
      }}
      variant="fullWidth"
      value={tabValue}
      onChange={handleTabChange}
    >
      {tabHeaders.map((tab, index) => (
        <Tab
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "grey",
            bgcolor: "lightgrey",
            textDecoration: "none",
            textTransform: "none",
            "&.Mui-selected": {
              color: "black",
              bgcolor: "#8E8E90",
            },
          }}
          key={tab}
          label={tab}
          value={index}
        />
      ))}
    </Tabs>
  );
};

export default StaffTabs;
