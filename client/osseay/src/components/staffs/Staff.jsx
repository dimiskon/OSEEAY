import React from 'react';

import { Button } from '@mui/material';

const customButton = (props) => {

  return (
    <Button
      variant="contained"
      style={{
        width: '110px',
        textTransform: 'none',
        padding: '10px',
        margin: '5px',
        backgroundColor: "#03074f"
      }}>Επεξεργασία</Button>
  )
}

const Staff = ({ staff, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{staff.name}</td>
      <td>{staff.surname}</td>
      <td>{staff.asma}</td>
      <td>{staff.unit}</td>
      <td>{staff.rank}</td>
      <td>{staff.specialization}</td>
      <td>{staff.display_name}</td>
      <td>{staff.mobile_phone}</td>
      <td>{staff.work_phone}</td>
      <td>{staff.position_of_responsibility}</td>
      <td>{staff.special_category}</td>
      <td>{staff.indefinitely}</td>
      <td>{staff.mta_payment}</td>
      <td>
        <Button
          variant="contained"
          style={{
            width: '110px',
            textTransform: 'none',
            padding: '10px',
            margin: '5px',
            backgroundColor: "#03074f"
          }}>Επεξεργασία</Button>
        <Button
          variant="contained"
          style={{
            width: '110px',
            textTransform: 'none',
            padding: '10px',
            margin: '5px',
            backgroundColor: "#a40c0c"
          }}>Διαγραφή</Button>
      </td>
    </tr>
  )
}

export default Staff;