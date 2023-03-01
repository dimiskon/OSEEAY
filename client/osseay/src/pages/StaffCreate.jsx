import React from 'react';

import '../styles/StaffCreate.css'

import SideBySideInputFields from '../utils/SideBySideInputFields';

const StaffCreate = () => {
  return (
    <div className="createStaff">
      <div className='title'>
        <h1>Φόρμα Δημιουργίας Προσωπικού</h1>
      </div>
      <div className='personal_inputs'>
        <form>
          <SideBySideInputFields p1='Όνομα' name_1="name" p2='Επώνυμο' name_2="surname" />
          <SideBySideInputFields p1='ΑΣΜΑ' name_1="asma" p2='Σώμα' name_2="unit" />
          <SideBySideInputFields p1='Βαθμός' name_1="rank" p2='Ειδικότητα' name_2="specialization" />
          <SideBySideInputFields p1='Κινητό Τηλ.' name_1="mobile_phone" p2='Υπηρεσιακό Τηλ.' name_2="work_phone" />
          <SideBySideInputFields p1='Θέση Ευθύνης' name_1="position_of_responsibility" p2='Ειδική Κατηγορία' name_2="special_category" />
        </form>
      </div>
      <div className='family_inputs'>

      </div>
    </div>
  )
}

export default StaffCreate;