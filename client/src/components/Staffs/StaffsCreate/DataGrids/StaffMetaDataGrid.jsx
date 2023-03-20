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
    <Grid2 container p={2} spacing={5}>
      <Grid2 item xs={12} md={10}>
        <CustomTextField
          dataKey="staff_metadata.points"
          type="number"
          register={register}
          isRequired={true}
          name="Πόντους"
          errors={errors}
        />
      </Grid2>
      <Grid2 xs={12} md={10} item>
        <Typography variant="inputLabel">Ειδική Κατηγορία</Typography>
        <Checkbox
          sx={{ ml: 1 }}
          checked={isSpecialCategory}
          onChange={() => setIsSpecialCategory(!isSpecialCategory)}
        />
        {isSpecialCategory && (
          <CustomSelector
            dataKey="staff_metadata.special_category"
            name={"Ειδική Κατηγορία"}
            isRequired={false}
            register={register}
            control={control}
            errors={errors}
            items={["ΠΟΛΥΤΕΚΝΙΑ", "ΤΡΙΤΕΚΝΙΑ", "ΑΜΕΑ", "ΜΟΝΟΓΟΝΕΙΚΗ"]}
          />
        )}
      </Grid2>
      <Grid2 xs={12} md={10} item display="flex" alignItems="center">
        <Typography variant="inputLabel">Θέση Ευθύνης</Typography>
        <Checkbox
          name="staff_metadata.mta_payment"
          {...register("staff_metadata.mta_payment")}
        />
      </Grid2>
    </Grid2>
  );
};

export default StaffMetaDataGrid;
