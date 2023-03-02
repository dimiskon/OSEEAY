import React, { useState } from 'react';
import { Grid, TextField, Select, InputLabel, MenuItem } from '@mui/material';

import useStaffForm from '../../components/staffs/useStaffForm';

import SideBySideInputFields from '../../utils/SideBySideInputFields';

const StaffCreate = () => {

  const {
    staffData,
    setStaffData,
    handleOnSubmit
  } = useStaffForm();

  const [unit, setUnit] = useState(1);
  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div className="create-staff">
      <div className='title'>
        <h1>Φόρμα Δημιουργίας Προσωπικού</h1>
      </div>
      <form className='staff-form'>
        <Grid container gap={1}>
          <Grid container xs={6} spacing={1}>
            <Grid item xs={6}>
              <InputLabel style={{ fontWeight: 'bold' }}>Όνομα</InputLabel>
              <TextField variant='outlined' name='Όνομα' label='Όνομα...'/>
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ fontWeight: 'bold' }}>Επώνυμο</InputLabel>
              <TextField variant='outlined' name='Επώνυμο' label='Επώνυμο...'/>
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ fontWeight: 'bold' }} >ΑΣΜΑ</InputLabel>
              <TextField variant='outlined' name='ΑΣΜΑ' label='ΑΣΜΑ...'/>
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Σώμα</InputLabel>
              <Select
                onChange={handleChange}
                value={unit}
              >
                <MenuItem value={1}>ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ</MenuItem>
                <MenuItem value={2}>ΣΤΡΑΤΟΣ ΞΗΡΑΣ</MenuItem>
                <MenuItem value={3}>ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ</MenuItem>
              </Select>

            </Grid>
            <Grid item xs={6}>
              <TextField variant='outlined' name='Επώνυμο' label='Επώνυμο...'/>
            </Grid>

          </Grid>

          <Grid container xs={6} spacing={1}>
            <Grid item xs={6}>
              <TextField variant='outlined' name='Όνομα' label='Όνομα...'/>
            </Grid>
            <Grid item xs={6}>
              <TextField variant='outlined' name='Επώνυμο' label='Επώνυμο...'/>
            </Grid>
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