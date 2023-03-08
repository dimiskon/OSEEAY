import React, { useState } from 'react';
import { Unstable_Grid2 as Grid, Box, Typography, FormControl, TextField } from '@mui/material';

import useStaffForm from '../../components/Staffs/useStaffForm';

import SelectorUnit from '../../components/Staffs/StaffsCreate/SelectorUnit';
import InputTextField from '../../components/Staffs/StaffsCreate/InputTextField';

const StaffCreate = () => {

  const {
    staffData,
    setStaffData,
    handleInputChange
  } = useStaffForm();

  return (
    <Box padding={5} width='100vh'>
      {/* <div className='title'> */}
      <Typography variant='h1' sx={{
        fontSize: '30px',
        m: 2,
        display: 'flex',
        justifyContent: 'center',
        border: '5px solid black'
      }}>
        Φόρμα Δημιουργίας Προσωπικού
      </Typography>
      {/* </div> */}
      <FormControl sx={{
        p: 2
      }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField variant='outlined' ></TextField>
            {/* <InputTextField name='Όνομα' /> */}
            {/* <InputTextField name='ΑΣΜΑ' /> */}
            {/* <InputTextField name='Επώνυμο'/> */}
            {/* <InputTextField name='Επώνυμο'/> */}
            {/* <InputTextField name='Επώνυμο'/> */}
          </Grid>
          <Grid item xs={6}>
            <InputTextField name='Επώνυμο'/>
            <InputTextField name='Ειδικότητα'/>
          </Grid>
          <Grid item xs={6}>
            <SelectorUnit items={['ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ']}/>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  )
}

export default StaffCreate;