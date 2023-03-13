import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import BasicStaffDataGrid from "../../components/Staffs/StaffsCreate/BasicStaffDataGrid";
import FormFooter from "../../components/Staffs/StaffsCreate/FormFooter";

const StaffCreateMUi = () => {
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

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Paper
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
      </Paper>
    </Box>
  );
};

export default StaffCreateMUi;
