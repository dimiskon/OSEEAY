import React from 'react';

const SideBySideInputFields = (props) => {
  const { p1, name_1, p2, name_2 } = props;
  return (
    <div className='side_by_side'>
      <label>
        <p>{p1}</p>
        <input type='text' name={name_1} placeholder={`${p1}...`} />
      </label>
      <label>
        <p>{p2}</p>
        <input type='text' name={name_2} placeholder={`${p2}...`} />
      </label>
    </div>
  )
}

export default SideBySideInputFields;