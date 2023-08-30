import * as React  from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Image from "../../Image/logo.gif"
import { Link } from 'react-router-dom';
import {FaHome } from 'react-icons/fa';
import {FcAbout } from 'react-icons/fc';
import {CgProfile } from 'react-icons/cg';
import {FcGallery} from 'react-icons/fc';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {BsFillClipboardDataFill} from 'react-icons/bs';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
import {FaMobileAlt} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';
import {GoIssueReopened} from 'react-icons/go'
import {BiSupport} from 'react-icons/bi'
import style from "./TemporaryDrawer.module.css"
import {CourseSlideBarAccordian,StudentSlideBarAccordian,FacultiesSlideBarAccordian} from './SlideBarAccordian';


export default function TemporaryDrawer() {
  const [Admin,setAdmin] = useState(JSON.parse(localStorage.getItem("Admin") || false)) 
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
      <List className={style.opt} style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingLeft:"20px",height:"100vh"}}>
      <Link to={"/"} className={style.Link}><h4><FaHome/>Home</h4></Link> 
      <Link to={"/AboutUs"} className={style.Link}><h4><FcAbout />About</h4></Link> 
     <Link to={"/Profile"} className={style.Link}><h4><CgProfile/>Profile</h4></Link> 
      <CourseSlideBarAccordian />
     <StudentSlideBarAccordian />
         <Link to={"/Gallery"} className={style.Link}> <h4><FcGallery/>Gallery</h4></Link> 
         <Link to={"/ContactUs"} className={style.Link}><h4><MdOutlinePermContactCalendar/>Contact</h4></Link> 
      <h4><FaCloudDownloadAlt/>Download</h4>
     < FacultiesSlideBarAccordian />
     {Admin.Admin ?   <Link to={"/DashBoard"} className={style.Link}> <h4><BsFillClipboardDataFill/>Dashboard</h4></Link> :
     null
     }
      <h4><MdOutlineAccountBalanceWallet/>Accounts</h4>
      <h4><FaMobileAlt/>Mobile</h4>
      <h4><MdPayment/>Payment</h4>
      <h4><GoIssueReopened/>Complaints</h4>
      <h4><BiSupport/>Supports</h4>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img style={{height:"40px"}} src={Image} alt="logo"/></Button>
       
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
