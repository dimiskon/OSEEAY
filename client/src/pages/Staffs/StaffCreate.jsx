import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import useStaffForm from '../../components/Staffs/useStaffForm';

import SelectorUnit from '../../components/Staffs/StaffsCreate/SelectorUnit';
import InputTextField from '../../components/Staffs/StaffsCreate/InputTextField';

import '../../styles/Staffs/StaffCreate.css';

const StaffCreate = () => {

  const {
    staffData,
    setStaffData,
    handleOnSubmit
  } = useStaffForm();

  return (
    <div className="create-staff">
      <div className='title'>
        <h1>Φόρμα Δημιουργίας Προσωπικού</h1>
      </div>
      <form className='staff-form'>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputTextField name='Όνομα' />
            <InputTextField name='ΑΣΜΑ' />
            <InputTextField name='Επώνυμο'/>
            <InputTextField name='Επώνυμο'/>
            <InputTextField name='Επώνυμο'/>
          </Grid>
          <Grid item xs={6}>
            <InputTextField name='Επώνυμο'/>
            <InputTextField name='Ειδικότητα'/>
          </Grid>
          <Grid item xs={6}>
            <SelectorUnit items={['ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ']}/>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default StaffCreate;