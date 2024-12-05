import React from 'react';
import { Box, Typography, Button, useTheme } from "@mui/material";
import Bg1 from '../../assets/bg1.png';
import Arrowdown from '../../assets/arrowdown.png';

function Homes() {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', paddingTop: '90px' }}>
      <img 
        src={Bg1} 
        alt="Background" 
        style={{ width: '100%', marginBottom: '50px',height:'88.9vh' }} 
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '36%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontWeight: 'bold',
          zIndex: 1,
          fontFamily: 'DM Sans',
          fontSize: '13px',
          backgroundColor: '#F9C300',
          padding: '2px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            top: '30%',
          },
        }}
      >
        INVESTMENT MANAGEMENT
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontWeight: 'bold',
          zIndex: 1,
          textAlign: 'center',
          fontSize: '44px',
          width: '800px',
          [theme.breakpoints.down('md')]: {
            fontSize: '42px',
            width: '90%',
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '34px',
            width: '90%',
          },
        }}
      >
        Empowering Investments with Expertise and Strategy
      </Typography>

      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          top: '68%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'DM Sans',
          zIndex: 1,
          textAlign: 'center',
          textTransform: 'none',
          boxShadow: 'none',
          backgroundColor: '#0000004D',
          borderRadius: '1px',
          paddingLeft: '40px',
          paddingRight: '30px',
          paddingTop: '10px',
          paddingBottom: '10px',
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
        }}
      >
        Know More
        <img src={Arrowdown} style={{ width: '15px', marginLeft: '5px' }} />
      </Button>
    </Box>
  );
}

export default Homes;
