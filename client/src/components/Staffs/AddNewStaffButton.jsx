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
        p: 1.5
      }}
      startIcon={
        <PeopleOutlineTwoToneIcon style={{
          fontSize: '30px',
          padding: 2
        }}/>
      }>
      <Typography sx={{
        textTransform: 'none'
      }} >Προσθήκη Προσωπικού</Typography>
    </Button>
  )
}

export default AddNewStaffButton;