import React from 'react';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PersonAddAlt1Rounded';

const AddNewStaffButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/staffs/create')}
      variant='contained'
      sx={{
        p: 1.5,
        width: '16rem',
      }}
      startIcon={
        <PeopleOutlineTwoToneIcon style={{
          fontSize: '2rem',
          padding: 2,
        }}/>
      }>
      <Typography variant='h4' sx={{
        textTransform: 'none',
        '@media (max-width:600px)': {
          display: 'none'
        }
      }}>
        Προσθήκη Προσωπικού
      </Typography>
    </Button>
  )
}

export default AddNewStaffButton;