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











function Cards(){
    return(
        <Box>

    <Typography
        sx={{
          position: 'absolute',
          top: '65%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          zIndex: 1, 
          
          fontSize:'35px',
         
        

        }}
      >
       Holistic Investment Approach
      </Typography>




      <Box  sx={{
          position: 'absolute',
          top: '82%', 
          left: '18%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
        }}>
      <Card sx={{ maxWidth: 382,height:'665px',backgroundColor:'white',boxShadow:'none',borderRadius:'1px' }}>
        <Box  sx={{ width:317 ,height: 186 ,padding:'45px',paddingLeft:'34px'}}>
      <CardMedia
        sx={{ width:317 ,height: 186 }}
        image={C1}
        title="green iguana"
      /></Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop:'60px',paddingLeft:'20px',paddingRight:'20px',fontSize:'22px'}}>
        Investment focus and strategy
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',paddingLeft:'20px',paddingRight:'20px',fontSize:'13px',fontFamily:'DM Sans',paddingTop:'20px'}}>
        Veridian focuses on companies across a number of different sectors, predominantly
         internet-based companies with long term growth potential, with the aim of releasing the
          potential of businesses, sustainably 
        improving operations and generating significant growth and profitability.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',paddingLeft:'20px',paddingRight:'20px',fontSize:'13px',fontFamily:'DM Sans',paddingTop:'10px'}}>
        Our investment strategy creates value at every stage of an investment. Utilizing the strengths
         of our industry experienced team, Veridian has crafted a streamlined process from identifying 
         potential opportunities through due diligence and deal documentation and onward to integration 
         and transformation. Veridian’s unique combination 
        of people and processes is market-tested to generate and release significant value and growth.
        </Typography>
      </CardContent>
    </Card>


    



    
      </Box>











      <Box  sx={{
          position: 'absolute',
          top: '82%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
        }}>
      <Card sx={{ maxWidth: 382,height:'665px',backgroundColor:'white',boxShadow:'none',borderRadius:'1px'  }}>
        <Box  sx={{ width:317 ,height: 186 ,padding:'45px',paddingLeft:'34px'}}>
      <CardMedia
        sx={{ width:317 ,height: 186 }}
        image={C2}
        title="green iguana"
      /></Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop:'60px',paddingLeft:'20px',paddingRight:'20px',fontSize:'22px'}}>
        Portfolio
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',paddingLeft:'20px',paddingRight:'20px',fontSize:'13px',fontFamily:'DM Sans',paddingTop:'20px'}}>
        The central investment of Veridian is in the Pragmatic Play group of companies headed by 
        Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing 
        player-favourites to the most successful global brands in the iGaming industry.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',paddingLeft:'20px',paddingRight:'20px',fontSize:'13px',fontFamily:'DM Sans',paddingTop:'10px'}}>
        Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio
         of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major
          regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and 
          responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its 
        partners worldwide with a dedication to creating games that players love time and time again.
        </Typography>
      </CardContent>
    </Card>


    



    
      </Box>


















      <Box  sx={{
          position: 'absolute',
          top: '82%', 
          right: '-12%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
        }}>
      <Card sx={{ maxWidth: 382,height:'665px' ,backgroundColor:'white',boxShadow:'none',borderRadius:'1px' }}>
        <Box  sx={{ width:317 ,height: 186 ,padding:'45px',paddingLeft:'34px'}}>
      <CardMedia
        sx={{ width:317 ,height: 186 }}
        image={C3}
        title="green iguana"
      /></Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop:'60px',paddingLeft:'20px',paddingRight:'20px',fontSize:'22px'}}>
        Corporate social responsibility
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',paddingLeft:'20px',paddingRight:'20px',fontSize:'13px',fontFamily:'DM Sans',paddingTop:'20px'}}>
        Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, 
        and consideration of ESG issues improves portfolio company performance and investment results.
        </Typography>
        
      </CardContent>
    </Card>


    



    
      </Box>


      

</Box>
    )
}
export default Cards;