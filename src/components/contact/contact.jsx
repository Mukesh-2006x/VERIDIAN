import { Box, Typography, Button } from "@mui/material";
import L2 from '../../assets/l2.png';
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Contact from '../../assets/contact.png';
import Left from '../../assets/left.png';

function Cont() {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            zIndex: 1,
            color: 'white',
            fontSize: { xs: '30px', sm: '30px' }, // Responsive font size
            paddingTop: '20px',
            paddingBottom: '10px',
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '10px', sm: '16px' }, // Responsive font size
            fontFamily: 'DM Sans',
            marginX: 'auto',
            maxWidth: '80%', // Ensures the text does not stretch too wide on large screens
          }}
        >
          Have questions or need more information? Reach out to us at.
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: '10px',
            marginBottom: '10px',
            marginX: 'auto',
            fontFamily: 'DM Sans',
            zIndex: 1,
            textAlign: 'center',
            textTransform: 'none',
            boxShadow: 'none',
            backgroundColor: '#0000004D',
            borderRadius: '1px',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            maxWidth: '280px', 
          }}
        >
          <Box
            sx={{
              backgroundColor: '#F9C300',
              color: 'black',
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '12px',
              fontFamily: 'DM Sans',
              marginRight: '10px',
              marginLeft: '10px',
            }}
          >
            MAIL TO
          </Box>
          info@veridian.com
          <img src={Left} alt="Left" style={{ backgroundColor: '#0000004D', padding: '15px', marginLeft: '20px' }} />
        </Button>

        <Typography
          sx={{
            zIndex: 1,
            color: 'white',
            fontSize: { xs: '18px', sm: '18px' }, // Responsive font size
            fontFamily: 'DM Sans',
            marginTop: '10px',
          }}
        >
          We're here to help!
        </Typography>
      </Box>
    </>
  );
}

export default Cont;
