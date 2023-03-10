import React, { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';

import SaveAsIcon from '@mui/icons-material/SaveAs';

import BasicStaffDataGrid from '../../components/Staffs/StaffsCreate/BasicStaffDataGrid';
import useStaffForm from '../../components/Staffs/useStaffForm';

const StaffCreateMUi = () => {
  const {
    staffData,
    handleInputChange,
    handleSubmit
  } = useStaffForm();

  return (
    <Box component='form' autoComplete="off">
      <Paper sx={{
        m: 4,
        width: '60rem',
        minWidth: '20rem',
      }} elevation={6}>
        <Box>
          <Typography variant='h2' fontWeight='bold' sx={{
            color: '#03074f',
            fontSize: '2rem',
            p: '20px 0px 10px 15px'
          }}>
            Στοιχεία Προσωπικού
          </Typography>
        </Box>
        <BasicStaffDataGrid data={staffData} handleInputChange={handleInputChange}/>
        <Paper variant='filled' sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 2,
          height: '65px',
          borderRadius: '2px',
          bgcolor: '#d9d9d96b'
        }}>

          <Button variant='contained' color='success' sx={{ right: '10px', m: 1 }}
            startIcon={<SaveAsIcon/>}
          >
            Save
          </Button>
        </Paper>
      </Paper>
    </Box>
  )
}

export default StaffCreateMUi;