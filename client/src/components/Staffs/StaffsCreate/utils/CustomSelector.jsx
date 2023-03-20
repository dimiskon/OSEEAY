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
  const { dataKey, items, name, register, control, isRequired = false } = props;
  const { field } = useController({
    name: dataKey,
    control,
  });

  const handleOnChange = (option) => {
    field.onChange(option.value);
  };

  return (
    <>
      <InputLabel>
        <Typography variant="inputLabel">{name}</Typography>
      </InputLabel>
      <FormControl variant="filled" fullWidth>
        <InputLabel required={isRequired}>{name}</InputLabel>
        <Select
          {...register(`${dataKey}`, { required: isRequired })}
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
