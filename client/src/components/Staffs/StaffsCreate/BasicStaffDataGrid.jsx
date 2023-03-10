import React from 'react'

import { Unstable_Grid2 as Grid } from '@mui/material';

import CustomTextField from './CustomTextField';
import CustomSelector from './CustomSelector';

const BasicStaffDataGrid = (props) => {
  const { handleInputChange, data } = props;
  return (
    <Grid container p={2} spacing={3}>
      <Grid item xs={4}>
        <CustomTextField dataKey='name' data={data} handleInputChange={handleInputChange} isRequired={true} name='Όνομα'/>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField dataKey='surname' data={data} handleInputChange={handleInputChange} isRequired={true} name='Επώνυμο' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField dataKey='asma' data={data} handleInputChange={handleInputChange} isRequired={true} name='ΑΣΜΑ' />
      </Grid>
      <Grid item xs={4}>
        <CustomSelector name='Σώμα' items={['ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ']}/>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField dataKey='specialization' data={data} handleInputChange={handleInputChange} isRequired={true} name='Ειδικότητα' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField dataKey='rank' data={data} handleInputChange={handleInputChange} isRequired={true} name='Βαθμός' />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField dataKey='mobile_phone' data={data} handleInputChange={handleInputChange} isRequired={true} name='Κινητό Τηλέφωνο' />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField dataKey='work_phone' data={data} handleInputChange={handleInputChange} isRequired={false} name='Υπηρεσιακό Τηλέφωνο' />
      </Grid>
    </Grid>
  )
}

export default BasicStaffDataGrid;