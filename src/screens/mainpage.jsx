import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Bg1 from '../assets/bg1.png';
import { Box, Typography, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Arrowdown from '../assets/arrowdown.png'
import Bg2 from '../assets/bg2.jpg'
import Logo from '../assets/logo.png'
import Logo2 from '../assets/logo2.png'

import Ic1 from '../assets/ic1.png'
import Ic2 from '../assets/ic2.png'
import Ic3 from '../assets/ic3.png'
import Ic4 from '../assets/ic4.png'

import L2 from '../assets/l2.png'


import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Containe from '../assets/container.png';
import Namecard from '../assets/namecard.png'

import U1 from '../assets/user1.png'
import U2 from '../assets/user2.png'
import U3 from '../assets/user3.png'

import C1 from '../assets/C1.png'
import C2 from '../assets/C2.png'
import C3 from '../assets/C3.png'


import Left from '../assets/left.png'
import Right from '../assets/right.png'

import Contact from '../assets/contact.png'




















function Homes(){

    return(
        <Box sx={{ position: 'relative' ,paddingTop:'90px'}}>
        <img 
          src={Bg1} 
          alt="Background" 
          style={{ width: '100%', marginBottom:'50px'}} 
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
            fontFamily:'DM Sans', 
            fontSize:'13px',
            backgroundColor:'#F9C300',
            padding:'2px'
  
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
           textAlign:'center',
            fontSize:'44px',
           width:'800px'
    
  
          }}
        >
         Empowering Investments with Expertise and Strategy
        </Typography>
        
  
        <Button variant="contained"
         sx={{
  
          position: 'absolute',
          top: '68%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
       
          fontFamily:'DM Sans',
          zIndex: 1, 
         textAlign:'center',
         textTransform:'none',
         boxShadow:'none',
         backgroundColor:'#0000004D',
         borderRadius:'1px',
         paddingLeft:'40px',
         paddingRight:'30px',
         paddingTop:'10px',
          paddingBottom:'10px',
        
  
        }}>
          
          Know More
          <img src={Arrowdown} style={{width:'15px',marginLeft:'5px'}}/>
          </Button>
          
  
  
          </Box>
    );
}
export default Homes;