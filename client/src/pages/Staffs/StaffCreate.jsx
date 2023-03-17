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
      <Paper sx={{ width: { md: "80vw" }, m: 4 }} elevation={8}>
        <Tabs
          sx={{
            bgcolor: "#03074f",
          }}
          value={tabValue}
          onChange={handleTabChange}
        >
          {tabHeaders.map((tab, index) => (
            <Tab
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "#fff",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "rgba(100, 95, 228, 0.32)",
                },
              }}
              key={tab}
              label={tab}
              value={index}
            />
          ))}
        </Tabs>
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
