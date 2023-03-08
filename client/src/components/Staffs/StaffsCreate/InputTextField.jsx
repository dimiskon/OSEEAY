import React from 'react';

import { TextField } from '@mui/material';

const CustomTextField = (props) => {
  const { name, isRequired } = props;
  return (
    <TextField
      required={isRequired}
      variant='filled'
      placeholder={name + '...'}
      label={name}/>
  )
}

export default CustomTextField;