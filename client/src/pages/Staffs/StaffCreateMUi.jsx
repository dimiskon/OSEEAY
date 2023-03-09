import React from 'react';
import { Unstable_Grid2 as Grid, Box, Paper, Typography } from '@mui/material';

import CustomSelector from '../../components/Staffs/StaffsCreate/CustomSelector';
import InputTextField from '../../components/Staffs/StaffsCreate/InputTextField';

const StaffCreateMUi = () => {
  return (
    <Box component='form' autoComplete="off">
      <Paper sx={{
        p: 3,
        m: 4,
        minWidth: '800px'
      }}
      elevation={6}>
        <Typography variant='h2' gutterBottom sx={{
          margin: '0px 0px 25px 5px',
          fontSize: '2rem'
        }}>
          Στοιχεία Προσωπικού
        </Typography>
        <Grid container width='40vw' spacing={4}>
          <Grid item xs={6}>
            <InputTextField isRequired={true} name='Όνομα'/>
          </Grid>
          <Grid item xs={6}>
            <InputTextField isRequired={true} name='Επώνυμο' />
          </Grid>
          <Grid item xs={6}>
            <InputTextField isRequired={true} name='ΑΣΜΑ' />
          </Grid>
          <Grid item xs={6}>
            <CustomSelector items={['ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ']}/>
          </Grid>
          <Grid item xs={6}>
            <InputTextField isRequired={true} name='Ειδικότητα' />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default StaffCreateMUi;