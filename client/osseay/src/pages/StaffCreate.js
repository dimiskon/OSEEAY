import React from 'react';

import '../styles/StaffCreate.css'

const StaffCreate = () => {
  return (
    <div className="createStaff">
      <h2>Δημιουργία Προσωπικού</h2>
      <div>
        <form>
          <input type='text' name='asma' placeholder='12345' />
          <input type='text' name='name' placeholder='Όνομα...' />
          <input type='text' name='surname' placeholder='Επώνυμο...' />
          <input type='text' name='unit' placeholder='Σώμα...' />
          <input type='text' name='rank' placeholder='Βαθμός...' />
          <input type='text' name='specialization' placeholder='Ειδικότητα...' />
          <input type='text' name='mobile_phone' placeholder='Κινητό τηλ...' />
          <input type='text' name='work_phone' placeholder='Υπηρεσιακό τηλ...' />
          <input type='text' name='position_of_responsibility' placeholder='Θέση Ευθύνης...' />
          <input type='text' name='special_category' placeholder='Ειδική Κατηγορία...' />
          <input type='text' name='indefinitely' placeholder='12345' />
          <input type='text' name='mta_payment' placeholder='12345' />
        </form>

      </div>
    </div>
  )
}

export default StaffCreate;