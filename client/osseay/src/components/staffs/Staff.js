import React from 'react'

const Staff = ({staff, index}) => {
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
    </tr>
  )
}

export default Staff;