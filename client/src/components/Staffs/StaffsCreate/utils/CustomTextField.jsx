import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import { InputLabel, TextField, Typography } from "@mui/material";

const CustomTextField = (props) => {
  const { dataKey, name, isRequired, register, errors, type } = props;

  // console.log({ errors });
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
      />
      <ErrorMessage errors={errors} name={name} as="span" />
    </>
  );
};

export default CustomTextField;
