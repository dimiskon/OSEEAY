import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
  return (
    <>
      <Link to='/'> ΑΡΧΙΚΗ </Link>
      <Link to='/staffs'> ΠΡΟΣΩΠΙΚΟ </Link>
      <Link to='/homes'> ΟΙΚΗΜΑΤΑ </Link>
      <Link to='/requests'> ΑΙΤΗΣΕΙΣ </Link>
    </>
  )
}

export default NavbarLinks;