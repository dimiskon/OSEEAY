import React from 'react';
import { Unstable_Grid2 as Grid, Box, TextField, CssBaseline, Paper, Typography } from '@mui/material';

import SelectorUnit from '../../components/Staffs/StaffsCreate/SelectorUnit';
import InputTextField from '../../components/Staffs/StaffsCreate/InputTextField';

const StaffCreateMUi = () => {
  return (
    <Box component='form' autoComplete="off">
      <Paper sx={{
        p: 2,
        m: 4,
        minWidth: '800px'
      }}
      elevation={6}
      >
        <Typography variant='h2' gutterBottom sx={{
          margin: '0px 0px 10px 5px',
          fontSize: '2rem'
        }}>
          Στοιχεία Προσωπικού
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <InputTextField isRequired={true} name='Όνομα'/>
          </Grid>
          <Grid item xs={3}>
            <TextField isRequired={true} label='Επώνυμο' />
          </Grid>

        </Grid>
      </Paper>
    </Box>
  )
}

export default StaffCreateMUi;