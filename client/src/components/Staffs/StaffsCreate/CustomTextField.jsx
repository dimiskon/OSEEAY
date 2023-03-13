import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { InputLabel, TextField, Typography } from "@mui/material";

const CustomTextField = (props) => {
  const { value, isRequired, register, errors, type } = props;

  // console.log({ errors });
  return (
    <>
      <InputLabel>
        <Typography variant="inputLabel">{value}</Typography>
      </InputLabel>
      <TextField
        type={type}
        // @see https://stackoverflow.com/a/66935286
        {...register(`${value}`, {
          required: isRequired,
        })}
        // error={"Required"}
        // helperText={errors[value] ? errors[value].message : null}
        name={value}
        autoFocus
        required={isRequired}
        variant="filled"
        placeholder={value + "..."}
        label={value}
        fullWidth
      />
      <ErrorMessage errors={errors} name={value} as="span" />
    </>
  );
};

export default CustomTextField;
