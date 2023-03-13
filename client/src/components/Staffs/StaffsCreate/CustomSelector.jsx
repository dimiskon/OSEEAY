import React from "react";

import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";

import { useController } from "react-hook-form";

const CustomSelector = (props) => {
  const { items, value, register, control } = props;
  const { field } = useController({
    name: `Σώμα`,
    control,
  });

  const handleOnChange = (option) => {
    field.onChange(option.value);
  };
  return (
    <>
      <InputLabel>
        <Typography variant="inputLabel">{value}</Typography>
      </InputLabel>
      <FormControl variant="filled" fullWidth>
        <InputLabel required>{value}</InputLabel>
        <Select
          {...register(`${value}`, { required: true })}
          variant="filled"
          onChange={handleOnChange}
          defaultValue=""
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelector;
