import React, { useState } from 'react';

export default function useStaffForm() {
  const [staffData, setStaffData] = useState({
    name: '',
    surname: '',
    asma: '',
    unit: '',
    specialization: '',
    rank: '',
    mobile_phone: '',
    work_phone: ''
  });

  const handleInputChange = (data) => {
    const { name, value } = data.target;
    setStaffData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return {
    staffData,
    setStaffData,
    handleInputChange
  };
};
