import React from "react";

import { Unstable_Grid2 as Grid } from "@mui/material";

import CustomTextField from "../utils/CustomTextField";
import CustomSelector from "../utils/CustomSelector";

const BasicStaffDataGrid = (props) => {
  const { register, errors, control } = props;
  return (
    <Grid container p={2} spacing={3}>
      <Grid item xs={6} md={4}>
        <CustomTextField
          dataKey="name"
          type="text"
          register={register}
          isRequired={true}
          name="Όνομα"
          errors={errors}
        />
      </Grid>
    </Grid>
  );
};

export default BasicStaffDataGrid;
