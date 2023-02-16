import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/110pm_EMBL-transparent.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <div className='navbar'>
      <div className='left_side'>
        <img alt='' src={Logo}></img>
      </div>
      <div className='mid_side' id={openLinks ? 'open' : 'close'}> 
        <text> 110ΠΜ - ΟΣΣΕΑΥ </text>   
        <div className='hiddenLinks'>
          <Link to='/'> ΑΡΧΙΚΗ</Link>
          <Link to='/staffs'> ΠΡΟΣΩΠΙΚΟ </Link>
          <Link to='/homes'> ΟΙΚΗΜΑΤΑ </Link>
          <Link to='/requests'> ΑΙΤΗΣΕΙΣ </Link>
        </div>
      </div>
      <div className='right_side'>
        <Link to='/'> ΑΡΧΙΚΗ</Link>
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