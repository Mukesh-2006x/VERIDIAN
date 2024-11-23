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


import Cards from './cards'
import About from './about'
import Ourteam from './ourteam'
import Cont from './contact'
import Homes from './mainpage'

function Home() {
  return (
<Box>

<Homes/>


<Box sx={{ position: 'relative'}}>
 <img src={Bg2} style={{width:'100%',}}/> 
<About/>
<Ourteam/>
<Cards/>
</Box>


<Cont/>
       



</Box>
  );
}

export default Home;
