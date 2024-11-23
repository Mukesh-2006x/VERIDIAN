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

function About() {
  return (     
    <>
    <Typography
    sx={{
      position: 'absolute',
      top: '3%', 
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 'bold',
      zIndex: 1, 
      
      fontSize:'30px',
     
    

    }}
  >
   About Us
  </Typography>

    
    
    
    <Box
      sx={{
    
        fontFamily: "DM Sans",

        position: 'absolute',
        top: '430px', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
      width:'85%',  
        zIndex: 1,
      }}
    >
    
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "1px",
          marginBottom: "40px",
          
      
        }}
      >
        <Grid container spacing={4} alignItems="center" style={{width:'1121px'}}>
       
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <img
              src={Logo2} 
              alt="Veridian Logo"
              style={{width:'100%',height:'100%'}}
            />
          </Grid>
         
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{ marginBottom: "20px",fontFamily: "DM Sans", fontSize:'14px',marginRight:'82px'}}>
              Veridian is an investment, management, and development company
              based in Gibraltar. We create value in our investments by leveraging
              our own experience, using tried-and-true strategies and extensive
              industry expertise.
            </Typography>
            <Typography variant="body1" sx={{marginBottom: "20px",fontFamily: "DM Sans", fontSize:'14px',marginRight:'82px'}}>
              We work with our business management team to develop and implement
              tailored strategies focused on strong products with powerful sales, to
              develop profit-generating growth models. Value creation is fundamental
              to our goal, and we develop our businesses with this in mind.
            </Typography>
            <Typography variant="body1" sx={{marginBottom: "20px",fontFamily: "DM Sans", fontSize:'14px',marginRight:'82px'}}>
              Veridian's expertise is delivered with a responsible approach to our
              business, our team, our local community, and the environment.
            </Typography>
          </Grid>
        </Grid>
      </Box>


      <Grid container spacing={2} sx={{paddingBottom:'32px'}}>
      
       
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px",
              marginLeft:'16px',
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: 'left',
              width:'525px',
              boxShadow:'none',
              borderRadius:'1px'
              ,display:'inline-flex' 
            }}
          >
            <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "100px",fontSize:'18px', marginBottom: "10px"}}
            >
              Excellence
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" ,width:'370px',fontFamily:'DM Sans',fontSize:'13px'}}>
              We strive for excellence by continuously honing our skills &
              expanding our knowledge. Our commitment to excellence drives
              innovation and quality, setting us apart as leaders in our field.
            </Typography></Box>
            <Box>
            <img src={Ic1} style={{marginTop:'10px',marginLeft:'6%'}}/></Box>
           </Box>


           <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px",
              marginLeft:'16px',
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: 'left',
              width:'525px',
              boxShadow:'none',
              borderRadius:'1px'
              ,display:'inline-flex' 
            }}
          >
            <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "100px",fontSize:'18px', marginBottom: "10px"}}
            >
              Initiative
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" ,width:'370px',fontFamily:'DM Sans',fontSize:'13px'}}>
            We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities
             for growth.
             We drive creativity and transformative solutions.
            </Typography></Box>
            <Box>
            <img src={Ic2} style={{marginTop:'10px',marginLeft:'6%'}}/></Box>
           </Box>

      </Grid>


      
      <Grid container spacing={2}  >
      
       
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px",
              marginLeft:'16px',
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: 'left',
              width:'525px',
              boxShadow:'none',
              borderRadius:'1px'
              ,display:'inline-flex' ,
           
            }}
          >
            <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "100px",fontSize:'18px', marginBottom: "10px"}}
            >
              Sustainability
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" ,width:'370px',fontFamily:'DM Sans',fontSize:'13px'}}>
            We are dedicated to sustainable practices that positively impact our community and environment.
             Our commitment to responsibility ensures we contribute to a better future for generations to come.
            </Typography></Box>
            <Box>
            <img src={Ic3} style={{marginTop:'10px',marginLeft:'6%'}}/></Box>
           </Box>


           <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: "20px",
              marginLeft:'16px',
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: 'left',
              width:'525px',
              boxShadow:'none',
              borderRadius:'1px'
              ,display:'inline-flex' 
            }}
          >
            <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "100px",fontSize:'18px', marginBottom: "10px"}}
            >
              Integrity
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" ,width:'370px',fontFamily:'DM Sans',fontSize:'13px'}}>
            We operate with honesty and uphold the highest ethical standards. Integrity is the
             cornerstone of our business,
             guiding our actions and decisions to earn the trust of our clients and partners.
            </Typography></Box>
            <Box>
            <img src={Ic4} style={{marginTop:'10px',marginLeft:'6%'}}/></Box>
           </Box>

      </Grid>

      
    </Box>
    </>
    );
}

export default About;
