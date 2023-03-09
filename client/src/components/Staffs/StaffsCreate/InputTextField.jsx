import React from 'react';

import { InputLabel, TextField } from '@mui/material';

const CustomTextField = (props) => {
  const { name, isRequired } = props;
  return (
    <>
    <InputLabel sx={{ fontWeight: 'bold' }}>{name}</InputLabel>
    <TextField
      required={isRequired}
      variant='filled'
      placeholder={name + '...'}
      label={name}
      sx={{
        minWidth: '20rem'
      }}
    />
    </>
  )
}

export default CustomTextField;