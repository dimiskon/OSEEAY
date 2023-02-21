import React from 'react';

import AddButtonIcon from '@mui/icons-material/AddBoxOutlined';
import { Tooltip, } from '@mui/material';

import './AddStaffButton.css';

const AddStaffButton = () => {
  return (
    <div className='addButton'>
      <Tooltip
        arrow
        PopperProps={{
          sx: {
            '& .MuiTooltip-tooltipArrow': {
              fontSize: '1.2vw',
              bgcolor: '#000',
              position: 'relative',
            }
          }
        }}
        placement='top-start' title='Πρόσθεσε Προσωπικό'>
        <button>
          <AddButtonIcon color='inherit' fontSize='inherit'/>
        </button>
      </Tooltip>
    </div>
  );
}

export default AddStaffButton;