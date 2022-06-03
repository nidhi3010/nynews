
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { FiMenu } from "react-icons/fi";

import { FaSearch } from "react-icons/fa";

import './side-drawer.styles.scss';




const SideDrawer = () => {
  const [state, setState] = React.useState({

    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <div className='drawer-box'>
        
         <ul className='sec-1'>
            <li>Home Page</li>
            <li>World<a>&#8250;</a></li>
            <li>Bussiness<a>&#8250;</a></li>
            <li>U.S.Politics<a>&#8250;</a></li>
            <li>U.S.News<a>&#8250;</a></li>
            <li>Sports<a>&#8250;</a></li>
            <li>Health<a>&#8250;</a></li>
            <li>N.Y.<a>&#8250;</a></li>
            <li>Opinion<a>&#8250;</a></li>
            <li>Tech<a>&#8250;</a></li>
            <li>Science<a>&#8250;</a></li>
         </ul>
         <ul className='sec-2'>
         <li>Arts<a>&#8250;</a></li>
         <li>Books<a>&#8250;</a></li>
         <li>Style<a>&#8250;</a></li>
         <li>Food<a>&#8250;</a></li>
         <li>Travel</li>
         <li>Magazine</li>
         <li>T Magazine<a>&#8250;</a></li>
         <li>Real Estate<a>&#8250;</a></li>
         <li>Obituaries<a>&#8250;</a></li>
         <li>Vedio<a>&#8250;</a></li>
         <li>The Upshot</li>
         <li>Headway</li>
         </ul>

         <ul className='sec-3'>
          <li>More<a>&#8250;</a></li>
         </ul>

          
        </div>
    


    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='out-drawer'>
            <FiMenu className='drawer-icon' onClick={toggleDrawer(anchor, true)} />
          

          <FaSearch className='search_icon' />
     
          </div>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideDrawer;



