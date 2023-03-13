import React from "react";

import { Unstable_Grid2 as Grid } from "@mui/material";

import CustomTextField from "./CustomTextField";
import CustomSelector from "./CustomSelector";

const BasicStaffDataGrid = (props) => {
  const { register, errors, control } = props;
  return (
    <Grid container p={2} spacing={3}>
      <Grid item xs={4}>
        <CustomTextField
          dataKey="name"
          type="text"
          register={register}
          isRequired={true}
          value="Όνομα"
          errors={errors}
        />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          dataKey="surname"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          value="Επώνυμο"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          dataKey="asma"
          type="number"
          step="1"
          register={register}
          isRequired={true}
          errors={errors}
          value="ΑΣΜΑ"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomSelector
          errors={errors}
          value="Σώμα"
          control={control}
          register={register}
          items={["ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ", "ΣΤΡΑΤΟΣ ΞΗΡΑΣ", "ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ"]}
        />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          dataKey="specialization"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          value="Ειδικότητα"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          dataKey="rank"
          type="text"
          register={register}
          isRequired={true}
          errors={errors}
          value="Βαθμός"
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField
          dataKey="mobile_phone"
          type="tel"
          pattern="69[0-9]{8}"
          register={register}
          isRequired={true}
          errors={errors}
          value="Κινητό Τηλέφωνο"
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField
          dataKey="work_phone"
          type="tel"
          pattern="[0-9]{4}"
          register={register}
          isRequired={false}
          errors={errors}
          value="Υπηρεσιακό Τηλέφωνο"
        />
      </Grid>
    </Grid>
  );
};

export default BasicStaffDataGrid;
