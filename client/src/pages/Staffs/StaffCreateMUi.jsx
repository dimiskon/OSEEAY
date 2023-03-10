import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

import BasicStaffDataGrid from '../../components/Staffs/StaffsCreate/BasicStaffDataGrid';
import useStaffForm from '../../components/Staffs/useStaffForm';
import FormFooter from '../../components/Staffs/StaffsCreate/FormFooter';

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
      }}
      elevation={6}>
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
        <FormFooter/>
      </Paper>
    </Box>
  )
}

export default StaffCreateMUi;