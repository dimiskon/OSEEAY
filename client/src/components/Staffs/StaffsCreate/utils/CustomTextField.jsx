import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { InputLabel, TextField, Typography } from "@mui/material";

const CustomTextField = (props) => {
  const { dataKey, name, isRequired, register, errors, type } = props;
  return (
    <>
      <InputLabel>
        <Typography variant="inputLabel">{name}</Typography>
      </InputLabel>
      <TextField
        type={type}
        // @see https://stackoverflow.com/a/66935286
        {...register(`${dataKey}`, {
          required: isRequired,
        })}
        // error={"Required"}
        // helperText={errors[name] ? errors[name].message : null}
        name={dataKey}
        autoFocus
        required={isRequired}
        variant="filled"
        placeholder={name + "..."}
        label={name}
        fullWidth
        error={errors[dataKey]?.message ? true : false}
      />
      <Typography variant="p" color="error">
        {errors[dataKey]?.message}
      </Typography>
    </>
  );
};

export default CustomTextField;
