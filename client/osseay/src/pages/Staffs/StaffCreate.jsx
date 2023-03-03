import React, { useState } from 'react';
import { Grid } from '@mui/material';

import useStaffForm from '../../components/staffs/useStaffForm';

import SelectorUnit from '../../components/staffs/StaffsCreate/SelectorUnit';
import InputTextField from '../../components/staffs/StaffsCreate/InputTextField';

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

{ /* <SideBySideInputFields p1='Όνομα' name_1="name" p2='Επώνυμο' name_2="surname" />
  <SideBySideInputFields p1='ΑΣΜΑ' name_1="asma" p2='Σώμα' name_2="unit" />
  <SideBySideInputFields p1='Βαθμός' name_1="rank" p2='Ειδικότητα' name_2="specialization" />
  <SideBySideInputFields p1='Κινητό Τηλ.' name_1="mobile_phone" p2='Υπηρεσιακό Τηλ.' name_2="work_phone" />
  <SideBySideInputFields p1='Θέση Ευθύνης' name_1="position_of_responsibility" p2='Ειδική Κατηγορία' name_2="special_category" /> */ }