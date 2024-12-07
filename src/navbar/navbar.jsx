import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography, Grid ,Button , useMediaQuery,useTheme } from "@mui/material";
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

import  { useState } from 'react';
import ViewWeekIcon from '../assets/menu.png';
import X from '../assets/x.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';

const CustomMenu = styled(Menu)({
  '& .MuiPaper-root': {
    boxShadow: 'none', 
    marginTop:'72px',
    width:'100%',
    backgroundColor:'white',
    borderRadius:'0px'
    
    
   

  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery('(max-width:768px)'); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (

    <Box sx={{display:'flex', width: '100%',    borderBottom: 1, borderColor: 'divider',position:'fixed',zIndex:999,top:0,backgroundColor:'white'}}>
     
    <img src={Logo} style={{width:'70px',height:'70px',margin:9,marginRight:'20%',marginLeft:'6%'}}/>

  <Box>
  <Box
  sx={{
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  
  }}
>
   {isSmallScreen ? ( 

<div>

  


<Box
  component="img"
  src={ViewWeekIcon}
  id="fade-button"
  aria-controls={open ? 'fade-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  
  sx={{
    paddingLeft: { xs: '220px', sm: '460px', md: '30px', lg: '50px' }, 
    paddingTop: { xs: '30px', sm: '30px', md: '30px', lg: '40px' },
    position: 'absolute',
    maxWidth: '100%', 
    height: 'auto',
    display: open ? 'none' : 'block',
  }}
/>
<Box
  component="img"
  src={X}
  id="fade-button"
  aria-controls={open ? 'fade-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  sx={{
    display: open ? 'block' : 'none',
    paddingLeft: { xs: '220px', sm: '460px', md: '30px', lg: '50px' }, 
    paddingTop: { xs: '30px', sm: '30px', md: '30px', lg: '40px' },
    position: 'absolute',
    maxWidth: '100%', 
    height: 'auto',
  }}
/>


  

<CustomMenu
  id="fade-menu"
  MenuListProps={{
    'aria-labelledby': 'fade-button',
  }}
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem  ><Typography component={Link} smooth={true}
       to="home" onClick={handleClose} sx={{padding:'10px',fontSize:'20px',color:'#51585E'}}>Home</Typography></MenuItem>
  <MenuItem > <Typography sx={{padding:'10px',color:'#51585E',fontSize:'20px'}} component={Link} smooth={true}
       to="about" onClick={handleClose}> About Us</Typography></MenuItem>
  <MenuItem><Typography sx={{padding:'10px',color:'#51585E',fontSize:'20px'}} component={Link} smooth={true}
       to="team"  onClick={handleClose}>Our Team</Typography></MenuItem>
  <MenuItem ><Typography sx={{padding:'10px',color:'#51585E',fontSize:'20px'}}  component={Link} smooth={true}
       to="apporach" onClick={handleClose}>Investment Approach</Typography></MenuItem>
  <MenuItem><Typography  sx={{padding:'10px',color:'#51585E',fontSize:'20px'}} component={Link} smooth={true}
       to="contact"onClick={handleClose}>Contact Us</Typography></MenuItem>
</CustomMenu>
</div>

   ):
    
    
    
    
    (



      <Box > 
   
      <Tabs
     
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ paddingTop: 2 }}
      >
        <Tab label="Home"  component={Link} smooth={true}
       to="home" {...a11yProps(0)} style={{fontSize:'18px',textTransform:'capitalize',boxSizing:'30px'}}  />
   
        <Tab label="About Us"  component={Link} smooth={true}
       to="about" {...a11yProps(1)} style={{fontSize:'18px',textTransform:'capitalize'}}  />

        <Tab label="Our Team"  component={Link} smooth={true}
       to="team" {...a11yProps(2)} style={{fontSize:'18px',textTransform:'capitalize'}} />

        <Tab label="Investment Approach"  component={Link} smooth={true}
       to="apporach" {...a11yProps(3)} style={{fontSize:'18px',textTransform:'capitalize'}} />

        <Tab label="Contact Us"  component={Link} smooth={true}
       to="contact"{...a11yProps(4)} style={{fontSize:'18px',textTransform:'capitalize'}} />
       
      </Tabs>
    </Box>











    )}
  </Box>
</Box></Box>
  );
}
