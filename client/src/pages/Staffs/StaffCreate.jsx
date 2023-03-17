import React, { useState } from "react";
import { Box, Paper, Typography, Tabs, Tab } from "@mui/material";
import { useForm } from "react-hook-form";

import BasicStaffDataGrid from "../../components/Staffs/StaffsCreate/DataGrids/BasicStaffDataGrid";
import FormFooter from "../../components/Staffs/StaffsCreate/FormFooter";
import TabContext from "../../components/Staffs/StaffsCreate/Tabs/TabContext";

const tabHeaders = [
  "Βασικά Στοιχεία",
  "Λοιπά Στοιχεία",
  "Οικογενειακά Στοιχεία",
];

const StaffCreate = () => {
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
    <Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ width: "50vw", m: 4 }} elevation={8}>
        <Tabs
          sx={{
            bgcolor: "lightgrey",
          }}
          variant="fullWidth"
          value={tabValue}
          onChange={handleTabChange}
        >
          {tabHeaders.map((tab, index) => (
            <Tab
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "grey",
                textDecoration: "none",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "black",
                },
              }}
              key={tab}
              label={tab}
              value={index}
            />
          ))}
        </Tabs>
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "center",
            p: 2,
          }}
        >
          <Typography variant="h2" fontSize="2rem" fontWeight="700">
            Στοιχεία Προσωπικού
          </Typography>
        </Box>
        <TabContext tabValue={tabValue} index={0}>
          <BasicStaffDataGrid
            control={control}
            errors={errors}
            register={register}
          />
        </TabContext>
        <FormFooter />
      </Paper>
      {/* <Paper
        sx={{
          m: 4,
          width: "60rem",
          minWidth: "20rem",
        }}
        elevation={6}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "#03074f",
              fontSize: "2rem",
              p: "20px 0px 10px 15px",
            }}
          >
            Στοιχεία Προσωπικού
          </Typography>
        </Box>
        <BasicStaffDataGrid
          control={control}
          errors={errors}
          register={register}
        />
        <FormFooter />
      </Paper> */}
    </Box>
  );
};

export default StaffCreate;
