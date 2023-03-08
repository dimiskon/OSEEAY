import React, { useState } from 'react';

export default function useStaffForm() {
  const [staffData, setStaffData] = useState({});

  const handleInputChange = (data) => {
    const [name, value] = data.target;
    setStaffData({
      ...data,
      [name]: value
    });
  }

  return (
    staffData,
    setStaffData,
    handleInputChange
  )
};
