import React, { useState } from 'react';

export default function useStaffForm() {
  const [staffData, setStaffData] = useState({});

  const handleOnSubmit = (data) => {
    setStaffData(...data);
  }

  return (
    staffData,
    setStaffData,
    handleOnSubmit
  )
};
