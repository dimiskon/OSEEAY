import React, { useState } from 'react';

import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';

const CustomSelector = (props) => {
  const { items } = props
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant='filled' sx={{ minWidth: '15rem' }}>
      <InputLabel required>Σώμα</InputLabel>
      <Select
        onChange={handleChange}
        value={value}
        variant='filled'
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={index}>
            {item}
          </MenuItem>)
        )}
      </Select>
    </FormControl>
  )
}

export default CustomSelector;