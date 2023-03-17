import React from "react";

import { Box } from "@mui/material";

const TabContext = (props) => {
  const { children, tabValue, index } = props;
  return (
    <div hidden={tabValue !== index} id={`tab-id-${index}`}>
      {tabValue === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
};

export default TabContext;
