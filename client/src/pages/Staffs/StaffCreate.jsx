import React, { useState } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import BasicStaffDataGrid from "../../components/Staffs/StaffsCreate/DataGrids/BasicStaffDataGrid";
import FormFooter from "../../components/Staffs/StaffsCreate/FormFooter";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import StaffMetaDataGrid from "../../components/Staffs/StaffsCreate/DataGrids/StaffMetaDataGrid";

const StaffCreate = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Typography variant="h2" fontWeight="700">
          Στοιχεία Προσωπικού
        </Typography>
      </Box> */}
      <Paper sx={{ m: 6, width: "75%" }} elevation={10}>
        {/* <StaffTabs handleTabChange={handleTabChange} tabValue={tabValue} /> */}
        {/* <TabContext tabValue={tabValue} index={0}> */}
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={8}>
            <Typography p={2} variant="h2" fontWeight="700">
              Στοιχεία Προσωπικού
            </Typography>
            <BasicStaffDataGrid
              control={control}
              errors={errors}
              register={register}
            />
          </Grid2>
          <Grid2 item xs={8} md={4}>
            <Typography p={2} variant="h2" fontWeight="700">
              Υπηρεσιακά Στοιχεία
            </Typography>
            <StaffMetaDataGrid
              control={control}
              errors={errors}
              register={register}
            />
          </Grid2>
        </Grid2>
        {/* </TabContext> */}
        <FormFooter />
      </Paper>
    </Box>
  );
};

export default StaffCreate;
