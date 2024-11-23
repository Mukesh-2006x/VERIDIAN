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














function Ourteam(){
    return(
        <>
        <Typography
        sx={{
          position: 'absolute',
          top: '38%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          zIndex: 1, 
          
          fontSize:'30px',
         
        

        }}
      >
       Our Team
      </Typography>
      <Box sx={{ position: 'absolute',
          top: '48%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
         
          zIndex: 1,}}>
      <div style={{ width: "90%", marginTop: "50px" }}>
      <div className="custom-prev"><img src={Left}/></div>
      <div className="custom-next"><img src={Right}/></div>
      <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
      nextEl: '.custom-next', // Linked to custom next button
      prevEl: '.custom-prev', // Linked to custom previous button
    }}
    style={{ width: '1200px' }}
    loop={true}
    
  >
          <SwiperSlide>
            <div
             
            >
               <img src={Containe} style={{width:'1200px'}}/>

               

               <Typography
             sx={{
          position: 'absolute',
          top: '36%', 
          left: '56%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
          fontFamily:'DM Sans', 
          fontSize:'14px',
          color:'#717B85'
        }}
      >
       Julian is an experienced lawyer, businessman and investor with over 25 years of start-up,
        private and public company experience. In the internet and iGaming industries – including America
         Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast 
         growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder 
         of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.
      </Typography>
      
      
      <img src={Namecard} style={{
          position: 'absolute',
          top: '85%', 
          left: '44%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>

<Typography
        sx={{
          position: 'absolute',
          top: '82%', 
          left: '38.5%',
          transform: 'translate(-50%, -50%)',
        color:'white',
          
          zIndex: 1, 
          
          fontSize:'20px',
          
          

        }}
      >
       Julian Jarvis
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          top: '88%', 
          left: '42%',
          transform: 'translate(-50%, -50%)',
        color:'white',
        fontFamily:'DM Sans', 
          zIndex: 1, 
          
          fontSize:'14px',
          
          

        }}
      >
       Chairman, Founder and CEO
      </Typography>

      <img src={U1} style={{ position: 'absolute',
          top: '57.8%', 
          left: '22%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>
      
               
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
            
            >
              <img src={Containe} style={{width:'1200px'}}/>

              <Typography
             sx={{
          position: 'absolute',
          top: '25%', 
          left: '56%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
          fontFamily:'DM Sans', 
          fontSize:'12px',
          color:'#717B85'
        }}
      >
      Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce
       operators establishing a presence in Gibraltar and expanding their activities internationally. 
       This has included working with investment groups and private client family offices.In his capacity
        as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, 
        Peter’s area of expertise is in Gibraltar and international commercial and private client matters.
      </Typography>

      <Typography
             sx={{
          position: 'absolute',
          top: '55%', 
          left: '56%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
          fontFamily:'DM Sans', 
          fontSize:'12px',
          color:'#717B85'
        }}
      >
         Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise 
         on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous
          changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s
           Minister for Trade and Industry, with responsibility for economic development and financial services,
       between May 1996 and February 2000. Peter was appointed KC in Gibraltar in June 2014.
      </Typography>
      
      
      
      <img src={Namecard} style={{
          position: 'absolute',
          top: '85%', 
          left: '44%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>

<Typography
        sx={{
          position: 'absolute',
          top: '84.5%', 
          left: '43%',
          transform: 'translate(-50%, -50%)',
        color:'white',
          
          zIndex: 1, 
          
          fontSize:'20px',
          
          

        }}
      >
       Peter Montegriffo KC
      </Typography>
     

      <img src={U2} style={{ position: 'absolute',
          top: '61%', 
          left: '22%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
             
            >
              <img src={Containe} style={{width:'1200px'}}/>

              <Typography
             sx={{
          position: 'absolute',
          top: '25%', 
          left: '56%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
          fontFamily:'DM Sans', 
          fontSize:'14px',
          color:'#717B85'
        }}
      >
      Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the 
      Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has 
      advised numerous international gaming companies in matters of taxation and is a regular adviser
       to other industries on matters of both domestic Gibraltar taxation and international taxation.

      </Typography>
      <Typography
             sx={{
          position: 'absolute',
          top: '54%', 
          left: '56%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
          fontFamily:'DM Sans', 
          fontSize:'14px',
          color:'#717B85'
        }}
      >

        He has written extensively on international information exchange mechanisms, the current international
         taxation reform in the context of the rule of law and British Overseas Territories and constitutional
          relationships between BOTs and the United Kingdom, 
      and is the Head of the Tax Advisory Team and partner at Hassans.
      </Typography>
      
      
      <img src={Namecard} style={{
          position: 'absolute',
          top: '85%', 
          left: '43%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>

<Typography
        sx={{
          position: 'absolute',
          top: '84.5%', 
          left: '41%',
          transform: 'translate(-50%, -50%)',
        color:'white',
          
          zIndex: 1, 
          
          fontSize:'20px',
          
          

        }}
      >
       Grahame Jackson
      </Typography>
     

      <img src={U3} style={{ position: 'absolute',
          top: '52%', 
          left: '22%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, }}/>


            </div>
          </SwiperSlide>
        </Swiper>

        <style jsx>{`
    .custom-prev,
    .custom-next {
      position: absolute;
      top: 50%;
      z-index: 10;
      font-size: 24px;
      cursor: pointer;
      color: black; /* Adjust as needed */
    }
    .custom-prev {
      left: 20px; /* Position for previous button */
    }
    .custom-next {
      right: 20px; /* Position for next button */
    }
  `}</style>

      </div>
    </Box>
    </>
 
    )
}
export default Ourteam;