import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/Staffs.css'

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    staffsData();
  }, []);

  const staffsData = async () => {
    const { data } = await axios.get('/staffs');
    console.log(data);
    setStaffs(data);
  };

  return (
    <div className='staffs'>
      <table>
        <thead>
          <tr>
            <th>ΟΝΟΜΑ</th>
            <th>ΕΠΩΝΥΜΟ</th>
            <th>ΑΣΜΑ</th>
            <th>ΣΩΜΑ</th>
            <th>ΒΑΘΜΟΣ</th>
            <th>ΕΙΔΙΚΟΤΗΤΑ</th>
            <th>ΠΑΡΟΥΣΙΑΣΤΙΚΟ</th>
            <th>ΚΙΝΗΤΟ ΤΗΛΕΦΩΝΟ</th>
            <th>ΥΠΗΡΕΣΙΑΚΟ ΤΗΛΕΦΩΝΟ</th>
            <th>ΘΕΣΗ ΕΥΘΥΝΗΣ</th>
            <th>ΕΙΔΙΚΗ ΚΑΤΗΓΟΡΙΑ</th>
            <th>ΑΟΡΙΣΤΟΥ</th>
            <th>ΠΛΗΡΩΜΗ ΜΤΑ</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff)=> (
              <tr>
                <td>{staff.name}</td>
                <td>{staff.surname}</td>
                <td>{staff.asma}</td>
                <td>{staff.unit}</td>
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
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Staffs;