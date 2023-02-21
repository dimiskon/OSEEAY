import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddNewStaffButton = () => {
  const navigate = useNavigate();

  return (
    <div className='addButton'>
      <Button onClick={() => navigate('/staffs/create')} variant="contained"
        style={{
          textTransform: 'none',
          padding: '10px',
          margin: '5px'
        }}>
        Add
      </Button>
    </div>
  )
}

export default AddNewStaffButton;