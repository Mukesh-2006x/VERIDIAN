import React from 'react';
import { Box, Typography } from "@mui/material";

import Bg2 from '../assets/bg2.jpg';
import About from '../components/about/about';
import Ourteam from '../components/ourteam/ourteam';
import Cont from '../components/contact/contact';
import Homes from '../components/homes/homes';
import Cards from '../components/cards/cards';
import Contact from '../assets/contact.png'

function Home() {
  return (
    <Box sx={{marginTop:'70px'}} >
    <Box sx={{ maxWidth: '1100px', margin: 'auto' }}>
    











      <div id="home">
        <Homes />
      </div>
























     <Box sx={{ backgroundImage: `url(${Bg2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxWidth:'100%',
    height:'auto'
    
    }}>
      
        










     
        <div id="about" >
          <About />
        </div>













      
         <div id="team" >
          <Ourteam />
        </div> 

      





















         <Box id="apporach"  >
          <Cards />
        </Box>  
      </Box>
























   
      <Box id="contact" sx={{ backgroundImage: `url(${Contact})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   
   maxWidth: '100%',
   maxHeight: '40vh',}}>
        <Cont />
      </Box>  













      
    </Box >
























    <hr style={{marginBottom:'10px'}}></hr>

    <Typography sx={{padding:'20px', fontSize:'12px',color:'#717B85',display:'inline',fontFamily:'DM Sans',marginLeft:'60px'}}>COPYRIGHT © Veridian 2024. All rights reserved. 
      Any and all content included on this website or incorporated by 
      reference is protected by international copyright laws.</Typography>
      <Typography sx={{padding:'20px', fontSize:'12px',color:'#717B85',display:'inline',fontFamily:'DM Sans',marginLeft:'60px'}}>Term of use</Typography>
    </Box>
    
  );
}

export default Home;
