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
      <Grid item xs={6} md={4}>
        <CustomTextField
          dataKey="surname"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          name="Επώνυμο"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <CustomTextField
          dataKey="asma"
          type="number"
          step="1"
          register={register}
          isRequired={true}
          errors={errors}
          name="ΑΣΜΑ"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <CustomSelector
          dataKey="unit"
          errors={errors}
          name="Σώμα"
          control={control}
          register={register}
          items={["ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ", "ΣΤΡΑΤΟΣ ΞΗΡΑΣ", "ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ"]}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <CustomTextField
          dataKey="specialization"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          name="Ειδικότητα"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <CustomTextField
          dataKey="rank"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          name="Βαθμός"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          dataKey="mobile_phone"
          type="tel"
          pattern="69[0-9]{8}"
          register={register}
          isRequired={true}
          errors={errors}
          name="Κινητό Τηλέφωνο"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          dataKey="work_phone"
          type="tel"
          pattern="[0-9]{4}"
          register={register}
          isRequired={false}
          errors={errors}
          name="Υπηρεσιακό Τηλέφωνο"
        />
      </Grid>
    </Grid>
  );
};

export default BasicStaffDataGrid;
