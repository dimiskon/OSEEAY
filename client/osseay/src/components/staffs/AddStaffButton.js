import React from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { Tooltip } from '@mui/material';

import './AddStaffButton.css';

const AddStaffButton = () => {
  return (
    <div className='addButton'>
      <Tooltip 
      arrow
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltipArrow': {
            fontSize: '1.3vw',
            bgcolor: '#03096f',
            position: 'relative',
            left: 12,
            bottom: 5
          }
        }
      }}
      placement='left' title='Πρόσθεσε Προσωπικό'>
        <button>
          <AddBoxIcon color='inherit' fontSize='inherit'/>
        </button>
      </Tooltip>
    </div>
  );
}

export default AddStaffButton;