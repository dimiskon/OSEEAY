import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Staff from '../../components/staffs/Staff';
import StaffTableColNames from '../../components/staffs/StaffTableColNames';
import AddNewStaffButton from '../../components/staffs/AddNewStaffButton';

import { TextField } from '@mui/material';

import '../../styles/Staffs/Staffs.css';

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    staffsData();
  }, []);

  const staffsData = async () => {
    const { data } = await axios.get('/staffs');
    setStaffs(data);
  };

  return (
    <div className='staffs'>
      <div className='searchField'>
        <AddNewStaffButton/>
        <TextField id="outlined-basic" label="Search..." variant="outlined" />
      </div>
      <table>
        <thead>
          <StaffTableColNames/>
        </thead>
        <tbody>
          {staffs.map((staff, index) => (
            <Staff key={staff.asma} staff={staff} index={index}/>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Staffs;