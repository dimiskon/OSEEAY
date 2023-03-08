import React from 'react';

import { InputLabel, TextField } from '@mui/material';

const InputTextField = (props) => {
  const { name } = props;
  return (
    <>
        <InputLabel
          style={{
            fontWeight: 'bold',
            color: 'white'
          }}>
          {name}
        </InputLabel>
        <TextField
          style={{
            backgroundColor: 'white'
          }}
          variant='outlined'
          name={name}
          label={name + '...'}/>
    </>
  )
}

export default InputTextField;