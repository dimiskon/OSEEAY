import React, { useState } from "react";

import {
  Unstable_Grid2 as Grid2,
  Switch,
  Typography,
  Checkbox,
} from "@mui/material";

import CustomTextField from "../utils/CustomTextField";
import CustomSelector from "../utils/CustomSelector";

const StaffMetaDataGrid = (props) => {
  const { register, errors, control } = props;
  const [isSpecialCategory, setIsSpecialCategory] = useState(false);

  return (
    <Grid2 container p={2} spacing={3}>
      <Grid2 item xs={12} md={8}>
        <CustomTextField
          dataKey="points"
          type="number"
          register={register}
          isRequired={true}
          name="Πόντους"
          errors={errors}
        />
      </Grid2>
      <Grid2 item xs={12} md={8}>
        <Typography variant="inputLabel">Ειδική Κατηγορία</Typography>
        <Checkbox
          sx={{ ml: 1 }}
          checked={isSpecialCategory}
          onChange={() => setIsSpecialCategory(!isSpecialCategory)}
        />
        {isSpecialCategory && (
          <CustomSelector
            dataKey="special_category"
            name={null}
            isRequired={false}
            register={register}
            control={control}
            errors={errors}
            items={["ΠΟΛΥΤΕΚΝΙΑ", "ΤΡΙΤΕΚΝΙΑ", "ΑΜΕΑ", "ΜΟΝΟΓΟΝΕΙΚΗ"]}
          />
        )}
      </Grid2>
      <Grid2 item xs={12} md={6}>
        <Typography variant="inputLabel">Θέση Ευθύνης</Typography>
        <Checkbox sx={{ ml: 1 }} />
      </Grid2>
      <Grid2 item xs={12} md={6}></Grid2>
    </Grid2>
  );
};

export default StaffMetaDataGrid;
