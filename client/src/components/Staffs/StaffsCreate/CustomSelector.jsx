import React, { useState } from 'react';

import { Select, InputLabel, MenuItem, FormControl, Typography } from '@mui/material';

const CustomSelector = (props) => {
  const { items, name } = props
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
        <InputLabel ><Typography variant='inputLabel' >{name}</Typography></InputLabel>
        <FormControl variant='filled' fullWidth>
          <InputLabel required>{name}</InputLabel>
          <Select
            onChange={handleChange}
            value={value}
            variant='filled'
            displayEmpty
          >
            {items.map((item, index) => (
              <MenuItem key={index} value={index}>
                {item}
              </MenuItem>)
            )}
          </Select>
        </FormControl>
    </>
  )
}

export default CustomSelector;