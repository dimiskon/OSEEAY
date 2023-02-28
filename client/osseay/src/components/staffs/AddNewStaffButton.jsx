import React from 'react';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './AddNewStaffButton.css';

const AddNewStaffButton = () => {
  const navigate = useNavigate();

  return (
    <div className='addButton'>
      <IconButton
        onClick={() => navigate('/staffs/create')}
        title='Δημιουργία'>
        <AccountBoxIcon
          style={{
            textTransform: 'none',
            fontSize: '60px',
            color: "#03074f"
          }}
        />
      </IconButton>
      {/* <Button
        title='Δημιουργία'
        onClick={() => navigate('/staffs/create')}
        variant="contained"
        style={{
          textTransform: 'none',
          padding: '10px',
          margin: '5px',
          backgroundColor: "#03074f"
        }}>
        Δημιουργία
      </Button> */}
    </div>
  )
}

export default AddNewStaffButton;