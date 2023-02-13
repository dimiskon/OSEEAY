import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/110pm_EMBL-transparent.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left_side'>
        <img alt='' src={Logo}></img>
      </div>
      <div className='mid_side'> 
         110ΠΜ - ΟΣΣΕΑΥ   
      </div>
      <div className='right_side'>
        <Link to='/'> Home </Link>
        <Link to='/staffs'> ΠΡΟΣΩΠΙΚΟ </Link>
        <Link to='/homes'> ΟΙΚΗΜΑΤΑ </Link>
        <Link to='/requests'> ΑΙΤΗΣΕΙΣ </Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;