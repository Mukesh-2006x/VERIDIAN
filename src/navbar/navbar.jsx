import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Logo from '../assets/logo.png'

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{display:'flex', width: '100%',    borderBottom: 1, borderColor: 'divider',position:'fixed',zIndex:999,top:0,backgroundColor:'white'}}>
     
    <img src={Logo} style={{width:'70px',height:'70px',margin:9,marginRight:'20%',marginLeft:'3%'}}/>

  <Box>
  <Box
  sx={{
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  
  }}
>
    <Box > 
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ paddingTop: 2 }}
      >
        <Tab label="Home" {...a11yProps(0)} style={{fontSize:'18px',textTransform:'capitalize',boxSizing:'30px'}}/>
   
        <Tab label="About Us" {...a11yProps(1)} style={{fontSize:'18px',textTransform:'capitalize'}}/>
        <Tab label="Our Team" {...a11yProps(2)} style={{fontSize:'18px',textTransform:'capitalize'}}/>
        <Tab label="Investment Approach" {...a11yProps(3)} style={{fontSize:'18px',textTransform:'capitalize'}}/>
        <Tab label="Contact Us" {...a11yProps(4)} style={{fontSize:'18px',textTransform:'capitalize'}}/>
      </Tabs>
    </Box>
  </Box>
</Box></Box>
  );
}
