import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AddBoxIcon from '@mui/icons-material/AddBox';

import AddStaffButton from '../components/staffs/AddStaffButton.js';

import Staff from '../components/staffs/Staff.js';
import StaffTableColNames from '../components/staffs/StaffTableColNames.js';

import '../styles/Staffs.css'

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
      <table>
        <thead>
          <StaffTableColNames/>
        </thead>
        <tbody>
          {staffs.map((staff)=> (
              <Staff key={staff.asma} staff={staff}/>
            )  
          )}
        </tbody>
      </table>
      <AddStaffButton/>
    </div>
  )
}

export default Staffs;