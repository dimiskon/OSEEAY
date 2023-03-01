import React from 'react';

import { Button } from '@mui/material';

const CustomButton = (props) => {
  const { backgroundColor, title } = props;
  return (
    <Button
      variant="contained"
      style={{
        width: '110px',
        textTransform: 'none',
        padding: '10px',
        margin: '5px',
        backgroundColor
      }}>{title}</Button>
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
        <CustomButton backgroundColor='#03074f' title='Επεξεργασία' />
        <CustomButton backgroundColor="#a40c0c" title='Διαγραφή' />
      </td>
    </tr>
  )
}

export default Staff;