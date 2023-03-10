import React from 'react';

import { InputLabel, TextField, Typography } from '@mui/material';

const CustomTextField = (props) => {
  const { name, dataKey, isRequired, data, handleInputChange } = props;
  return (
    <>
      <InputLabel>
        <Typography variant='inputLabel'>{name}</Typography>
      </InputLabel>
      <TextField
        onChange={handleInputChange}
        name={name}
        value={data[dataKey]}
        required={isRequired}
        variant='filled'
        placeholder={name + '...'}
        label={name}
        fullWidth
      />
    </>
  )
}

export default CustomTextField;