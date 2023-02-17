import React, {useState} from 'react';
import NavbarLinks from '../utils/NavbarLinks';

import Logo from '../assets/110pm_EMBL-transparent.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img alt='' src={Logo}></img>
        <div className='texts'>
          <text className='polemikiAerText'>ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ</text>
          <text className='osseayText'> 110ΠΜ - ΟΣΣΕΑΥ </text>   
          <text className='maximText'>“Μαχιμώτατοι οι ισχύοντες”</text>
        </div>
        <div className='hiddenLinks'>
          <NavbarLinks/>
        </div>
      </div>
      <div className='rightSide'>
        <NavbarLinks/>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
     </div>
    </div>
  )
}

export default Navbar;