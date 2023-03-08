import React, { useState } from 'react';

import { Select, InputLabel, MenuItem } from '@mui/material';

const Selector = (props) => {
  const { items } = props
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <InputLabel
        style={{
          fontWeight: 'bold',
          color: 'white'
        }}>
        Σώμα
      </InputLabel>
      <Select
        onChange={handleChange}
        value={value}
        style={{
          width: '235px',
          backgroundColor: 'white'
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={index}>
            {item}
          </MenuItem>)
        )}
      </Select>
    </>
  )
}

export default Selector;