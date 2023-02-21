import React, {useState} from 'react';
import NavbarLinks from '../utils/NavbarLinks';

import Logo from '../assets/110pm_emblem_transparent.png';
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
          <h1 className='polemikiAerText'>ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ</h1>
          <h2 className='osseayText'> 110ΠΜ - ΟΣΣΕΑΥ </h2>   
          <h2 className='maximText'>“Μαχιμώτατοι οι ισχύοντες”</h2>
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