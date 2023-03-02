import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';

import './AddNewStaffButton.css';

const AddNewStaffButton = () => {
  const navigate = useNavigate();

  return (
    <div className='addButton'>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: '#03074f',
              fontSize: '1.1rem',
            },
          },
        }}
        title='Προσθήκη Προσωπικού'
        placement='left'>
        <IconButton onClick={() => navigate('/staffs/create')}>
          <PeopleOutlineTwoToneIcon
            style={{
              textTransform: 'none',
              fontSize: '60px',
              color: "#03074f"
            }}
          />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default AddNewStaffButton;