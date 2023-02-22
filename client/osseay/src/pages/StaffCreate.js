import React from 'react';

import '../styles/StaffCreate.css'

const StaffCreate = () => {
  return (
    <div className="createStaff">
      <div className='title'>
        <h2>Δημιουργία Προσωπικού</h2>
      </div>
      <div className='inputs'>
        <form>
          <div className='side_by_side'>
            <label>
              <p>Όνομα</p>
              <input type='text' name='name' placeholder='Όνομα...' />
            </label>
            <label>
              <p>Επώνυμο</p>
              <input type='text' name='surname' placeholder='Επώνυμο...' />
            </label>
          </div>
          <div className='side_by_side'>
            <label>
              <p>ΑΣΜΑ</p>
              <input type='text' name='asma' placeholder='12345' />
            </label>
            <label>
              <p>Σώμα</p>
              <input type='text' name='unit' placeholder='Σώμα...' />
            </label>
          </div>
          <p>Όνομα</p>
          <input type='text' name='rank' placeholder='Βαθμός...' />
          <p>Όνομα</p>
          <input type='text' name='specialization' placeholder='Ειδικότητα...' />
          <p>Όνομα</p>
          <input type='text' name='mobile_phone' placeholder='Κινητό τηλ...' />
          <p>Όνομα</p>
          <input type='text' name='work_phone' placeholder='Υπηρεσιακό τηλ...' />
          <p>Όνομα</p>
          <input type='text' name='position_of_responsibility' placeholder='Θέση Ευθύνης...' />
          <p>Όνομα</p>
          <input type='text' name='special_category' placeholder='Ειδική Κατηγορία...' />
          <p>Όνομα</p>
          <input type='text' name='indefinitely' placeholder='12345' />
          <p>Όνομα</p>
          <input type='text' name='mta_payment' placeholder='12345' />
        </form>
      </div>
    </div>
  )
}

export default StaffCreate;